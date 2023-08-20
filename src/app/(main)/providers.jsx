import { Toaster } from "react-hot-toast";

// layout
import MainLayout from "@/layouts/Main";

// theme
import ThemeProvider from "@/layouts/theme/ThemeProvider";

// context
import SettingsProvider from "@/context/SettingsContext";

const Providers = ({ children }) => {
   return (
      <SettingsProvider>
         <ThemeProvider>
            <Toaster />
            <MainLayout>{children}</MainLayout>
         </ThemeProvider>
      </SettingsProvider>
   );
};
export default Providers;
