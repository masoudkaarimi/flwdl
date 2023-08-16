"use client";
import { Box, Typography } from "@mui/material";

export default function HowToUse({ data }) {
   data = [
      {
         id: 1,
         step: 1,
         title: "Copy the URL link",
         body: "Open Instagram, copy the URL of the photo, video, user profile, Reel, or other content. This is usually done by touching the 3-dots  button and selecting the copy link.",
      },
      {
         id: 2,
         step: 2,
         title: "Paste URL Into FLWDL",
         body: "Go back to FLWDL, paste the URL link into the search field, and click the Download button to prepare download links. It may takes 2-30 seconds.",
      },
      {
         id: 3,
         step: 3,
         title: "Download & Save The File",
         body: "All images and videos with the available quality will be displayed for you. Now, you can download and save any you want with a direct link and high speed.",
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
                  my: 2,
                  width: "32%",
                  height: 160,
                  border: `3px solid ${theme.palette.divider}`,
                  borderRadius: `${theme.shape.borderRadius}px`,
                  transition: theme.transitions.create(["background-color", "boxShadow", "border-color"], {
                     duration: theme.transitions.duration.shorter,
                  }),
                  "&:hover": {
                     bgcolor: "background.default",
                     borderColor: "secondary.main",
                     boxShadow: theme.customShadows.card,
                  },
               })}
            >
               <Box
                  sx={(theme) => ({
                     width: 50,
                     height: 50,
                     position: "absolute",
                     top: "-25px",
                     display: "flex",
                     flexDirection: "column",
                     justifyContent: "center",
                     alignItems: "center",
                     background: `linear-gradient(to bottom, ${theme.palette.secondary.main}, ${theme.palette.third.main})`,
                     color: "common.white",
                     borderRadius: `${theme.shape.borderRadius}px`,
                     boxShadow: theme.customShadows.secondary,
                  })}
               >
                  <Typography variant={"h4"}>{item.step}</Typography>
                  <Typography variant={"caption"}>step</Typography>
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
