"use client";
import { useTheme } from "@mui/material/styles";
import { Typography } from "@mui/material";

// config
import { HEADER } from "@/config";

// components
import BoxContent from "@/components/BoxContent";
import Breadcrumbs from "@/components/Breadcrumbs";

export default function SubHeading({ title = "", breadcrumb = [], children }) {
   const theme = useTheme();

   return (
      <BoxContent
         contentWidth={"full"}
         bgColor={`linear-gradient(to bottom, ${theme.palette.primary.main}, ${theme.palette.primary.darker})`}
         sx={{
            pt: `${HEADER.MOBILE_HEIGHT + 20}px`,
            pb: 16,
            [theme.breakpoints.up("lg")]: {
               pt: `${HEADER.DESKTOP_HEIGHT + 20}px`,
            },
            color: "common.white",
            borderRadius: `0 0 ${theme.shape.borderRadius * 10}px ${theme.shape.borderRadius * 10}px`,
         }}
      >
         {title?.length > 0 && title?.trim() !== "" && (
            <Typography variant={"h2"} component={"h1"} gutterBottom>
               {title}
            </Typography>
         )}
         {breadcrumb?.length > 0 && <Breadcrumbs links={breadcrumb} />}
         {children}
      </BoxContent>
   );
}
