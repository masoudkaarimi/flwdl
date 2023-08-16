"use client";
import Link from "next/link";
import { useState } from "react";
import { AppBar, Box, Button, Container, Menu, MenuItem, Stack, Toolbar } from "@mui/material";
import { styled, useTheme } from "@mui/material/styles";

// config
import { HEADER } from "@/config";

// hooks
import useOffSetTop from "@/hooks/useOffSetTop";
import useResponsive from "@/hooks/useResponsive";

// components
import Logo from "@/components/Logo";
import navConfig from "./NavConfig";

const RootStyle = styled(AppBar, {
   shouldForwardProp: (prop) => prop !== "isCollapse" && prop !== "isOffset",
})(({ isCollapse, isOffset, theme }) => ({
   backgroundColor: "rgba(0 0 0 / 50%)",
   boxShadow: "none",
   height: HEADER.MOBILE_HEIGHT,
   zIndex: theme.zIndex.appBar,
   transition: theme.transitions.create(["width", "height"], {
      duration: theme.transitions.duration.shorter,
   }),
   [theme.breakpoints.up("lg")]: {
      height: HEADER.DESKTOP_HEIGHT,
      justifyContent: "center",
      // ...(isCollapse && { width: `calc(100% - ${NAVBAR.DASHBOARD_COLLAPSE_WIDTH}px)` }),
      ...(isOffset && { boxShadow: "0 15px 15px rgba(0 0 0 / 10%)" }),
   },
}));

export default function Header() {
   const [anchorLangEl, setAnchorEl] = useState(null);
   const openLangMenu = Boolean(anchorLangEl);
   const theme = useTheme();

   const handleOpenLangMenu = (event) => {
      setAnchorEl(event.currentTarget);
   };
   const handleCloseLangMenu = () => {
      setAnchorEl(null);
   };

   const isOffset = useOffSetTop(HEADER.DESKTOP_HEIGHT);
   // const isDesktop = useResponsive("up", "lg");
   // const isNotDesktop = useResponsive("down", "lg");

   return (
      <RootStyle component={"header"} isOffset={isOffset}>
         <Toolbar component={Container} maxWidth={"xl"}>
            <Logo width={"130"} height={"50"} />

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

            <Button
               variant={"text"}
               sx={{ fontWeight: theme.typography.fontWeightRegular, color: "grey.300" }}
               id="language-dropdown"
               onClick={handleOpenLangMenu}
            >
               English
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
               <MenuItem onClick={handleCloseLangMenu}>English</MenuItem>
               <MenuItem onClick={handleCloseLangMenu}>Persian</MenuItem>
               <MenuItem onClick={handleCloseLangMenu}>Arabic</MenuItem>
            </Menu>
         </Toolbar>
      </RootStyle>
   );
}
