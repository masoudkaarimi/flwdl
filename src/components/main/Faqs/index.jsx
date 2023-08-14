"use client";
import { ExpandMore } from "@mui/icons-material";
import { Accordion, AccordionDetails, AccordionSummary, Typography } from "@mui/material";
import Link from "next/link";
import { useState } from "react";

export default function Faqs({ data, maxItems = 4, moreLink = "/faqs" }) {
   const [accordionExpanded, setAccordionExpanded] = useState(false);
   data = [
      {
         id: 1,
         question: "How to download videos from Instagram in high quality?",
         answer:
            "Paste the link or shortcode of the Instagram video you want to download into the search bar and tap Search. You will see the video and the Download button. Tap the button. The Instagram video will be downloaded in the best possible quality to your computer or phone. The quality will be the same as you see it on Instagram.",
      },
      {
         id: 2,
         question: "How to download an Instagram video for free?",
         answer:
            "Paste the link or shortcode of the Instagram video you want to download into the search bar and tap Search. You will see the video and the Download button. Tap the button. The Instagram video will be downloaded in the best possible quality to your computer or phone. The quality will be the same as you see it on Instagram.",
      },
      {
         id: 3,
         question: "How to download videos from Instagram in high quality?",
         answer:
            "Paste the link or shortcode of the Instagram video you want to download into the search bar and tap Search. You will see the video and the Download button. Tap the button. The Instagram video will be downloaded in the best possible quality to your computer or phone. The quality will be the same as you see it on Instagram.",
      },
      {
         id: 4,
         question: "How to download videos from Instagram in high quality?",
         answer:
            "Paste the link or shortcode of the Instagram video you want to download into the search bar and tap Search. You will see the video and the Download button. Tap the button. The Instagram video will be downloaded in the best possible quality to your computer or phone. The quality will be the same as you see it on Instagram.",
      },
   ];
   const items = data.slice(0, maxItems);

   const handleAccordionChange = (accordion) => (event, isExpanded) => {
      setAccordionExpanded(isExpanded ? accordion : false);
   };

   return (
      <>
         {items.map((item) => (
            <Accordion
               key={item.id}
               expanded={accordionExpanded === `accordion-${item.id}`}
               onChange={handleAccordionChange(`accordion-${item.id}`)}
            >
               <AccordionSummary expandIcon={<ExpandMore />}>
                  <Typography variant="subtitle1">{item.question}</Typography>
               </AccordionSummary>
               <AccordionDetails>
                  <Typography variant={"body2"}>{item.answer}</Typography>
               </AccordionDetails>
            </Accordion>
         ))}
         {items.length > maxItems && <Link href={moreLink}>Show More</Link>}
      </>
   );
}
