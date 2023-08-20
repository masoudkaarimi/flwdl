import { useContext } from "react";

// context
import { SettingsContext } from "@/context/SettingsContext";

const useSettings = () => {
   const settings = useContext(SettingsContext)
   if (!settings) throw new Error('useSettings must be used within a SettingsProvider')
   return useContext(SettingsContext);
};

export default useSettings;
