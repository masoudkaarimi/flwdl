import useSWRMutation from "swr/mutation";

// services
import { getHighlights } from "@/services/instagram";

export default function useHighlights({ index, type }) {
   return useSWRMutation(`/api/v1/instagram/highlights/?username=${index}&type=${type}`, (url, { arg: { index, type } }) => {
      // validation here

      return getHighlights({ index, type });
   });
}
