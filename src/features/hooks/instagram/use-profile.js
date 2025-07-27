import useSWRMutation from "swr/mutation";

// services
import { getProfile } from "@/services/instagram";

export default function useProfile({ index, type }) {
   return useSWRMutation(`/api/v1/instagram/profile/?username=${index}&type=${type}`, (url, { arg: { index, type } }) => {
      // validation here

      return getProfile({ index, type });
   });
}
