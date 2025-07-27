import { Box } from "@mui/material";

// components
import Header from "./header";
import Footer from "./footer";
import Guide from "@/components/main/secions/guide";

export default function MainLayout({ children, lang }) {
   return (
      <>
         <Header lang={lang} />
         <Box component={"main"}>{children}</Box>
         <Guide />
         <Footer />
      </>
   );
}
