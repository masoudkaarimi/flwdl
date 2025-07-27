"use client";

import { useTheme } from "@mui/material/styles";
import { SWRConfig } from "swr";
import { Toaster } from "react-hot-toast";
import { AppProgressBar as ProgressBar } from "next-nprogress-bar";

// layout
import MainLayout from "@/layouts/main";

// theme
import ThemeProvider from "@/layouts/theme/theme-provider";

// context
import SettingsProvider from "@/context/settings-context";

// components
import WebVitals from "@/components/web-vitals";

const Providers = ({ children, lang }) => {
   const theme = useTheme();

   return (
      <SettingsProvider>
         <ThemeProvider>
            <SWRConfig value={{ revalidateOnMount: false, revalidateOnFocus: false, revalidateOnReconnect: false }}>
               <Toaster />
               <WebVitals />
               <ProgressBar height="2px" color="#fff" options={{ showSpinner: true }} shallowRouting />
               <MainLayout lang={lang}>{children}</MainLayout>
            </SWRConfig>
         </ThemeProvider>
      </SettingsProvider>
   );
};
export default Providers;
