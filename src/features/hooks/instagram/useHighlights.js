import useSWR from "swr";

// services
import { getHighlights } from "@/services/instagram";

export default function useHighlights({ index, type }) {
   return useSWR(`/api/v1/instagram/highlights/?username=${index}&type=${type}`, () => getHighlights({ index, type }));
}
