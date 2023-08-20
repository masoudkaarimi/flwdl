import useSWR from "swr";

// services
import { getProfile } from "@/services/instagram";

export default function useProfile({ index, type }) {
   return useSWR(`/api/v1/instagram/profile/?username=${index}&type=${type}`, () => getProfile({ index, type }));
}
