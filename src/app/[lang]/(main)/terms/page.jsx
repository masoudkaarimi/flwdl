// config
import { APP_NAME } from "@/config";

// components
import Content from "./content";

export const metadata = {
   title      : `${APP_NAME} | Terms`,
   description: "Downloader Wep Application",
};

export default function Terms() {
   return (
      <>
         <Content />
      </>
   );
}
