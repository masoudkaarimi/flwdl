import useSWR from "swr";

// services
import { getPosts } from "@/services/instagram";

export default function usePosts({ index, type }) {
   return useSWR(`/api/v1/instagram/posts/?link=${index}&type=${type}`, () => getPosts({ index, type }));
}
