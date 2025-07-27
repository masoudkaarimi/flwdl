import useSWRMutation from "swr/mutation";

// services
import { getIgtvs } from "@/services/instagram";

export default function useIgtvs({ index, type }) {
   return useSWRMutation(`/api/v1/instagram/igtvs/?link=${index}&type=${type}`, (url, { arg: { index, type } }) => {
      // validation here

      return getIgtvs({ index, type });
   });
}
