import { useEffect, useRef } from "react";
import { Stack, Typography } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import Typed from "typed.js";

// components
import SubHeading from "@/components/main/sub-heading";
import SvgIcon from "@/components/svg-icon";
import LandingTabs from "@/components/main/landing/landing-tabs";

export default function LandingHero() {
   const theme = useTheme();

   const servicesEl = useRef(null);

   useEffect(() => {
      const typedServices = new Typed(servicesEl.current, {
         strings: [
            "📷 Photos",
            "📹 Videos",
            "👥 Profile",
            "📺 IGTVs",
            "🌀 Reels",
            "🖼️ Profile Picture",
            "🎞️ Stories",
            "📜 Posts",
            "🌟 Highlights",
         ],
         startDelay: 1500,
         typeSpeed: 100,
         backSpeed: 50,
         backDelay: 1500,
         // fadeOut: true,
         smartBackspace: true,
         showCursor: true,
         shuffle: true,
         loop: false,
      });

      return () => {
         typedServices.destroy();
      };
   }, []);

   return (
      <>
         <SubHeading title={"Instagram Downloader"}>
            <Stack flexDirection={"row"} alignItems={"center"} gap={1} mb={3}>
               <SvgIcon name={"heart-outline"} sx={{ width: 35, color: "error.main" }} />
               <Typography variant={"h4"} component={"h2"} fontWeight={theme.typography.fontWeightRegular}>
                  Fast and free all in one Instagram downloader
               </Typography>
            </Stack>
            <Typography variant={"h4"} component={"h2"} fontWeight={theme.typography.fontWeightLight}>
               Download Instagram <strong ref={servicesEl}>🖼️ Photos</strong>
            </Typography>

            <LandingTabs />
         </SubHeading>
      </>
   );
}
