import { useState, useCallback } from "react";

/**
 * useClipboard
 * @example
 * const [clipboard, getClipboard] = useClipboard();
 *
 * <button onClick={getClipboard}>Paste from Clipboard</button>
 * <div>Pasted Data: {clipboard}</div>
 */
export default function usePaste() {
   const [clipboard, setClipboard] = useState(null);

   const getClipboard = useCallback(async () => {
      if (!navigator.clipboard) {
         console.warn("Clipboard API not supported");
         return;
      }

      try {
         const text = await navigator.clipboard.readText();
         setClipboard(text);
      } catch (err) {
         console.error("Failed to read clipboard contents: ", err);
      }
   }, []);

   return [clipboard, getClipboard];
}
