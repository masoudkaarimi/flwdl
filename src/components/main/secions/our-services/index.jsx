import Link from "next/link";
import { Box, Typography } from "@mui/material";

// data
import data from "./data";

export default function OurServices({ content }) {
   content = content || data;

   return (
      <Box
         sx={{
            display       : "flex",
            justifyContent: "center",
            alignItems    : "center",
            flexWrap      : { xs: "wrap", sm: "no-wrap" },
            gap           : { xs: 1, sm: 2 },
            my            : 3,
         }}
      >
         {content.map((item) => (
            <Box
               key={item.id}
               component={Link}
               href={item.path}
               sx={(theme) => ({
                  position      : "relative",
                  width         : { xs: 100, sm: 120 },
                  height        : { xs: 100, sm: 120 },
                  display       : "flex",
                  flexDirection : "column",
                  justifyContent: "center",
                  alignItems    : "center",
                  bgcolor       : "rgba(0 0 0 / 20%)",
                  border        : "2px solid transparent",
                  borderRadius  : `${theme.shape.borderRadius}px`,
                  transition    : theme.transitions.create("border-color", {
                     duration: theme.transitions.duration.shorter,
                  }),
                  "&:hover"     : {
                     borderColor: "secondary.main",
                  }, ...(!item.is_active && {
                     filter       : "blur(3px)",
                     pointerEvents: "none",
                     // "&:after"    : {
                     //    content       : "'Coming Soon'",
                     //    position      : "absolute",
                     //    top           : 0,
                     //    left          : 0,
                     //    display       : "flex",
                     //    justifyContent: "center",
                     //    alignItems    : "center",
                     //    fontSize      : "12px",
                     //    color         : "white",
                     //    width         : 1,
                     //    height        : 1,
                     //    zIndex        : theme.zIndex.snackbar,
                     // },
                  }),
               })}
            >
               {/*{!item.is_active && (*/}
               {/*   <Typography variant={"caption"} color={"common.white"} sx={{*/}
               {/*      background: 'red'*/}
               {/*   }}>*/}
               {/*         Coming Soon*/}
               {/*      </Typography>*/}
               {/*)}*/}
               <Box sx={{ color: "common.white", "& span": { width: { sm: 35, xs: 25 }, height: { sm: 35, xs: 25 } } }}>
               {item.icon}
            </Box>
            <Typography variant={"body1"} color={"common.white"} sx={{ mt: 1.5 }}>
               {item.title}
            </Typography>
         </Box>
         ))}
      </Box>
   );
}
