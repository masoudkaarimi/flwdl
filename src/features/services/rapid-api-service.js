import { RAPID_API_HOST, RAPID_API_KEY, RAPID_API_URL } from "@/config";
import fetcher from ".";

export default async function RapidApiService({
   path = "",
   method = "GET",
   headers = {},
   body,
   params = {},
}) {
   return await fetcher({
      url: `${RAPID_API_URL}/${path}/`,
      method,
      headers: {
         ...headers,
         "X-RapidAPI-Key": RAPID_API_KEY,
         "X-RapidAPI-Host": RAPID_API_HOST,
      },
      body,
      params,
   });
}
