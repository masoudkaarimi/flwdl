"use client";
import BoxContent from "@/components/BoxContent";
import { APP_NAME } from "@/config";
import { Box, Button, Typography } from "@mui/material";
import Link from "next/link";

// components
import Header from "./Header";
import Footer from "./Footer";

export default function MainLayout({ children }) {
   return (
      <>
         <Header />
         <Box component={'main'}>{children}</Box>
         <BoxContent contentWidth={"boxed"} bordered rounded sx={{ py: 3, my: 6 }}>
            <Box
               sx={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: 1,
               }}
            >
               <Typography variant="h3" component="h3">
                  Complete Guide to Using {APP_NAME}
               </Typography>
               <Typography variant={"body1"} color={"text.secondary"}>
                  A must-study for those starting to work with {APP_NAME}
               </Typography>
               <Button component={Link} href={'/help'} variant={"contained"} color={"secondary"}>
                  Get Started
               </Button>
            </Box>
         </BoxContent>
         <Footer />
      </>
   );
}
