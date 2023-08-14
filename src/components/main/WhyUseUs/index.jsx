"use client";
import {
   BoltOutlined,
   GppGoodOutlined,
   LayersOutlined,
   NotificationsOffOutlined,
   PersonOffOutlined,
   PublicOutlined,
   RedeemOutlined,
   ViewInArOutlined,
   WorkspacePremiumOutlined,
} from "@mui/icons-material";
import { Box, Grid, Typography } from "@mui/material";

export default function WhyUseUs({ data }) {
   data = [
      {
         id: 1,
         title: "All-in-one Instagram Downloader",
         body: "FLWDL provides more than ten different tools for downloading content from Instagram that enable you to easily download and save various videos, photos, and other content in seconds.",
         icon: <PublicOutlined />,
      },
      {
         id: 2,
         title: "No Account is Needed",
         body: "FLWDL doesn't need to create an account to download videos and images from Instagram. Just log in to your Instagram account and copy the link you want, and come here.",
         icon: <PersonOffOutlined />,
      },
      {
         id: 3,
         title: "No Ads",
         body: "No annoying advertisements or surgery pages, simple design to let everybody understand the purpose of the tool.",
         icon: <NotificationsOffOutlined />,
      },
      {
         id: 4,
         title: "Easy and Fast",
         body: "You can download and save Instagram videos and photos in just two clicks. No account is needed, and no installing software is required! Just copy the Instagram URL link and paste it to FLWDL.",
         icon: <BoltOutlined />,
      },
      {
         id: 5,
         title: "All Platform Supported",
         body: "Download & save Instagram content from any browser, any OS. FLWDL works on mobile phones, PCs or tablets, and any OS containing Android, iOS, Windows, etc.",
         icon: <LayersOutlined />,
      },
      {
         id: 6,
         title: "Full Free",
         body: "Yes. Our Instagram downloader service is 100% free. You do not need to have any fees and have a bank card. Download and enjoy saving content from Instagram without any restrictions.",
         icon: <RedeemOutlined />,
      },
      {
         id: 7,
         title: "Highest Quality",
         body: "FLWDL Instagram downloader allows you to download and save Instagram photos and videos with the highest quality, like HD and FULL HD 1080p if available.",
         icon: <WorkspacePremiumOutlined />,
      },
      {
         id: 8,
         title: "Fully Secured",
         body: "This downloader tool is secured with HTTPS and doesn't store any personal data. You can use this tool anonymously and download files for free.",
         icon: <GppGoodOutlined />,
      },
      {
         id: 9,
         title: "Multiple Formats",
         body: "There are multiple options available for you to download files, you can select from mp3 audio to mp4 videos.",
         icon: <ViewInArOutlined />,
      },
   ];

   return (
      <Box
         sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexWrap: { xs: "wrap", sm: "no-wrap" },
            gap: { xs: 1, sm: 2 },
            my: 3,
         }}
      >
         {data.map((item) => (
            <Box
               key={item.id}
               sx={(theme) => ({
                  position: "relative",
                  p: 2,
                  pt: 4,
                  mb: 2,
                  height: 160,
                  width: '32%',
                  border: `1px solid ${theme.palette.divider}`,
                  borderRadius: `${theme.shape.borderRadius}px`,
                  transition: theme.transitions.create(["background-color", "border-color"], {
                     duration: theme.transitions.duration.shorter,
                  }),
                  "&:hover": {
                     bgcolor: "background.paper",
                     borderColor: "background.paper",
                  },
               })}
            >
               <Box
                  variant={"rounded"}
                  sx={(theme) => ({
                     width: 50,
                     height: 50,
                     position: "absolute",
                     top: "-25px",
                     display: "flex",
                     justifyContent: "center",
                     alignItems: "center",
                     bgcolor: "primary.main",
                     color: "common.white",
                     borderRadius: `${theme.shape.borderRadius}px`,
                     boxShadow: theme.customShadows.primary,
                  })}
               >
                  {item.icon}
               </Box>
               <Box>
                  <Typography variant={"subtitle1"}>{item.title}</Typography>
                  <Typography variant={"caption"}>{item.body} </Typography>
               </Box>
            </Box>
         ))}
      </Box>
   );
}
