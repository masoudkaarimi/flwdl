import { Box, Typography } from "@mui/material";

// data
import data from "./data";

export default function WhyUseUs({ content }) {
   content = content || data;

   return (
      <Box
         sx={{
            width: "100%   ",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexWrap: { xs: "wrap", sm: "no-wrap" },
            gap: { xs: 1, sm: 2 },
         }}
      >
         {content.map((item) => (
            <Box
               key={item.id}
               sx={(theme) => ({
                  position: "relative",
                  p: 2,
                  pt: 4,
                  mt: 4,
                  minHeight: 160,
                  width: { md: "32%", sm: "48%", xs: "100%" },
                  display: "flex",
                  alignSelf: "stretch",
                  border: `2px solid ${theme.palette.divider}`,
                  borderRadius: `${theme.shape.borderRadius * 1.5}px`,
                  transition: theme.transitions.create(["background-color", "boxShadow", "border-color"], {
                     duration: theme.transitions.duration.shorter,
                  }),
                  "&:hover": {
                     bgcolor: "background.default",
                     borderColor: "primary.main",
                     boxShadow: theme.customShadows.card,
                  },
               })}
            >
               <Box
                  variant={"rounded"}
                  sx={(theme) => ({
                     width: { lg: 54, xs: 44 },
                     height: { lg: 54, xs: 44 },
                     position: "absolute",
                     top: { lg: -30, xs: -22 },
                     display: "flex",
                     justifyContent: "center",
                     alignItems: "center",
                     color: "common.white",
                     borderRadius: `${theme.shape.borderRadius * 1.5}px`,
                     background: `linear-gradient(to bottom, ${theme.palette.primary.main}, ${theme.palette.primary.darker})`,
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
