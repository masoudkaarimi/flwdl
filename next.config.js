/** @type {import("next").NextConfig} */
const nextConfig = {
   trailingSlash: true,
   // reactStrictMode: true,
   // output: "export",
   // swcMinify: true,
   // compress: false, // Set to false when using nginx
   images: {
      remotePatterns: [
         {
            protocol: "https",
            hostname: "instagram.frix9-1.fna.fbcdn.net",
            port: "",
            pathname: "/**",
         },
      ],
   },
   experimental: {
      // optimizePackageImports: ["@mui/material", "@mui/icons-material", "lucide-react"],
      webVitalsAttribution: ["FCP", "LCP", "CLS", "FID", "TTFB", "INP"],
   },
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
   logging: {
      fetches: {
         fullUrl: true,
      },
   },
};

module.exports = nextConfig;
