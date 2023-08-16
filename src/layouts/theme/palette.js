import { alpha } from "@mui/material/styles";

const PRIMARY = {
    lighter: "#917da4",
    light: "#6c5185",
    main: "#472667",
    dark: "#391e52",
    darker: "#241334",
    contrast: "#ede9f0",
};
const SECONDARY = {
    lighter: "#ffa384",
    light: "#ff845b",
    main: "#ff6532",
    dark: "#cc5128",
    darker: "#993d1e",
    contrast: "#fff0eb",
};
const THIRD = {
    lighter: "#f4919f",
    light: "#f16d7f",
    main: "#ED485F",
    dark: "#be3a4c",
    darker: "#8e2b39",
    contrast: "#fdedef",
};

const INFO = {
    lighter: "#f1f9ff",
    light: "#74caff",
    main: "#1890ff",
    dark: "#0c53b7",
    darker: "#04297a",
    contrast: "#e8f4fe",
};
const SUCCESS = {
    lighter: "#f6fdf2",
    light: "#aaf27f",
    main: "#54d62c",
    dark: "#229a16",
    darker: "#08660d",
    contrast: "#e8f9ee",
};
const WARNING = {
    lighter: "#fffcf0",
    light: "#ffe16a",
    main: "#ffc107",
    dark: "#b78103",
    darker: "#7a4f01",
    contrast: "#fef2e7",
};
const ERROR = {
    lighter: "#fff5f3",
    light: "#ffa48d",
    main: "#ff4842",
    dark: "#b72136",
    darker: "#7a0c2e",
    contrast: "#fff0f3",
};

const GREY = {
    0: "#ffffff",
    100: "#f9fafb",
    200: "#f4f6f8",
    300: "#dfe3e8",
    400: "#c4cdd5",
    500: "#919eab",
    600: "#637381",
    700: "#454f5b",
    800: "#212b36",
    900: "#161c24",
    500_8: alpha("#919eab", 0.08),
    500_12: alpha("#919eab", 0.12),
    500_16: alpha("#919eab", 0.16),
    500_24: alpha("#919eab", 0.24),
    500_32: alpha("#919eab", 0.32),
    500_48: alpha("#919eab", 0.48),
    500_56: alpha("#919eab", 0.56),
    500_80: alpha("#919eab", 0.8),
};

const COMMON = {
    common: { black: "#000", white: "#fff" },
    primary: { ...PRIMARY, contrastText: "#fff" },
    secondary: { ...SECONDARY, contrastText: "#fff" },
    third: { ...THIRD, contrastText: "#fff" },
    info: { ...INFO, contrastText: "#fff" },
    success: { ...SUCCESS, contrastText: GREY[800] },
    warning: { ...WARNING, contrastText: GREY[800] },
    error: { ...ERROR, contrastText: "#fff" },
    grey: GREY,
    divider: GREY[500_24], // #ececec
    action: {
        hover: GREY[500_8],
        selected: GREY[500_16],
        disabled: GREY[500_80],
        disabledBackground: GREY[500_24],
        focus: GREY[500_24],
        hoverOpacity: 0.08,
        disabledOpacity: 0.48,
    },
};

const palette = {
    light: {
        ...COMMON,
        mode: "light",
        text: { primary: GREY[800], secondary: GREY[600], disabled: GREY[500] },
        background: { paper: "#F8F8F8", default: "#fff", neutral: GREY[200] },
        action: { active: GREY[600], ...COMMON.action },
    },
    dark: {
        ...COMMON,
        mode: "dark",
        text: { primary: "#fff", secondary: GREY[500], disabled: GREY[600] },
        background: { paper: GREY[800], default: GREY[900], neutral: GREY[500_16] },
        action: { active: GREY[500], ...COMMON.action },
    },
};

export default palette;
