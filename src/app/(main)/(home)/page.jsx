// config
import { APP_NAME } from "@/config";

// components
import Content from "./Content";

export const metadata = {
   title: `${APP_NAME} | Home`,
   description: "Downloader Wep Application",
};

export default async function Home() {
   const queries = new URLSearchParams({
      brand: "instagram",
      action: "photos",
      link: "",
      // username  : "",
      // id_user  : "",
   });

   // const response = await fetch(`${APP_BASE_API_URL}/v1/instagram?${queries}`, {
   //    method : "GET",
   //    headers: {
   //       "Content-Type": "application/json",
   //       "Accept"      : "application/json",
   //    },
   // });
   //
   // const data = await response.json();
   // console.log(data);

   return (
      <>
         <Content />
      </>
   );
}
