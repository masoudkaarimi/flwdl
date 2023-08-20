import useSWR from "swr";

// services
import { getIgtvs } from "@/services/instagram";

export default function useIgtvs({ index, type }) {
   return useSWR(`/api/v1/instagram/igtvs/?link=${index}&type=${type}`, () => getIgtvs({ index, type }));
}
