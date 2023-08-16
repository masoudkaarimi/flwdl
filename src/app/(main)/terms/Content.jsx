"use client";
import { Grid, Typography } from "@mui/material";
import { useTheme } from "@mui/material/styles";

// components
import SubHeading from "@/components/main/SubHeading";
import BoxContent from "@/components/BoxContent";

export default function Content() {
   const theme = useTheme();
   return (
      <>
         <SubHeading title={"Terms"} breadcrumb={[{ name: "Home", href: "/" }, { name: "Terms" }]} />

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
               Terms
            </Typography>
            <Typography variant={"body2"} color={"text.secondary"} gutterBottom>
               FLWDL is an all-in-one Free Instagram downloader that can be used to download Instagram videos in
               high-quality mp4, download Instagram stories and highlights, save photos and profile pictures, save
               reels, and you can also download from private Instagram.
            </Typography>
            <Typography variant={"body2"} color={"text.secondary"} gutterBottom>
               We add some interesting new downloaders such as the highlight video and photo downloader, caption copy
               tool, and also highlight cover downloader.
            </Typography>
            <Typography variant={"body2"} color={"text.secondary"} gutterBottom>
               Download an Instagram profile’s photos and videos of any type — posts, Stories, Reels, Highlights,
               profile photos using this service. All of them will be saved in original quality to your phone or
               computer.
            </Typography>
            <Typography variant={"body2"} color={"text.secondary"} gutterBottom>
               Enter a username in the search bar or paste a profile link, tap Find. You will see the user's page with
               all the content posted. Select a photo or video that you want to save. If it’s a video, tap Download. If
               it’s a photo, tap and hold it, then choose the download option in the menu that appears.
            </Typography>
            <Typography variant={"body2"} color={"text.secondary"} gutterBottom>
               You will quickly find where to tap to download Instagram profile photos and videos. The interface of the
               IG profile downloader is similar to the Instagram app. You will find photos or videos in the same section
               or tab where you see them in the Instagram app.
            </Typography>
            <Typography variant="h4" component="h4" color={"text.primary"} gutterBottom>
               Reasons you should download Instagram video and photos to your device
            </Typography>
            <Typography variant="subtitle2" component="h4" color={"text.primary"} gutterBottom>
               #1 Design ideas and learn from the best
            </Typography>
            <Typography variant={"body2"} color={"text.secondary"} gutterBottom>
               Vidinsta supports you to download videos to your computer for free to come up with ideas for work, this
               is a very useful thing that content developers often do. From here you can analyze your competitors or
               learn from experts in your industry.
            </Typography>
            <Typography variant="subtitle2" component="h4" color={"text.primary"} gutterBottom>
               #2 Worry about photos or videos disappear after 24 hours
            </Typography>
            <Typography variant={"body2"} color={"text.secondary"} gutterBottom>
               This is a solution to download and store on your computer if you are worried about the videos or photos
               disappearing after 24 hours. You just need to paste the link into our website, click download and you're
               done
            </Typography>
            <Typography variant="subtitle2" component="h4" color={"text.primary"} gutterBottom>
               #3 Don't want to take screenshots
            </Typography>
            <Typography variant={"body2"} color={"text.secondary"} gutterBottom>
               Don't want to take screenshots? Do you want to directly save the file uploaded to Instagram to your
               device? The best solution is to use Vidinsta, the most useful download tool available today.
            </Typography>
            <Typography variant="subtitle2" component="h4" color={"text.primary"} gutterBottom>
               #4 No account needed
            </Typography>
            <Typography variant={"body2"} color={"text.secondary"} gutterBottom>
               You do not need an account to still be able to download videos or images to your device, Vidinsta is a
               free tool
            </Typography>
            <Typography variant="subtitle2" component="h4" color={"text.primary"} gutterBottom>
               #5 Multi-language support
            </Typography>
            <Typography variant={"body2"} color={"text.secondary"} gutterBottom>
               We continuously work long hours to be able to support all users in the world, providing technology
               solutions that help internet users. Help them to save memories between themselves, relatives and friends
               on computers, phones, tablets.
            </Typography>
            <Grid container spacing={3}>
               <Grid item xs={12} sm={6}></Grid>
               <Grid item xs={12} sm={6}></Grid>
            </Grid>
         </BoxContent>
      </>
   );
}
