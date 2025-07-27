import { useState, useCallback } from "react";

/**
 * useCopyToClipboard
 * @example
 * const {clipboard, isCopied, error, copyToClipboard, copyFromRef} = useCopyToClipboard();
 * const inputRef = useRef(null);
 *
 * <button onClick={() => copyToClipboard("Hello World!")}>Copy Text</button>
 * <input ref={inputRef} defaultValue="Text to be copied" />
 * <button onClick={() => copyFromRef(inputRef)}>Copy from Input</button>
 * {clipboard && <p>{clipboard}</p>}
 * {isCopied && <p>Text copied to clipboard!</p>}
 * {error && <p>Error: {error}</p>}
 */
export default function useCopyToClipboard() {
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

      setClipboard(text); // Store the copied content

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

   return {
      clipboard,
      isCopied,
      error,
      copyToClipboard,
      copyFromRef,
   };
}
