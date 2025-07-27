import { useTheme } from "@mui/material/styles";
import { Typography } from "@mui/material";

// config
import { HEADER } from "@/config";

// components
import BoxContent from "@/components/box-content";
import Breadcrumbs from "@/components/breadcrumbs";

export default function SubHeading({ title = "", variant = "h1", component = "h1", breadcrumb = [], children }) {
   const theme = useTheme();

   return (<BoxContent
         contentWidth={"full"}
         // Todo Gradient Color
         bgColor={`linear-gradient(to bottom, ${theme.palette.primary.main}, ${theme.palette.primary.darker})`}
         sx={{
            pt                          : `${HEADER.MOBILE_HEIGHT + 20}px`,
            pb                          : 16,
            [theme.breakpoints.up("lg")]: {
               pt: `${HEADER.DESKTOP_HEIGHT + 20}px`,
            },
            color                       : "common.white",
            borderRadius                : `0 0 ${theme.shape.borderRadius * 10}px ${theme.shape.borderRadius * 10}px`,
         }}
      >
         {title?.length > 0 && title?.trim() !== "" && (
            <Typography variant={variant} component={component} gutterBottom>
               {title}
            </Typography>)}
         {breadcrumb?.length > 0 && <Breadcrumbs links={breadcrumb} />}
         {children}
      </BoxContent>);
}
