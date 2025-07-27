// config
import { APP_NAME } from "@/config";

// components
import Content from "./content";

export const metadata = {
   title: `${APP_NAME} | Help`,
   description: "Downloader Wep Application",
};

export default function Help() {
   return (
      <>
         <Content />
      </>
   );
}
