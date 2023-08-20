// hooks
import useHighlights from "@/hooks/instagram/useHighlights";
import useIgtvs from "@/hooks/instagram/useIgtvs";
import usePosts from "@/hooks/instagram/usePosts";
import useProfile from "@/hooks/instagram/useProfile";
import useReels from "@/hooks/instagram/useReels";
import useStories from "@/hooks/instagram/useStories";

export default function useInstagram({ type }) {
   switch (type) {
      case "highlights":
         return useHighlights;
      case "igtvs":
         return useIgtvs;
      case "posts":
         return usePosts;
      case "profile":
         return useProfile;
      case "reels":
         return useReels;
      case "stories":
         return useStories;
   }
}
