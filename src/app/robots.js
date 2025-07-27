import { APP_BASE_URL } from "@/config";

export default function robots() {
   return {
      rules  : {
         userAgent: "*",
         allow    : ["/"],
      },
      sitemap: `${APP_BASE_URL}/sitemap.xml`,
   };
}
