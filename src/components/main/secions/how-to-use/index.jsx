import { Box, Typography } from "@mui/material";

// data
import data from "./data";

export default function HowToUse({ content }) {
   content = content || data;

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
               sx={(theme) => ({
                  position: "relative",
                  p: 2,
                  pt: 4,
                  my: 2,
                  width: { md: "32%", sm: "48%", xs: "100%" },
                  minHeight: 160,
                  alignSelf: "stretch",
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
                  sx={(theme) => ({
                     width: 55,
                     height: 55,
                     position: "absolute",
                     top: -30,
                     display: "flex",
                     flexDirection: "column",
                     justifyContent: "center",
                     alignItems: "center",
                     background: `linear-gradient(to bottom, ${theme.palette.secondary.main}, ${theme.palette.third.main})`,
                     color: "common.white",
                     borderRadius: `${theme.shape.borderRadius * 1.5}px`,
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
