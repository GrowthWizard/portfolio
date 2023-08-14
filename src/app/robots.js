export default function robots() {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "",
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
    ],
    sitemap: "https://steindominik.de/sitemap.xml",
  };
}