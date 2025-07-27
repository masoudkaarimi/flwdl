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
         <SubHeading title={"Contacts"} breadcrumb={[{ name: "Home", href: "/" }, { name: "Contacts" }]} />

         <BoxContent
            contentWidth={"boxed"}
            rounded
            bgColor={theme.palette.background.default}
            sx={{ py: 3, mt: -15, mb: 10, boxShadow: "0px 50px 50px rgb(0 0 0 / 8%)" }}
         >
            <Grid container spacing={3}>
               <Grid item xs={12} sm={6}>
                  <Typography
                     variant="h3"
                     component="h3"
                     color={"text.primary"}
                     sx={{ textAlign: { xs: "center", sm: "left" } }}
                  >
                     Contacts
                  </Typography>
                  <Typography
                     variant={"body2"}
                     color={"text.secondary"}
                     sx={{ textAlign: { xs: "center", sm: "left" } }}
                  >
                     Got questions? Please checkout our FAQs
                  </Typography>
                  <Typography
                     variant={"body2"}
                     color={"text.secondary"}
                     sx={{ textAlign: { xs: "center", sm: "left" } }}
                  >
                     Our customer happiness team is always here to help! Shoot us a question and we'll reply back within
                     a couple of hours!
                  </Typography>
               </Grid>
               <Grid item xs={12} sm={6}>
                  Form Here
               </Grid>
            </Grid>
         </BoxContent>
      </>
   );
}
