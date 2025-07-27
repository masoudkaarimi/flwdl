import { Box } from "@mui/material";

export default function TabPanel({ children, value, index, ...other }) {
   return (
      <Box hidden={value !== index} id={`service-instagram-${index}`} {...other}>
         {value === index && children}
      </Box>
   );
}
