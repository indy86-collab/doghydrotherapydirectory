import csv
import json
import os
import time
import urllib.parse
import urllib.error
import urllib.request
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
CSV_PATH = Path("/Users/isingh/Downloads/listings-1777327336348 (2).csv")
CACHE_PATH = ROOT / "data" / "google-reviews.json"


def normalise_review(review):
    return {
        "authorName": review.get("author_name") or "Google reviewer",
        "rating": review.get("rating"),
        "text": review.get("text") or "",
        "relativePublishTimeDescription": review.get("relative_time_description"),
        "publishTime": str(review.get("time")) if review.get("time") else None,
    }


def fetch_place_reviews(place_id, api_key):
    query = urllib.parse.urlencode(
        {
            "place_id": place_id,
            "fields": "reviews,rating,user_ratings_total,url",
            "key": api_key,
        }
    )
    url = f"https://maps.googleapis.com/maps/api/place/details/json?{query}"
    request = urllib.request.Request(url)
    with urllib.request.urlopen(request, timeout=20) as response:
        payload = json.loads(response.read().decode("utf-8"))
    if payload.get("status") != "OK":
        raise RuntimeError(f"{payload.get('status')}: {payload.get('error_message')}")
    result = payload.get("result", {})
    reviews = [
        normalise_review(review)
        for review in result.get("reviews", [])
        if review.get("text")
    ][:5]
    return {
        "googleRating": result.get("rating"),
        "googleReviewCount": result.get("user_ratings_total"),
        "googleMapsUrl": result.get("url"),
        "reviews": reviews,
        "fetchedAt": time.strftime("%Y-%m-%dT%H:%M:%SZ", time.gmtime()),
    }


def main():
    api_key = os.environ.get("GOOGLE_MAPS_API_KEY")
    if not api_key:
        raise SystemExit("GOOGLE_MAPS_API_KEY is required")

    existing = {}
    if CACHE_PATH.exists():
        existing = json.loads(CACHE_PATH.read_text(encoding="utf-8"))

    rows = list(csv.DictReader(CSV_PATH.open(newline="", encoding="utf-8-sig")))
    place_ids = []
    for row in rows:
        place_id = (row.get("Google Place ID") or "").strip()
        if place_id and place_id not in place_ids:
            place_ids.append(place_id)

    fetched = 0
    failed = {}
    for index, place_id in enumerate(place_ids, start=1):
        if place_id in existing and existing[place_id].get("reviews") and existing[place_id].get("googleMapsUrl"):
            continue
        try:
            existing[place_id] = fetch_place_reviews(place_id, api_key)
            fetched += 1
            print(f"[{index}/{len(place_ids)}] fetched {place_id}: {len(existing[place_id]['reviews'])} reviews")
        except urllib.error.HTTPError as error:
            body = error.read().decode("utf-8", errors="replace")
            failed[place_id] = {"status": error.code, "body": body[:500]}
            print(f"[{index}/{len(place_ids)}] failed {place_id}: HTTP {error.code}")
        except Exception as error:
            failed[place_id] = {"error": str(error)}
            print(f"[{index}/{len(place_ids)}] failed {place_id}: {error}")
        time.sleep(0.05)

    CACHE_PATH.write_text(json.dumps(existing, indent=2, ensure_ascii=False), encoding="utf-8")
    if failed:
        (ROOT / "data" / "google-reviews-errors.json").write_text(json.dumps(failed, indent=2), encoding="utf-8")
    print(f"done; fetched={fetched}; cached={len(existing)}; failed={len(failed)}")


if __name__ == "__main__":
    main()
