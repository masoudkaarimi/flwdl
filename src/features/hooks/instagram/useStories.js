import useSWR from "swr";

// services
import { getStories } from "@/services/instagram";

export default function useStories({ index, type }) {
   return useSWR(`/api/v1/instagram/stories/?username=${index}&type=${type}`, () => getStories({ index, type }));
}
