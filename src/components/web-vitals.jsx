"use client";

import { useReportWebVitals } from "next/web-vitals";

export default function WebVitals() {
   useReportWebVitals(async (metric) => {
      try {
         // await sendAnalytics(metric);
         // handleMetricLogging(metric);
      } catch (error) {
         console.error("Error handling web vitals metric:", error);
      }
   });
}

async function sendAnalytics(metric) {
   const body = JSON.stringify(metric);
   const API_URL = `${process.env.NEXT_PUBLIC_APP_BASE_API_URL}/analytics`;

   if (navigator.sendBeacon) {
      navigator.sendBeacon(API_URL, body);
   } else {
      await fetch(API_URL, { body, method: "POST", keepalive: true });
   }
}

function handleMetricLogging(metric) {
   if (process.env.NODE_ENV === "development") {
      switch (metric.name) {
         case "FCP":
         case "LCP":
         case "CLS":
         case "FID":
         case "TTFB":
         case "INP":
            console.log(`${metric.name}: ${metric.value}`);
            break;
         default:
            console.warn(`Unhandled or new metric type: ${metric.name}, Value: ${metric.value}`);
      }
   }
}
