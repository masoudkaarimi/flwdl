import useSWRMutation from "swr/mutation";

// services
import { getReels } from "@/services/instagram";

export default function useReels({ index, type }) {
   return useSWRMutation(`/api/v1/instagram/reels/?link=${index}&type=${type}`, (url, { arg: { index, type } }) => {
      // validation here

      return getReels({ index, type });
   });
}
