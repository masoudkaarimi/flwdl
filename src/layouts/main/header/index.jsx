import Link from "next/link";
import { useState } from "react";
import { AppBar, Button, Container, Menu, MenuItem, Stack, Toolbar } from "@mui/material";
import { styled, useTheme } from "@mui/material/styles";

// i18n
import { Trans } from "react-i18next/TransWithoutContext";
import { useTranslation } from "@/app/i18n";
import { languages } from "@/app/i18n/settings";

// config
import { HEADER } from "@/config";

// hooks
import useOffsetTop from "@/hooks/use-offset-top";
import useResponsive from "@/hooks/use-responsive";

// components
import Logo from "@/components/logo";
import navConfig from "./nav-config";

const RootStyle = styled(AppBar, { shouldForwardProp: (prop) => prop !== "isOffset" })(({ isOffset, theme }) => ({
   background: theme.palette.primary.darker,
   boxShadow: "none",
   height: HEADER.MOBILE_HEIGHT,
   zIndex: theme.zIndex.appBar,
   transition: theme.transitions.create(["width", "height"], {
      duration: theme.transitions.duration.shorter,
   }),
   [theme.breakpoints.up("lg")]: {
      height: HEADER.DESKTOP_HEIGHT,
      justifyContent: "center",
      ...(isOffset && {
         background: `linear-gradient(to right, ${theme.palette.primary.dark} 10%, ${theme.palette.primary.darker} 90%)`,
         boxShadow: "0 10px 20px rgba(0 0 0 / 20%)",
      }),
   },
}));

export default function Header({ lang, path = "" }) {
   const [anchorLangEl, setAnchorEl] = useState(null);
   const openLangMenu = Boolean(anchorLangEl);
   const theme = useTheme();
   const { t } = useTranslation(lang);

   const handleOpenLangMenu = (event) => {
      setAnchorEl(event.currentTarget);
   };
   const handleCloseLangMenu = () => {
      setAnchorEl(null);
   };

   const isOffset = useOffsetTop(HEADER.DESKTOP_HEIGHT);
   const isDesktop = useResponsive("up", "lg");

   return (
      <RootStyle component={"header"} isOffset={isOffset}>
         <Toolbar component={Container} maxWidth={"xl"}>
            <Logo width={120} height={50} />

            {/* Menu Items */}
            <Stack direction="row" justifyContent="center" sx={{ px: 0.5, mx: "auto" }}>
               <Stack direction="row">
                  {navConfig.map((group, index) => (
                     <Stack key={index} direction="row" flexShrink={0} sx={{ color: "grey.300" }}>
                        {group.items.map((item) => (
                           <Button
                              key={item.title}
                              component={Link}
                              variant={"text"}
                              color={"inherit"}
                              href={item.path}
                              sx={{ fontWeight: theme.typography.fontWeightRegular }}
                           >
                              {item.title}
                           </Button>
                        ))}
                     </Stack>
                  ))}
               </Stack>
            </Stack>
            <Trans i18nKey="languageSwitcher" t={t}>
               <Button
                  variant={"text"}
                  sx={{ fontWeight: theme.typography.fontWeightRegular, color: "grey.300" }}
                  id="language-dropdown"
                  onClick={handleOpenLangMenu}
               >
                  {lang}
               </Button>

               <Menu
                  anchorEl={anchorLangEl}
                  open={openLangMenu}
                  onClose={handleCloseLangMenu}
                  anchorOrigin={{
                     vertical: "bottom",
                     horizontal: "left",
                  }}
                  transformOrigin={{
                     vertical: "bottom",
                     horizontal: "left",
                  }}
               >
                  {languages
                     .filter((l) => lang !== l)
                     .map((l, index) => {
                        return (
                           <MenuItem key={l} onClick={handleCloseLangMenu}>
                              <Link href={`/${l}${path}`}>{l}</Link>
                           </MenuItem>
                        );
                     })}
               </Menu>
            </Trans>
         </Toolbar>
      </RootStyle>
   );
}
