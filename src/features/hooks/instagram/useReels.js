import useSWR from "swr";

// services
import { getReels } from "@/services/instagram";

export default function useReels({ index, type }) {
   return useSWR(`/api/v1/instagram/reels/?link=${index}&type=${type}`, () => getReels({ index, type }));
}
