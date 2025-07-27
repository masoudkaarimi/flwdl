import { useTranslation } from "react-i18next";
import { enUS, deDE, frFR, faIR } from "@mui/material/locale";

const languages = [
   {
      label: "English",
      value: "en",
      systemValue: enUS,
      icon: "https://minimal-assets-api.vercel.app/assets/icons/ic_flag_en.svg",
   },
   {
      label: "German",
      value: "de",
      systemValue: deDE,
      icon: "https://minimal-assets-api.vercel.app/assets/icons/ic_flag_de.svg",
   },
   {
      label: "Persian",
      value: "fa",
      systemValue: faIR,
      icon: "https://minimal-assets-api.vercel.app/assets/icons/ic_flag_fa.svg",
   },
];

export default function useLocales() {
   const { i18n, t: translate } = useTranslation();
   const langStorage = localStorage.getItem("i18nextLng");
   const currentLanguage = languages.find((_lang) => _lang.value === langStorage) || languages[1];

   const onChangeLanguage = (newlang) => {
      i18n.changeLanguage(newlang);
   };

   return {
      translate,
      languages,
      currentLanguage,
      onChangeLanguage,
   };
}
