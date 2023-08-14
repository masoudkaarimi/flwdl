"use client";
import { useTheme } from "@mui/material/styles";
import { Box, Container } from "@mui/material";

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

   return (
      <Container
         component={component}
         maxWidth={contentWidth === "boxed" ? "lg" : false}
         sx={{
            background: bgColor || theme.palette.background.default,
            ...(bordered && { border: `1px solid ${theme.palette.divider}` }),
            ...(rounded && { borderRadius: `${theme.shape.borderRadius * 2}px` }),
            ...sx,
         }}
      >
         <Container maxWidth={contentWidth === "full" ? "lg" : false}>{children}</Container>
      </Container>
   );
}
