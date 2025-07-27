import { useState, useCallback } from "react";

/**
 * useClipboard
 * @example
 * const {clipboard, isCopied, error, copyToClipboard, copyFromRef, getClipboard} = useClipboard();
 * const inputRef = useRef(null);
 *
 * <button onClick={() => copyToClipboard("Hello World!")}>Copy Text</button>
 * <input ref={inputRef} defaultValue="Text to be copied" />
 * <button onClick={() => copyFromRef(inputRef)}>Copy from Input</button>
 * <button onClick={getClipboard}>Paste from Clipboard</button>
 * {clipboard && <p>{clipboard}</p>}
 * {isCopied && <p>Text copied to clipboard!</p>}
 * {error && <p>Error: {error}</p>}
 */
export default function useClipboard() {
   const [clipboard, setClipboard] = useState("");
   const [isCopied, setIsCopied] = useState(false);
   const [error, setError] = useState(null);

   const copyToClipboard = useCallback((content) => {
      if (typeof content !== "string" && typeof content !== "number") {
         setError("Invalid content: Only strings and numbers can be copied");
         return;
      }

      const text = String(content).trim();

      if (text === "") {
         setError("Invalid content: Empty strings cannot be copied");
         return;
      }

      setClipboard(text);

      if (!navigator.clipboard) {
         const textarea = document.createElement("textarea");
         textarea.value = text;
         textarea.setAttribute("readonly", "");
         document.body.appendChild(textarea);
         textarea.select();
         try {
            document.execCommand("copy");
            setIsCopied(true);
         } catch (err) {
            setError("Failed to copy text");
         }
         document.body.removeChild(textarea);
         return;
      }

      navigator.clipboard
         .writeText(text)
         .then(() => {
            setIsCopied(true);
            setTimeout(() => setIsCopied(false), 2000);
         })
         .catch(() => {
            setError("Failed to copy text");
         });
   }, []);

   const copyFromRef = useCallback(
      (ref) => {
         if (ref.current) {
            const content = ref.current.innerText || ref.current.value;
            copyToClipboard(content);
         } else {
            setError("Invalid reference provided");
         }
      },
      [copyToClipboard],
   );

   const getClipboard = useCallback(async () => {
      if (!navigator.clipboard) {
         setError("Clipboard API not supported");
         return;
      }

      try {
         const text = await navigator.clipboard.readText();
         setClipboard(text);
      } catch (err) {
         setError("Failed to read clipboard contents: " + err);
      }
   }, []);

   return {
      clipboard,
      isCopied,
      error,
      copyToClipboard,
      copyFromRef,
      getClipboard,
   };
}
