/** @type {import("next").NextConfig} */
const nextConfig = {
   // reactStrictMode: true,
   // swcMinify: true,
   modularizeImports: {
      "@mui/material": {
         transform: "@mui/material/{{member}}",
         preventFullImport: true,
      },
      "@mui/icons-material": {
         transform: "@mui/icons-material/{{member}}",
         preventFullImport: true,
      },
   },
};

module.exports = nextConfig;
