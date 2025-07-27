export default function getLocaleDirection(locale = "en") {
   const rtlLanguages = new Set(["fa", "ar", "he"]);
   return rtlLanguages.has(locale) ? "rtl" : "ltr";
}
