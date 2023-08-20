"use client";
import { useMemo } from "react";
import { ThemeProvider as MUIThemeProvider, StyledEngineProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";

// hooks
import useSettings from "@/hooks/useSettings";

// theme
import palette from "./palette";
import typography from "./typography";
import breakpoints from "./breakpoints";
import shadows, { customShadows } from "./shadows";
// import componentsOverride from "./overrides";

export default function ThemeProvider({ children }) {
   const { themeMode, themeDirection } = useSettings();
   const isLightMode = themeMode === "light";

   const themeOptions = useMemo(
      () => ({
         typography,
         breakpoints,
         direction: themeDirection,
         shape: { borderRadius: 8 },
         divider: isLightMode ? palette.light.divider : palette.dark.divider,
         palette: { ...(isLightMode ? palette.light : palette.dark) },
         shadows: isLightMode ? shadows.light : shadows.dark,
         customShadows: isLightMode ? customShadows.light : customShadows.dark,
      }),
      [isLightMode, themeDirection],
   );

   const theme = createTheme(themeOptions);
   // theme.components = componentsOverride(theme);

   return (
      <StyledEngineProvider injectFirst>
         <MUIThemeProvider theme={theme}>
            <CssBaseline />
            {children}
         </MUIThemeProvider>
      </StyledEngineProvider>
   );
}
