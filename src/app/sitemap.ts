import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://ai-text-helper.vercel.app";
  return [
    {
      url: `${baseUrl}/`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/caption-jualan-online`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/caption-promosi-wa`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/caption-instagram`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/ringkas-teks-otomatis`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/parafrase-kalimat`,
      lastModified: new Date(),
    },
  ];
}
