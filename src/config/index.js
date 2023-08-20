export const IS_DEV = process.env.NODE_ENV === "development";
export const IS_PROD = process.env.NODE_ENV === "production";
export const APP_NAME = process.env.NEXT_PUBLIC_APP_NAME;
export const APP_VERSION = process.env.NEXT_PUBLIC_APP_VERSION;
export const APP_BASE_URL = process.env.NEXT_PUBLIC_APP_BASE_URL;
export const APP_BASE_API_URL = process.env.NEXT_PUBLIC_APP_BASE_API_URL;
export const BASE_API_URL = process.env.BASE_API_URL;
export const BASE_API_KEY = process.env.BASE_API_KEY;
export const RAPID_API_URL = process.env.RAPID_API_URL;
export const RAPID_API_KEY = process.env.RAPID_API_KEY;
export const RAPID_API_HOST = process.env.RAPID_API_HOST;

// LAYOUT
export const HEADER = {
   DESKTOP_HEIGHT: 80,
   MOBILE_HEIGHT: 60,
};

export const defaultSettings = {
   themeMode: "light",
   themeDirection: "ltr",
   themeLayout: "main",
   themeStretch: true,
};
