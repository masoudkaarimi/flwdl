// config
import { APP_NAME } from "@/config";

// components
import Content from "./Content";

export const metadata = {
   title: `${APP_NAME} | About`,
   description: "Downloader Wep Application",
};

export default function About() {
   return (
      <>
         <Content />
      </>
   );
}
