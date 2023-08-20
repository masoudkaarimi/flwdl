import { Box } from "@mui/material";

export default function SvgIcon({ name, src, sx }) {
   src = src || `/icons/${name}.svg`;

   return (
      <Box
         component="span"
         sx={[
            {
               width: 24,
               height: 24,
               display: "inline-block",
               bgcolor: "currentColor",
               mask: `url(${src}) no-repeat center / contain`,
               WebkitMask: `url(${src}) no-repeat center / contain`,
            },
            ...(Array.isArray(sx) ? sx : [sx]),
         ]}
      />
   );
}
