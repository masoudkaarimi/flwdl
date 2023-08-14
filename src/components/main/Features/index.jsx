"use client";
import { BoltOutlined } from "@mui/icons-material";
import { Box, Grid, Typography } from "@mui/material";

export default function Features({ data }) {
   data = [
      {
         id: 1,
         title: "Download Photos",
         body: "Save pictures from Instagram in high quality.",
         icon: <BoltOutlined sx={{ fontSize: 40 }}  />,
      },
      {
         id: 2,
         title: "Download Videos",
         body: "Save videos from Instagram's account.",
         icon: <BoltOutlined sx={{ fontSize: 40 }}  />,
      },
      {
         id: 3,
         title: "Download Profile",
         body: "Save any profile's content.",
         icon: <BoltOutlined sx={{ fontSize: 40 }}  />,
      },
      {
         id: 4,
         title: "Download IGTVs",
         body: "Save IGTV to your camera roll.",
         icon: <BoltOutlined sx={{ fontSize: 40 }}  />,
      },
      {
         id: 5,
         title: "Download Reels",
         body: "Save reels to your camera roll.",
         icon: <BoltOutlined sx={{ fontSize: 40 }}  />,
      },
      {
         id: 6,
         title: "Download Profile Photo",
         body: "Save profile picture in full size.",
         icon: <BoltOutlined sx={{ fontSize: 40 }}  />,
      },
      {
         id: 7,
         title: "Download Stories",
         body: "Save and view Instagram stories.",
         icon: <BoltOutlined sx={{ fontSize: 40 }}  />,
      },
      {
         id: 8,
         title: "Download Posts",
         body: "Get photos and videos from posts, save to your smartphone, PC or Mac.",
         icon: <BoltOutlined sx={{ fontSize: 40 }}  />,
      },
      {
         id: 9,
         title: "Download Highlights",
         body: "Save Highlights and view anonymously.",
         icon: <BoltOutlined sx={{ fontSize: 40 }}  />,
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
                  p: 2,
                  width: "32%",
                  height: 100,
                  display: "flex",
                  alignItems: "center",
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
                     display: "flex",
                     justifyContent: "center",
                     alignItems: "center",
                     color: 'secondary.main'
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
