"use client";
import { Grid, Typography } from "@mui/material";
import { useTheme } from "@mui/material/styles";

// components
import SubHeading from "@/components/main/sub-heading";
import BoxContent from "@/components/box-content";

export default function Content() {
   const theme = useTheme();
   return (
      <>
         <SubHeading title={"Help"} breadcrumb={[{ name: "Home", href: "/" }, { name: "Help" }]} />

         <BoxContent
            contentWidth={"boxed"}
            rounded
            bgColor={theme.palette.background.default}
            sx={{ py: 3, mt: -15, mb: 10, boxShadow: "0px 50px 50px rgb(0 0 0 / 8%)" }}
         >
            <Typography
               variant="h3"
               component="h3"
               color={"text.primary"}
               sx={{ textAlign: { xs: "left", sm: "center" } }}
            >
               Help
            </Typography>
            <Typography variant={"body2"} color={"text.secondary"} sx={{ textAlign: { xs: "left", sm: "center" } }}>
               Here we give answers to frequently asked questions on how to download Instagram photos and videos,
               highlights, etc.
            </Typography>

            <Grid container spacing={3} mt={2}>
               <Grid item xs={12} sm={6}></Grid>
               <Grid item xs={12} sm={6}></Grid>
            </Grid>
         </BoxContent>
      </>
   );
}
