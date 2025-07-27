import Link from "next/link";
import { Box, Typography } from "@mui/material";

// data
import data from "./data";

export default function Features({ brand, content }) {
   content = content || data.instagram;

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
         {content.map((item) => (
            <Box
               key={item.id}
               component={Link}
               href={item.path}
               sx={(theme) => ({
                  p: { md: 2, xs: 1 },
                  width: { md: "32%", xs: "48%" },
                  minHeight: 100,
                  display: "flex",
                  alignItems: "center",
                  alignSelf: "stretch",
                  flexDirection: { md: "row", xs: "column" },
                  border: `2px solid ${theme.palette.divider}`,
                  borderRadius: `${theme.shape.borderRadius * 1.5}px`,
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
                  variant={"rounded"}
                  sx={{
                     width: { md: "10%", xs: "unset" },
                     mr: { md: 2, xs: "unset" },
                     textAlign: "center",
                     color: "secondary.main",
                  }}
               >
                  {item.icon}
               </Box>
               <Box>
                  <Typography
                     variant={"subtitle1"}
                     sx={{ textAlign: { md: "left", xs: "center" }, fontSize: { xs: "12px !important" } }}
                  >
                     {item.title}
                  </Typography>
                  <Typography variant={"caption"} sx={{ display: "block", textAlign: { md: "left", xs: "center" } }}>
                     {item.body}
                  </Typography>
               </Box>
            </Box>
         ))}
      </Box>
   );
}
