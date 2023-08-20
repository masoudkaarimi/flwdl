import SvgIcon from "@/components/SvgIcon";
import Link from "next/link";

export default function Logo({ disabledLink = false, mini = false, width, height, sx }) {
   const logo = <SvgIcon src={"/images/logo.svg"} sx={[{ width, height }, ...(Array.isArray(sx) ? sx : [sx])]} />;
   const logoMini = (
      <SvgIcon src={"/images/logo-mini.svg"} sx={[{ width, height }, ...(Array.isArray(sx) ? sx : [sx])]} />
   );

   if (disabledLink) return mini ? logoMini : logo;

   return <Link href="/">{mini ? logoMini : logo}</Link>;
}
