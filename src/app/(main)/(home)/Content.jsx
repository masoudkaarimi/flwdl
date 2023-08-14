"use client";
import Features from "@/components/main/Features";
import HowToUse from "@/components/main/HowToUse";
import Image from "next/image";
import { Box, Grid, Typography } from "@mui/material";
import { useTheme } from "@mui/material/styles";

// config
import { APP_NAME } from "@/config";

// components
import BoxContent from "@/components/BoxContent";
import OurServices from "@/components/main/OurServices";
import WhyUseUs from "@/components/main/WhyUseUs";
import Faqs from "@/components/main/Faqs";

export default function Content() {
   const theme = useTheme();
   return (
      <>
         {/* Features */}
         <BoxContent
            contentWidth={"boxed"}
            rounded
            bgColor={theme.palette.background.default}
            sx={{ py: 3, my: 6, boxShadow: "0px 50px 50px rgb(0 0 0 / 8%)" }}
         >
            <Typography
               variant="h3"
               component="h3"
               color={"text.primary"}
               sx={{ textAlign: { xs: "left", sm: "center" } }}
            >
               Instagram Downloads Features
            </Typography>
            <Typography variant={"body2"} color={"text.secondary"} sx={{ textAlign: { xs: "left", sm: "center" } }}>
               Our service allows you to download any content from Instagram to your computer or smartphone. Choose what
               you want to save.
            </Typography>
            <Features />
         </BoxContent>

         {/* How To Use */}
         <BoxContent contentWidth={"boxed"} rounded bgColor={theme.palette.background.paper} sx={{ py: 3, my: 6 }}>
            <Typography
               variant="h3"
               component="h3"
               color={"text.primary"}
               sx={{ textAlign: { xs: "left", sm: "center" } }}
            >
               How To Use
            </Typography>
            <Typography variant={"body2"} color={"text.secondary"} sx={{ textAlign: { xs: "left", sm: "center" } }}>
               How to download Instagram photos and videos, highlights, etc.?
            </Typography>
            <HowToUse />
         </BoxContent>

         {/* Our Services */}
         <BoxContent
            contentWidth={"full"}
            bgColor={`linear-gradient(to bottom, ${theme.palette.primary.main}, ${theme.palette.primary.darker})`}
            sx={{ py: 6, my: 6 }}
         >
            <Typography
               variant="h3"
               component="h3"
               color={"common.white"}
               sx={{ textAlign: { xs: "left", sm: "center" } }}
            >
               Our Services
            </Typography>
            <Typography variant={"body2"} color={"grey.400"} sx={{ textAlign: { xs: "left", sm: "center" } }}>
               Our service allows you to download any content from Instagram to your computer or smartphone. Choose what
               you want to save.
            </Typography>
            <OurServices />
         </BoxContent>

         {/* Why Use Us */}
         <BoxContent contentWidth={"boxed"}>
            <Typography variant="h3" component="h3" sx={{ textAlign: { xs: "left", sm: "center" } }}>
               Why you should use {APP_NAME}
            </Typography>
            <Typography variant={"body2"} color={"text.secondary"} sx={{ textAlign: { xs: "left", sm: "center" } }}>
               {APP_NAME} app is the best downloader that helps you download photos and videos, highlights, etc. in high
               quality.
            </Typography>
            <Grid container sx={{ my: 6, alignItems: "center" }} spacing={3}>
               <WhyUseUs />
            </Grid>
         </BoxContent>

         {/* FAQs */}
         <BoxContent contentWidth={"full"} bgColor={theme.palette.background.paper} sx={{ py: 6, my: 6 }}>
            <Grid container>
               <Grid item xs={12} sm={6}>
                  <Typography variant="h3" component="h3">
                     FAQs on Instagram Downloader
                  </Typography>
                  <Typography variant={"body1"} color={"text.secondary"}>
                     Here we give answers to frequently asked questions on how to download Instagram photos and videos,
                     highlights, etc.
                  </Typography>
               </Grid>
               <Grid item xs={12} sm={6}>
                  <Faqs />
               </Grid>
            </Grid>
         </BoxContent>

         {/* Contents */}
         <BoxContent contentWidth={"boxed"} sx={{ py: 3, my: 6 }}>
            <Grid container spacing={5}>
               <Grid item xs={12} sm={4}>
                  <Image
                     src={"/images/placeholder.webp"}
                     width={"350"}
                     height={"250"}
                     alt={"Image Placeholder"}
                     style={{ borderRadius: "7px" }}
                  />
               </Grid>
               <Grid item xs={12} sm={8}>
                  <Typography variant="h3" component="h3">
                     Why Should You Download Instagram Photos?
                  </Typography>
                  <Typography variant={"body2"} color={"text.secondary"}>
                     You can find thousands of sites online and applications in the app markets like Apple's App Store
                     or Google Play Store. A few of them may work flawlessly, but usually, a notable portion of them are
                     scams, and it is not a great idea to install them; they can steal all your information, even credit
                     card details, and steal your hard-earned money. By downloading those shady apps, you can put
                     yourself in danger because of curiosity. Some of those apps require payment to install, so why
                     would you spend your precious money while you can download Instagram photos for free? These apps
                     may ask you to be a member of the app. To sign up as a member, you need to give them some
                     permissions and information about you, like your mail address, location, to access your call logs,
                     messages, etc. You shall never trust them.
                  </Typography>
               </Grid>
            </Grid>
         </BoxContent>

         {/* Contents */}
         <BoxContent contentWidth={"boxed"} sx={{ py: 3, my: 6 }}>
            <Grid container spacing={5}>
               <Grid item xs={12} sm={8}>
                  <Typography variant="h3" component="h3">
                     Why Should You Download Instagram Photos?
                  </Typography>
                  <Typography variant={"body2"} color={"text.secondary"}>
                     You can find thousands of sites online and applications in the app markets like Apple's App Store
                     or Google Play Store. A few of them may work flawlessly, but usually, a notable portion of them are
                     scams, and it is not a great idea to install them; they can steal all your information, even credit
                     card details, and steal your hard-earned money. By downloading those shady apps, you can put
                     yourself in danger because of curiosity. Some of those apps require payment to install, so why
                     would you spend your precious money while you can download Instagram photos for free? These apps
                     may ask you to be a member of the app. To sign up as a member, you need to give them some
                     permissions and information about you, like your mail address, location, to access your call logs,
                     messages, etc. You shall never trust them.
                  </Typography>
               </Grid>
               <Grid item xs={12} sm={4}>
                  <Image
                     src={"/images/placeholder.webp"}
                     width={"350"}
                     height={"250"}
                     alt={"Image Placeholder"}
                     style={{ borderRadius: `${theme.shape.borderRadius}px` }}
                  />
               </Grid>
            </Grid>
         </BoxContent>
      </>
   );
}
