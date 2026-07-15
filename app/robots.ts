import type { MetadataRoute } from "next";
import { getSiteUrl } from "@/lib/site";

const aiCrawlers = ["GPTBot", "ChatGPT-User", "ClaudeBot", "Anthropic-AI", "PerplexityBot", "Google-Extended", "Applebot-Extended"];

export default function robots(): MetadataRoute.Robots {
  const base = getSiteUrl();
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/"
      },
      ...aiCrawlers.map((userAgent) => ({
        userAgent,
        allow: "/"
      }))
    ],
    sitemap: `${base}/sitemap.xml`,
    host: base
  };
}
