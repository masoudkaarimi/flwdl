import Link from "next/link";
import { Box, Link as LinkContainer, Typography, Breadcrumbs as MUIBreadcrumbs } from "@mui/material";
import { NavigateNext } from "@mui/icons-material";

/**
 * Breadcrumbs
 * @param links
 * @param activeLast
 * @param other
 * @returns {JSX.Element}
 *
 * @example
 * <Breadcrumbs
 *     links={[
 *         { name: "Dashboard", href: "/dashboard" },
 *         { name: "Users", href: 'users' },
 *         { name: "New user" },
 *     ]}
 * />
 */
export default function Breadcrumbs({ links, activeLast = false, colorMode = "dark", ...other }) {
   const currentLink = links[links.length - 1].name;
   const listDefault = links.map((link, index) => <LinkItem key={index} link={link} colorMode={colorMode} />);

   const listActiveLast = links.map((link, index) => (
      <Box key={index}>
         {link.name !== currentLink ? (
            <LinkItem link={link} colorMode={colorMode} />
         ) : (
            <Typography
               variant="body2"
               sx={{
                  maxWidth: 260,
                  overflow: "hidden",
                  whiteSpace: "nowrap",
                  color: colorMode === "dark" ? "common.white" : "text.disabled",
                  textOverflow: "ellipsis",
               }}
            >
               {currentLink}
            </Typography>
         )}
      </Box>
   ));

   return (
      <MUIBreadcrumbs
         aria-label="breadcrumb"
         separator={<NavigateNext fontSize="small" sx={{ color: colorMode === "dark" ? "grey.400" : "text.disabled" }} />}
         {...other}
      >
         {activeLast ? listDefault : listActiveLast}
      </MUIBreadcrumbs>
   );
}

function LinkItem({ link, colorMode }) {
   const { href, name, icon } = link;

   return (
      <LinkContainer
         variant="body2"
         component={Link}
         href={href || "#"}
         sx={{
            lineHeight: 2,
            display: "flex",
            alignItems: "center",
            color: colorMode === "dark" ? "grey.400" : "text.primary",
            textDecoration: "none",
            cursor: "pointer",
            "&:hover": { textDecoration: "underline" },
            "& > div": { display: "inherit" },
         }}
      >
         {icon && <Box sx={{ mr: 1, "& svg": { width: 20, height: 20 } }}>{icon}</Box>}
         {name}
      </LinkContainer>
   );
}
