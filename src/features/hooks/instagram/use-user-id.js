import useSWRMutation from "swr/mutation";

// services
import { getUserId } from "@/services/instagram";

export default function useUserId({ index, type }) {
   return useSWRMutation(`/api/v1/instagram/user_id/?username=${index}&type=${type}`, (url, { arg: { index, type } }) => {
      // validation here

      return getUserId({ index, type });
   });
}
