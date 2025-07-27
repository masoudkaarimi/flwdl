import BoxContent from "@/components/box-content";
import { APP_NAME } from "@/config";
import { Box, Button, Typography } from "@mui/material";
import Link from "next/link";

export default function Guide() {
   return (
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
            <Typography variant="h3" component="h3" textAlign={"center"}>
               Complete Guide to Using {APP_NAME}
            </Typography>
            <Typography variant={"body1"} color={"text.secondary"} textAlign={"center"}>
               A must-study for those starting to work with {APP_NAME}
            </Typography>
            <Button
               component={Link}
               href={"/help"}
               variant={"contained"}
               color={"secondary"}
               sx={(theme) => ({
                  fontWeight: theme.typography.fontWeightMedium,
                  px: 5,
                  background: `linear-gradient(to right, ${theme.palette.secondary.main}, ${theme.palette.third.main})`,
               })}
            >
               Get Started
            </Button>
         </Box>
      </BoxContent>
   );
}
