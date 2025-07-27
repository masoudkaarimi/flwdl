import Link from "next/link";
import { Box, Divider, Typography } from "@mui/material";
import { useTheme } from "@mui/material/styles";

// config
import { APP_NAME } from "@/config";

// components
import Logo from "@/components/logo";
import BoxContent from "@/components/box-content";

export default function Footer() {
   const theme = useTheme();

   return (
      <BoxContent
         contentWidth={"full"}
         bgColor={theme.palette.background.paper}
         component={"footer"}
         sx={{ py: 3, borderRadius: `${theme.shape.borderRadius * 8}px ${theme.shape.borderRadius * 8}px 0 0` }}
      >
         <Box
            sx={{
               display: "flex",
               justifyContent: "space-between",
               alignItems: "center",
               flexWrap: { xs: "wrap", sm: "no-wrap" },
               mb: 3,
            }}
         >
            <Box
               sx={{
                  display: "flex",
                  justifyContent: { xs: "center", sm: "space-between" },
                  alignItems: "center",
                  flexWrap: { xs: "wrap", sm: "no-wrap" },
                  gap: 1,
               }}
            >
               <Logo width={120} height={50} />

               <Divider
                  orientation="vertical"
                  variant={"middle"}
                  flexItem
                  sx={{ display: { xs: "none", sm: "block" } }}
               />
               <Typography variant={"body1"} color={"text.secondary"}>
                  All rights reserved © {APP_NAME}
               </Typography>
            </Box>

            <Box
               component={"nav"}
               sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: 1,
                  my: { xs: 3, sm: 0 },
                  flexWrap: { xs: "wrap", sm: "no-wrap" },
                  justifyContent: { xs: "center", sm: "space-between" },
               }}
            >
               <Link href={"/"}>
                  <Typography variant={"body2"} color={"text.secondary"}>
                     Home
                  </Typography>
               </Link>
               <Divider orientation="vertical" variant={"fullWidth"} flexItem />
               <Link href={"/blog"}>
                  <Typography variant={"body2"} color={"text.secondary"}>
                     Blog
                  </Typography>
               </Link>
               <Divider orientation="vertical" variant={"fullWidth"} flexItem />
               <Link href={"/faqs"}>
                  <Typography variant={"body2"} color={"text.secondary"}>
                     FAQs
                  </Typography>
               </Link>
               <Divider orientation="vertical" variant={"fullWidth"} flexItem />
               <Link href={"/about"}>
                  <Typography variant={"body2"} color={"text.secondary"}>
                     About
                  </Typography>
               </Link>
               <Divider orientation="vertical" variant={"fullWidth"} flexItem />
               <Link href={"/contacts"}>
                  <Typography variant={"body2"} color={"text.secondary"}>
                     Contacts
                  </Typography>
               </Link>
               <Divider orientation="vertical" variant={"fullWidth"} flexItem />
               <Link href={"/terms"}>
                  <Typography variant={"body2"} color={"text.secondary"}>
                     Terms of service
                  </Typography>
               </Link>
            </Box>
         </Box>

         <Typography variant={"body2"} textAlign={"center"} color={"text.secondary"}>
            {APP_NAME} is not connected with Instagram. We do not host any of the Instagram content on our servers, all
            rights belong to their respective owners.
         </Typography>
      </BoxContent>
   );
}
