"use client";
import SvgIcon from "@/components/SvgIcon";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Box, Button, Grid, InputAdornment, InputBase, Stack, Tab, Typography } from "@mui/material";
import { ContentPasteOutlined, FileDownloadOutlined, LinkOutlined } from "@mui/icons-material";
import Tabs, { tabsClasses } from "@mui/material/Tabs";

import { useTheme } from "@mui/material/styles";

// config
import { APP_NAME } from "@/config";

// components
import SubHeading from "@/components/main/SubHeading";
import BoxContent from "@/components/BoxContent";
import Features from "@/components/main/Secions/Features";
import HowToUse from "@/components/main/Secions/HowToUse";
import OurServices from "@/components/main/Secions/OurServices";
import WhyUseUs from "@/components/main/Secions/WhyUseUs";
import Faqs from "@/components/main/Secions/Faqs";

export default function Content() {
   const [tab, setTab] = useState(0);
   const theme = useTheme();
   const handleChangeTab = (event, newValue) => {
      setTab(newValue);
   };

   const SERVICES = [
      { id: 1, title: "Photos", icon: <SvgIcon name={"instagram/photos"} /> },
      { id: 2, title: "Videos", icon: <SvgIcon name={"instagram/videos"} /> },
      { id: 3, title: "Profile", icon: <SvgIcon name={"instagram/profile"} /> },
      { id: 4, title: "IGTVs", icon: <SvgIcon name={"instagram/igtvs"} /> },
      { id: 5, title: "Reels", icon: <SvgIcon name={"instagram/reels"} /> },
      { id: 6, title: "Profile Picture", icon: <SvgIcon name={"instagram/profile-picture"} /> },
      { id: 7, title: "Stories", icon: <SvgIcon name={"instagram/stories"} /> },
      { id: 8, title: "Posts", icon: <SvgIcon name={"instagram/posts"} /> },
      { id: 9, title: "Highlights", icon: <SvgIcon name={"instagram/highlights"} /> },
   ];

   return (
      <>
         {/* Heading */}
         <SubHeading>
            <Typography variant={"h1"} component={"h1"} gutterBottom>
               Instagram Downloader
            </Typography>

            <Stack flexDirection={"row"} alignItems={"baseline"} gap={1}>
               <svg xmlns="http://www.w3.org/2000/svg" width="28" height="20" viewBox="0 0 30.135 27.875">
                  <path
                     d="M22.107,23.928a40.613,40.613,0,0,1-3.646,2.563c-.451.283-.9.556-1.407.86-.511-.3-.957-.577-1.407-.862A40.544,40.544,0,0,1,12,23.928C7.51,20.357,5,16.456,5,12.02,5,8.488,7.35,5.993,10.273,5.993a6.943,6.943,0,0,1,4.65,2.131l2.131,2.131,2.131-2.131a6.943,6.943,0,0,1,4.65-2.131c2.958,0,5.274,2.471,5.274,6.027,0,4.434-2.509,8.337-7,11.908ZM32.121,12.02c0-5.274-3.71-9.041-8.287-9.041a9.97,9.97,0,0,0-6.78,3.014,9.97,9.97,0,0,0-6.78-3.014c-4.52,0-8.287,3.767-8.287,9.041,0,10.547,11.3,16.574,15.068,18.834,3.767-2.26,15.068-8.287,15.068-18.834Z"
                     transform="translate(-1.986 -2.979)"
                     fill="#ff6363"
                  />
               </svg>
               <Typography
                  variant={"h3"}
                  component={"h3"}
                  color={"grey.300"}
                  fontWeight={theme.typography.fontWeightLight}
                  gutterBottom
               >
                  Fast and free all in one Instagram downloader
               </Typography>
            </Stack>
            <Typography
               variant={"h3"}
               component={"h3"}
               color={"grey.300"}
               fontWeight={theme.typography.fontWeightLight}
               sx={{ mt: 3, mb: 6 }}
            >
               Download Instagram <strong>🖼️ Photos</strong>
            </Typography>

            <Box
               sx={{
                  bgcolor: "rgba(0 0 0 / 35%)",
                  my: 3,
                  p: 4,
                  borderRadius: `${theme.shape.borderRadius * 2}px`,
               }}
            >
               <Stack flexDirection={"row"} justifyContent={"center"}>
                  <Tabs
                     value={tab}
                     onChange={handleChangeTab}
                     variant={"scrollable"}
                     scrollButtons
                     sx={{
                        [`& .MuiTabs-flexContainer`]: {
                           gap: 0.5,
                        },
                        [`& .${tabsClasses.indicator}`]: {
                           height: 45,
                           top:0,
                           background: `linear-gradient(to right, ${theme.palette.secondary.main}, ${theme.palette.third.main})`,
                           borderRadius: `${theme.shape.borderRadius}px`,
                        },
                        [`& .${tabsClasses.scrollButtons}`]: {
                           "&.Mui-disabled": { opacity: 0.3 },
                        },
                     }}
                  >
                     {SERVICES.map((item) => (
                        <Tab
                           key={item.id}
                           sx={{
                              borderRadius: `${theme.shape.borderRadius}px`,
                              color: "grey.400",
                              bgcolor: "rgba(0 0 0 / 20%)",
                              gap: 0.5,
                              minHeight: 45,
                              fontWeight: theme.typography.fontWeightRegular,
                              ...(tab === item.id - 1 && {
                                 bgcolor: "transparent",
                                 zIndex: 1,
                                 fontWeight: theme.typography.fontWeightMedium,
                                 color: "white !important",
                              }),
                           }}
                           label={item.title}
                           icon={item.icon}
                           iconPosition={"start"}
                        />
                     ))}
                  </Tabs>
               </Stack>

               <Box sx={{ my: 5, px: 25 }}>
                  <Typography variant={"body2"} color={"grey.200"}>
                     📌 Press CTRL + D to bookmark this page.
                  </Typography>
                  <Box
                     component="form"
                     sx={{
                        width: 1,
                        my: 1.5,
                        bgcolor: "rgba(0 0 0 / 30%)",
                        py: 2,
                        px: 1.2,
                        border: `3px solid ${theme.palette.secondary.main}`,
                        borderRadius: `${theme.shape.borderRadius * 1.5}px`,
                        display: "flex",
                        alignItems: "center",
                     }}
                  >
                     <InputBase
                        sx={{
                           flex: 1,
                           color: "common.white",
                        }}
                        inputProps={{
                           sx: {
                              fontSize: 14,
                           },
                        }}
                        placeholder="Enter a username, profile link, post link, or shortcode"
                        startAdornment={
                           <InputAdornment position="start">
                              <LinkOutlined sx={{ color: "grey.300" }} />
                           </InputAdornment>
                        }
                        endAdornment={
                           <InputAdornment position="end">
                              <Button
                                 variant={"text"}
                                 size={"large"}
                                 color={"primary"}
                                 startIcon={<ContentPasteOutlined />}
                                 sx={{
                                    mr: 1,
                                    px: 1.5,
                                    bgcolor: "rgba(0 0 0 / 30%)",
                                    color: "grey.400",
                                    fontWeight: theme.typography.fontWeightRegular,
                                 }}
                              >
                                 Paste
                              </Button>
                              <Button
                                 variant={"contained"}
                                 size={"large"}
                                 color={"secondary"}
                                 startIcon={<FileDownloadOutlined />}
                                 sx={{
                                    fontWeight: theme.typography.fontWeightMedium,
                                    px: 1.5,
                                    background: `linear-gradient(to right, ${theme.palette.secondary.main}, ${theme.palette.third.main})`,
                                 }}
                              >
                                 Download
                              </Button>
                           </InputAdornment>
                        }
                     />
                  </Box>
                  <Typography variant={"body2"} color={"grey.200"}>
                     By downloading this video, you agree to the{" "}
                     <Link href={"terms"}>
                        <Typography component={"b"} color={"info.main"}>
                           Fair Use Policy.
                        </Typography>
                     </Link>
                  </Typography>
               </Box>
            </Box>
         </SubHeading>

         {/* Features */}
         <BoxContent
            contentWidth={"boxed"}
            rounded
            bgColor={theme.palette.background.default}
            sx={{ py: 3, mt: -15, mb: 10, boxShadow: "0px 50px 50px rgb(0 0 0 / 8%)" }}
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

         {/* Content */}
         <BoxContent contentWidth={"boxed"} sx={{ py: 3, my: 6 }}>
            <Grid container spacing={5}>
               <Grid item xs={12} sm={6}>
                  <Image
                     src={"/images/13.webp"}
                     width={"440"}
                     height={"320"}
                     alt={"Image Placeholder"}
                     priority
                     style={{ borderRadius: "7px" }}
                  />
               </Grid>
               <Grid item xs={12} sm={6}>
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

         {/* Content */}
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
