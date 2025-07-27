import Image from "next/image";
import { useTheme } from "@mui/material/styles";
import { Box, Button, Stack, Typography } from "@mui/material";

export default function Media({ brand, data }) {
   const theme = useTheme();

   switch (brand) {
      case "instagram":
         // console.log("Instagram Media");
         break;
      default:
         break;
   }

   const objects = {
      info: {
         username: "davidbeckham",
         profile_pic_url:
            "https://instagram.frix9-1.fna.fbcdn.net/v/t51.2885-19/273510256_3196360260653075_2203279711336559894_n.jpg?stp=dst-jpg_s150x150&_nc_ht=instagram.frix9-1.fna.fbcdn.net&_nc_cat=1&_nc_ohc=X9WIouJDrkEAX9XiKLK&edm=AP_V10EBAAAA&ccb=7-5&oh=00_AfBag51hTeMwyJh8g2Uk3_8CHbP75InM9UqDqYgSPF30xA&oe=64E8531B&_nc_sid=2999b8",
      },
      media: {
         type: "photos",
         src: "https://instagram.frix9-1.fna.fbcdn.net/v/t51.2885-15/368149833_289243403795292_7883680486096575341_n.jpg?stp=dst-jpg_e35&_nc_ht=instagram.frix9-1.fna.fbcdn.net&_nc_cat=1&_nc_ohc=9GiKN8A8c7wAX_tnnp1&edm=AP_V10EBAAAA&ccb=7-5&oh=00_AfAFZlEoWPI0fn-uoF081nNPvh_zIT92mFVjWCMsCoEMhQ&oe=64E79C25&_nc_sid=2999b8",
      },
   };

   return (
      <Stack
         alignItems={"center"}
         gap={4}
         mb={5}
         sx={{
            bgcolor: "common.white",
            width: "min-content",
            mx: "auto",
            mb: 10,
            p: 2,
            borderRadius: `${theme.shape.borderRadius * 2}px`,
         }}
      >
         <Image
            src={objects?.media?.src}
            width={"360"}
            height={"220"}
            alt={"Image Placeholder"}
            style={{ borderRadius: `${theme.shape.borderRadius}px` }}
         />
         <Stack flexDirection={"column"} gap={3}>
            <Stack flexDirection={"row"} alignItems={"center"} gap={2}>
               {/*<Image*/}
               {/*   src={objects?.info?.profile_pic_url}*/}
               {/*   width={"50"}*/}
               {/*   height={"50"}*/}
               {/*   alt={"Image Placeholder"}*/}
               {/*   style={{ borderRadius: `50%` }}*/}
               {/*/>*/}
               <Typography variant={"subtitle1"} color={"text.primary"}>
                  {objects?.info?.username}
               </Typography>
            </Stack>
            <Button
               variant={"contained"}
               fullWidth
               component="a"
               href={data?.data?.display_url}
               download={data?.data?.display_url}
               target={"_blank"}
            >
               Download Now
            </Button>

            {/*<Button variant={"contained"} fullWidth  component="a" href={objects?.media.src}
             download={objects?.media.src}
             target={'_blank'}>
               Download Now
            </Button>*/}

            {/*<Button variant={"contained"} fullWidth onClick={() => (window.location.href = `${objects?.media.src}`)}>*/}
            {/*   Download Now*/}
            {/*</Button>*/}
         </Stack>
      </Stack>
   );
}
