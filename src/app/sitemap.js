import { APP_BASE_URL } from "@/config";

export default async function sitemap() {
   const urls = [{ url: APP_BASE_URL, lastModified: new Date() }];
   const staticPages = ["about", "contacts", "faqs", "help", "terms"];

   for (const page of staticPages) {
      urls.push({
         url: `${APP_BASE_URL}/${page}`,
         lastModified: new Date(),
         changeFrequency: "weekly",
         priority: 0.5,
      });
   }

   return urls;
}
