import { PATH_PAGE } from "@/config/paths";
import Link from "next/link";
import { useState } from "react";
import { ExpandMore } from "@mui/icons-material";
import { Accordion, AccordionDetails, AccordionSummary, Box, Button, Stack, Typography } from "@mui/material";

// data
import data from "./data";

export default function Faqs({ content, maxItems, moreLink = PATH_PAGE.faqs }) {
   const [accordionExpanded, setAccordionExpanded] = useState(false);
   content = content || data;
   const items = maxItems ? content.slice(0, maxItems) : content;

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
         {content.length > maxItems && (
            <Box sx={{ display: "flex", justifyContent: "center", my: 2 }}>
               <Button
                  variant={"contained"}
                  component={Link}
                  href={moreLink}
                  sx={(theme) => ({
                     fontWeight: theme.typography.fontWeightMedium,
                     px: 5,
                     background: `linear-gradient(to right, ${theme.palette.secondary.main}, ${theme.palette.third.main})`,
                  })}
               >
                  View More
               </Button>
            </Box>
         )}
      </>
   );
}
