import Image from "next/image";
import Link from "next/link";

// config
import { APP_NAME } from "@/config";

// public
import logo from "@/public/images/logo.svg";
import logoMini from "@/public/images/logo-mini.svg";

export default function Logo({ disabledLink = false, mini = false, width, height }) {
   if (disabledLink) {
      return (
         <>
            {mini ? (
               <Image src={logoMini} alt={`${APP_NAME} Logo`} width={width} height={height} />
            ) : (
               <Image src={logo} alt={`${APP_NAME} Logo`} width={width} height={height} />
            )}
         </>
      );
   }

   return (
      <Link href="/">
         {mini ? (
            <Image src={logoMini} alt={`${APP_NAME} Logo`} width={width} height={height} />
         ) : (
            <Image src={logo} alt={`${APP_NAME} Logo`} width={width} height={height} />
         )}
      </Link>
   );
}
