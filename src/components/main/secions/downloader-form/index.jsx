import Link from "next/link";
import { usePathname, useSearchParams, useRouter } from "next/navigation";
import { useEffect, useMemo, useState } from "react";
import { useTheme } from "@mui/material/styles";
import { Box, Button, InputAdornment, InputBase, Typography } from "@mui/material";
import { ContentPasteOutlined, FileDownloadOutlined, LinkOutlined } from "@mui/icons-material";

// hooks
import useClipboard from "@/hooks/use-clipboard";
import useHighlights from "@/hooks/instagram/use-highlights";
import useIgtvs from "@/hooks/instagram/use-igtvs";
import usePosts from "@/hooks/instagram/use-posts";
import useProfile from "@/hooks/instagram/use-profile";
import useReels from "@/hooks/instagram/use-reels";
import useStories from "@/hooks/instagram/use-stories";

const initialState = Object.freeze({ index: "", type: "photos" });

export default function DownloaderForm({ type, parameters, placeholder, onMediaDownload, setMediaDownloaded }) {
   const [filters, setFilters] = useState(initialState);
   const { clipboard, getClipboard, error } = useClipboard();
   const theme = useTheme();
   const searchParams = useSearchParams();
   const pathName = usePathname();
   const router = useRouter();
   let request = null;

   switch (type) {
      case "highlights":
         request = useHighlights(filters);
         break;
      case "igtvs":
         request = useIgtvs(filters);
         break;
      case "posts":
         request = usePosts(filters);
         break;
      case "profile":
         request = useProfile(filters);
         break;
      case "reels":
         request = useReels(filters);
         break;
      case "stories":
         request = useStories(filters);
         break;
      default:
         break;
   }

   // When click tab reset filters
   useMemo(() => {
      const params = new URLSearchParams(searchParams);

      setFilters({ ...parameters });
      request = null;

      if (params.get("type") === filters.type) {
         onMediaDownload(true);
      } else {
         onMediaDownload(false);
      }
   }, [filters.type]);

   // When input change reset filters
   const handleChange = (e) => {
      setFilters({ ...filters, index: e.target.value });
   };

   // When click submit button to call api
   const handleOnSubmit = async (e) => {
      e.preventDefault();
      const params = new URLSearchParams(searchParams);

      if (filters.type.length > 0) params.set("type", filters.type);
      else params.delete("type");

      if (filters.index.length > 0) params.set("index", filters.index);
      else params.delete("index");

      // mutation
      const result = await request.trigger(filters);
      console.log("result", result);

      // When click download button to show media downloadable
      onMediaDownload(true);
      setMediaDownloaded(result);

      // Change browser searchbar
      return router.push(`${pathName}?${params}`);
   };

   // When click the "Paste" button, the input value changes to the pasted value
   useEffect(() => {
      setFilters({ ...filters, index: clipboard });
   }, [clipboard]);

   // When page mount to set filters
   useEffect(() => {
      const params = new URLSearchParams(searchParams);
      setFilters({ ...filters, index: params.get("index"), type: params.get("type") });
   }, []);

   return (
      <Box sx={{ my: 5, px: { lg: 25, md: 10, sm: 5, xs: 0 } }}>
         <Typography variant={"body2"} color={"grey.200"}>
            📌 Press CTRL + D to bookmark this page.
         </Typography>
         <Box
            component="form"
            onSubmit={handleOnSubmit}
            sx={{
               width: 1,
               my: 1.5,
               bgcolor: "rgba(0 0 0 / 30%)",
               py: 2,
               px: 1.2,
               border: `3px solid ${theme.palette.secondary.main}`,
               borderRadius: `${theme.shape.borderRadius * 1.5}px`,
               display: "flex",
               alignItems: "center",
            }}
         >
            <InputBase
               onChange={handleChange}
               value={filters.index}
               sx={{ flex: 1, color: "common.white" }}
               inputProps={{ sx: { fontSize: 14 } }}
               placeholder={placeholder}
               startAdornment={
                  <InputAdornment position="start">
                     <LinkOutlined sx={{ color: "grey.300" }} />
                  </InputAdornment>
               }
               endAdornment={
                  <InputAdornment position="end">
                     <Button
                        variant={"text"}
                        size={"large"}
                        color={"primary"}
                        startIcon={<ContentPasteOutlined />}
                        onClick={getClipboard}
                        sx={{
                           mr: 1,
                           px: 1.5,
                           bgcolor: "rgba(0 0 0 / 30%)",
                           color: "grey.400",
                           fontWeight: theme.typography.fontWeightRegular,
                        }}
                     >
                        Paste
                     </Button>
                     <Button
                        type={"submit"}
                        variant={"contained"}
                        size={"large"}
                        color={"secondary"}
                        startIcon={<FileDownloadOutlined />}
                        sx={{
                           fontWeight: theme.typography.fontWeightMedium,
                           px: 1.5,
                           background: `linear-gradient(to right, ${theme.palette.secondary.main}, ${theme.palette.third.main})`,
                        }}
                     >
                        Get Now
                     </Button>
                  </InputAdornment>
               }
            />
         </Box>
         <Typography variant={"body2"} color={"grey.200"}>
            By downloading this video, you agree to the{" "}
            <Link href={"terms"}>
               <Typography component={"b"} color={"info.main"}>
                  Fair Use Policy.
               </Typography>
            </Link>
         </Typography>
      </Box>
   );
}
