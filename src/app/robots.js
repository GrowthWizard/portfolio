export default function robots() {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: "",
      },
      {
        userAgent: "GPTBot",
        allow: "",
        disallow: "/",
      },
      {
        userAgent: "CCBot",
        allow: "",
        disallow: "/",
      },
      {
        userAgent: "Google-Extended",
        allow: "",
        disallow: "/",
      },
    ],
    sitemap: "https://steindominik.de/sitemap.xml",
  };
}