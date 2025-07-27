import useSWRMutation from "swr/mutation";

// services
import { getStories } from "@/services/instagram";

export default function useStories({ index, type }) {
   return useSWRMutation(`/api/v1/instagram/stories/?username=${index}&type=${type}`, (url, { arg: { index, type } }) => {
      // validation here

      return getStories({ index, type });
   });
}
