import { Facebook, Instagram, Pinterest, Telegram, Twitter, YouTube } from "@mui/icons-material";
import { Box, Typography } from "@mui/material";

export default function OurServices({ data }) {
   data = [
      {
         id: 1,
         title: "YouTube",
         icon: <YouTube sx={{ color: "common.white", fontSize: 40 }} />,
      },
      {
         id: 2,
         title: "Instagram",
         icon: <Instagram sx={{ color: "common.white", fontSize: 40 }} />,
      },
      {
         id: 3,
         title: "Facebook",
         icon: <Facebook sx={{ color: "common.white", fontSize: 40 }} />,
      },
      {
         id: 4,
         title: "TikTok",
         icon: <Telegram sx={{ color: "common.white", fontSize: 40 }} />,
      },
      {
         id: 5,
         title: "Pinterest",
         icon: <Pinterest sx={{ color: "common.white", fontSize: 40 }} />,
      },
      {
         id: 6,
         title: "Telegram",
         icon: <Telegram sx={{ color: "common.white", fontSize: 40 }} />,
      },
      {
         id: 7,
         title: "Twitter",
         icon: <Twitter sx={{ color: "common.white", fontSize: 40 }} />,
      },
      {
         id: 8,
         title: "Tumblr",
         icon: <Instagram sx={{ color: "common.white", fontSize: 40 }} />,
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
                  width: { xs: 100, sm: 120 },
                  height: { xs: 100, sm: 120 },
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                  bgcolor: "rgba(0 0 0 / 20%)",
                  border: "2px solid transparent",
                  borderRadius: `${theme.shape.borderRadius}px`,
                  transition: theme.transitions.create("border-color", {
                     duration: theme.transitions.duration.shorter,
                  }),
                  "&:hover": {
                     borderColor: "secondary.main",
                  },
               })}
            >
               {item.icon}
               <Typography variant={"body1"} color={"common.white"} sx={{ mt: 1.5 }}>
                  {item.title}
               </Typography>
            </Box>
         ))}
      </Box>
   );
}
