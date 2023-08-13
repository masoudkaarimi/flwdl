"use client";
import { Toaster } from "react-hot-toast";

// theme
import ThemeProvider from "../../layouts/theme";

// context
import SettingsProvider from "../../features/context/SettingsContext";

const Providers = ({ children }) => {
   return (
      <SettingsProvider>
         <ThemeProvider>
            <Toaster />
            {children}
         </ThemeProvider>
      </SettingsProvider>
   );
};
export default Providers;
