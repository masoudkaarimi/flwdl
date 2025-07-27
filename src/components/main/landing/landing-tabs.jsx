import { useEffect, useState } from "react";
import { Collapse, Stack } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import Tabs, { tabsClasses } from "@mui/material/Tabs";
import Tab, { tabClasses } from "@mui/material/Tab";

// config
import { INSTAGRAM_SERVICES } from "@/config/services/instagram";

// components
import BoxContent from "@/components/box-content";
import DownloaderForm from "@/components/main/secions/downloader-form";
import Media from "@/components/main/secions/media";
import TabPanel from "@/components/tab-panel";

export default function LandingTabs() {
   const [tab, setTab] = useState(0);
   const [isMediaDownload, setIsMediaDownload] = useState(false);
   const [mediaDownloaded, setMediaDownloaded] = useState(null);
   const theme = useTheme();

   const handleMediaDownload = (show) => {
      // setIsMediaDownload(show);
   };

   useEffect(() => {
      // console.log(mediaDownloaded);
   }, [isMediaDownload]);

   return (
      <>
         <BoxContent contentWidth={"full"} bgColor={"rgba(0 0 0 / 35%)"} rounded sx={{ my: 5, py: 3 }}>
            {/* Todo Add Skeleton Loading */}
            <Stack flexDirection={"row"} justifyContent={"center"}>
               <Tabs
                  value={tab}
                  onChange={(event, newValue) => setTab(newValue)}
                  variant={"scrollable"}
                  scrollButtons
                  sx={{
                     zIndex: 2,
                     [`& .MuiTabs-flexContainer`]: { gap: 0.5 },
                     [`& .${tabsClasses.indicator}`]: {
                        height: 45,
                        top: 0,
                        background: `linear-gradient(to right, ${theme.palette.secondary.main}, ${theme.palette.third.main})`,
                        borderRadius: `${theme.shape.borderRadius}px`,
                     },
                     [`& .${tabsClasses.scrollButtons}`]: {
                        "&.Mui-disabled": { opacity: 0.3 },
                     },
                  }}
               >
                  {INSTAGRAM_SERVICES.map((item) => (
                     <Tab
                        key={item.id}
                        disabled={item.is_active}
                        sx={{
                           borderRadius: `${theme.shape.borderRadius}px`,
                           color: "grey.500",
                           bgcolor: "rgba(0 0 0 / 20%)",
                           gap: 0.5,
                           minHeight: 45,
                           fontWeight: theme.typography.fontWeightRegular,
                           ...(tab === item.id - 1 && {
                              bgcolor: "transparent",
                              zIndex: 1,
                              fontWeight: theme.typography.fontWeightMedium,
                              color: "white !important",
                           }),
                           [`&.${tabClasses.disabled}`]: { filter: "blur(1px)" },
                        }}
                        label={item.title}
                        icon={item.icon}
                        iconPosition={"start"}
                     />
                  ))}
               </Tabs>
            </Stack>

            {INSTAGRAM_SERVICES.map((item) => {
               let parameters = {};
               if (tab === item.id - 1) parameters = item.params;

               return (
                  <TabPanel key={item.id} value={tab} index={item.id - 1}>
                     <DownloaderForm
                        type={item.type}
                        parameters={parameters}
                        placeholder={item.placeholder}
                        onMediaDownload={handleMediaDownload}
                        setMediaDownloaded={setMediaDownloaded}
                     />
                  </TabPanel>
               );
            })}
         </BoxContent>

         <Collapse sx={{ width: 1 }} in={isMediaDownload}>
            <Media brand={"instagram"} data={mediaDownloaded} />
         </Collapse>
      </>
   );
}
