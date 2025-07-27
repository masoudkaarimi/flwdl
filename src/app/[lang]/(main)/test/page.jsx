"use client";
import { Typography } from "@mui/material";

// components
import BoxContent from "@/components/box-content";

export default function ClipboardComponent() {
   return (
      <div style={{ marginTop: 130 }}>
         <BoxContent contentWidth={"boxed"} bordered rounded bgColor={"#ccc"}>
            <Typography variant={"h1"}>This is a Boxed</Typography>
         </BoxContent>
         <BoxContent contentWidth={"full"} bgColor={"cyan"}>
            <Typography variant={"h1"}>This is a Full</Typography>
         </BoxContent>
         <BoxContent contentWidth={"boxed"} bordered rounded bgColor={"#ccc"}>
            <Typography variant={"h1"}>This is a Boxed</Typography>
         </BoxContent>
         <BoxContent contentWidth={"full"} bgColor={"cyan"}>
            <Typography variant={"h1"}>This is a Full</Typography>
         </BoxContent>
      </div>
   );
}
