// paths
import { PATH_PAGE } from "@/config/paths";

const navConfig = [
   {
      items: [
         { title: "Home", path: PATH_PAGE["home"] },
         // { title: "Blog", path: PATH_PAGE["blog"] },
         // {
         //    title: "Services",
         //    path: PATH_PAGE["services"],
         //    children: [
         //       { title: "Instagram", path: PATH_PAGE["services"] },
         //       { title: "Register", path: PATH_PAGE["services"] },
         //       { title: "Forgot Password", path: PATH_PAGE["services"] },
         //       { title: "Verify", path: PATH_PAGE["services"] },
         //    ],
         // },
         { title: "FAQs", path: PATH_PAGE["faqs"] },
         { title: "About", path: PATH_PAGE["about"] },
         { title: "Contacts", path: PATH_PAGE["contacts"] },
         { title: "Terms", path: PATH_PAGE["terms"] },
      ],
   },
];

export default navConfig;
