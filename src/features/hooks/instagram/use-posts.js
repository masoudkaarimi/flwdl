import useSWRMutation from "swr/mutation";

// services
import { getPosts } from "@/services/instagram";

export default function usePosts({ index, type }) {
   return useSWRMutation(`/api/v1/instagram/posts/?link=${index}&type=${type}`, (url, { arg: { index, type } }) => {
      // validation here

      return getPosts({ index, type });
   });
}
