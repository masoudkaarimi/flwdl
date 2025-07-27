import { Box, Container } from "@mui/material";
import { useTheme } from "@mui/material/styles";

export default function BoxContent({
   contentWidth = "full",
   bgColor,
   bordered = false,
   rounded = false,
   sx = {},
   component = "section",
   children,
}) {
   const theme = useTheme();

   if (contentWidth === "full") {
      return (
         <Box
            width={1}
            component={component}
            sx={[
               {
                  background: bgColor || theme.palette.background.default,
                  ...(bordered && { border: `1px solid ${theme.palette.divider}` }),
                  ...(rounded && { borderRadius: `${theme.shape.borderRadius * 2}px` }),
               }, ...(Array.isArray(sx) ? sx : [sx]),
            ]}
         >
            <Container maxWidth={"lg"}>{children}</Container>
         </Box>
      );
   }

   if (contentWidth === "boxed") {
      return (
         <Container component={component} maxWidth={"lg"}>
            {bordered || rounded ? (
               <Box
                  sx={[
                     {
                        background: bgColor || theme.palette.background.default,
                        ...(bordered && { border: `1px solid ${theme.palette.divider}` }),
                        ...(rounded && { borderRadius: `${theme.shape.borderRadius * 2}px` }),
                        p: 3,
                     }
                     , ...(Array.isArray(sx) ? sx : [sx]),
                  ]}
               >
                  {children}
               </Box>
            ) : (
               <Box sx={{ p: 3 }}>{children}</Box>
            )}
         </Container>
      );
   }
}
