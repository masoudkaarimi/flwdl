// config
import { APP_NAME } from "@/config";

// components
import Content from "./Content";

export const metadata = {
   title: `${APP_NAME} | Contacts`,
   description: "Downloader Wep Application",
};
export default function Contacts() {
   return (
      <>
         <Content />
      </>
   );
}
