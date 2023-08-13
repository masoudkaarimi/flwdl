import { useContext } from "react";

// context
import { SettingsContext } from "../context/SettingsContext";

const useSettings = () => useContext(SettingsContext);

export default useSettings;
