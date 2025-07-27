import { useMediaQuery } from "@mui/material";
import { useTheme } from "@mui/material/styles";

export default function useResponsive(query, key, start, end) {
   const theme = useTheme();

   return useMediaQuery(
      query === "up"
         ? theme.breakpoints.up(key)
         : query === "down"
         ? theme.breakpoints.down(key)
         : query === "between"
         ? theme.breakpoints.between(start, end)
         : query === "only"
         ? theme.breakpoints.only(key)
         : query === "not"
         ? theme.breakpoints.not(key)
         : query, // Custom media query as a string (e.g., "(max-width: 600px)")
   );
}
