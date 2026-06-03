import argparse
import csv
import json
import re
import sys
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
DEFAULT_CSV_PATH = Path("/Users/isingh/Downloads/listings-1777327336348 (2).csv")
REVIEWS_PATH = ROOT / "data" / "google-reviews.json"
OUT_PATH = ROOT / "data" / "centres.ts"

INCLUDE_NON_UK_NAMES = {
    "ADAnimal Physiotherapy",
    "Fleetfoot Animal Physiotherapy",
    "Vetannery Physiotherapy",
    "Veterinary Physio Clinic",
}


def slugify(value):
    value = (value or "").lower().strip()
    value = re.sub(r"[^a-z0-9]+", "-", value)
    return re.sub(r"(^-|-$)", "", value) or "centre"


def number(value):
    if value in (None, ""):
        return None
    try:
        return float(value)
    except ValueError:
        return None


def integer(value):
    if value in (None, ""):
        return None
    try:
        return int(float(value))
    except ValueError:
        return None


def service_tags(row):
    text = " ".join(
        [
            row.get("Business Name") or "",
            row.get("Business Type") or "",
            row.get("Review Keywords") or "",
        ]
    ).lower()
    result = []
    checks = [
        ("Hydrotherapy", ["hydro", "hydrotherapy"]),
        ("Physiotherapy", ["physio", "physical therapist", "physical therapy"]),
        ("Rehab", ["rehab", "rehabilitation", "recovery"]),
        ("Swimming Pool", ["swim", "pool", "aquatic"]),
        ("Treadmill", ["treadmill"]),
        ("Mobility", ["mobility", "arthritis", "senior", "conditioning"]),
    ]
    for label, needles in checks:
        if any(needle in text for needle in needles):
            result.append(label)
    if not result:
        business_type = (row.get("Business Type") or "").strip()
        if business_type:
            result.append(business_type)
    return result[:4]


def load_reviews():
    if not REVIEWS_PATH.exists():
        return {}
    return json.loads(REVIEWS_PATH.read_text(encoding="utf-8"))


def parse_args():
    parser = argparse.ArgumentParser(description="Import UK/Ireland centre listings into data/centres.ts")
    parser.add_argument(
        "--csv",
        type=Path,
        default=DEFAULT_CSV_PATH,
        help="Path to listings CSV export",
    )
    return parser.parse_args()


def main():
    args = parse_args()
    csv_path = args.csv
    if not csv_path.exists():
        print(f"CSV not found: {csv_path}", file=sys.stderr)
        sys.exit(1)

    rows = list(csv.DictReader(csv_path.open(newline="", encoding="utf-8-sig")))
    reviews_by_place_id = load_reviews()
    excluded = []
    centres = []
    seen = {}

    for row in rows:
        address = row.get("Address") or ""
        phone = row.get("Phone") or ""
        name = (row.get("Business Name") or "").strip()
        include = "United Kingdom" in address or phone.startswith("+44") or name in INCLUDE_NON_UK_NAMES

        if not include:
            excluded.append(
                {
                    "name": name,
                    "locality": row.get("Locality"),
                    "address": address,
                    "reason": "Obvious North America record excluded from UK/Ireland directory import",
                }
            )
            continue

        base = slugify(row.get("URL Slug") or name)
        slug = base
        seen[base] = seen.get(base, 0) + 1
        if seen[base] > 1:
            slug = f"{base}-{seen[base]}"

        place_id = (row.get("Google Place ID") or "").strip()
        review_payload = reviews_by_place_id.get(place_id, {})

        centres.append(
            {
                "id": row.get("id"),
                "googlePlaceId": place_id,
                "googleMapsUrl": review_payload.get("googleMapsUrl"),
                "name": name,
                "slug": slug,
                "category": (row.get("Business Type") or "Canine therapy centre").strip(),
                "address": address.strip(),
                "city": (row.get("Locality") or "").strip(),
                "region": (row.get("State") or row.get("Locations") or "").strip(),
                "postcode": (row.get("Postal Code") or "").strip(),
                "phone": (row.get("Phone") or "").strip() or None,
                "website": (row.get("Website") or "").strip() or None,
                "rating": number(row.get("Rating")),
                "reviewCount": integer(row.get("Rating Count")),
                "latitude": number(row.get("Latitude")),
                "longitude": number(row.get("Longitude")),
                "image": (row.get("Image") or "").strip() or None,
                "serviceTags": service_tags(row),
                "reviewKeywords": [
                    item.strip()
                    for item in (row.get("Review Keywords") or "").split(";")
                    if item.strip()
                ][:8],
                "reviews": review_payload.get("reviews", []),
            }
        )

    content = (
        "export type CentreReview = {\n"
        "  authorName: string;\n"
        "  rating: number | null;\n"
        "  text: string;\n"
        "  relativePublishTimeDescription: string | null;\n"
        "  publishTime: string | null;\n"
        "};\n\n"
        "export type Centre = {\n"
        "  id: string;\n"
        "  googlePlaceId: string;\n"
        "  googleMapsUrl: string | null;\n"
        "  name: string;\n"
        "  slug: string;\n"
        "  category: string;\n"
        "  address: string;\n"
        "  city: string;\n"
        "  region: string;\n"
        "  postcode: string;\n"
        "  phone: string | null;\n"
        "  website: string | null;\n"
        "  rating: number | null;\n"
        "  reviewCount: number | null;\n"
        "  latitude: number | null;\n"
        "  longitude: number | null;\n"
        "  image: string | null;\n"
        "  serviceTags: string[];\n"
        "  reviewKeywords: string[];\n"
        "  reviews: CentreReview[];\n"
        "};\n\n"
        "// Ireland records requested by the site owner are included. Only the clear North America records remain excluded.\n"
        f"export const excludedNonUkRecords = {json.dumps(excluded, indent=2)} as const;\n\n"
        f"export const centres: Centre[] = {json.dumps(centres, indent=2, ensure_ascii=False)};\n"
    )
    OUT_PATH.write_text(content, encoding="utf-8")
    print(f"wrote {len(centres)} centres; excluded {len(excluded)}")


if __name__ == "__main__":
    main()
