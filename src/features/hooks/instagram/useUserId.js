import useSWR from "swr";

// services
import { getUserId } from "@/services/instagram";

export default function useUserId({ index, type }) {
   return useSWR(`/api/v1/instagram/user_id/?username=${index}&type=${type}`, () => getUserId({ index, type }));
}
