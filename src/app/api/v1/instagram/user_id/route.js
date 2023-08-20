// config
import { RAPID_API_HOST, RAPID_API_KEY, RAPID_API_URL } from "@/config";

import fetcher from "@/services/fetcher";

// utils
import ApiResponse from "@/utils/ApiResponse";

export const GET = async (request) => {
   const { searchParams } = new URL(request.url);
   const username = searchParams.get("username");
   const type = searchParams.get("type"); // user_id

   if (!username) {
      return ApiResponse.badRequest({ message: { text: "username is required" } });
   }

   if (!type) {
      return ApiResponse.badRequest({ message: { text: "type is required" } });
   }

   try {
      const data = await fetcher({
         url: `${RAPID_API_URL}/user_id/`,
         method: "GET",
         headers: { "X-RapidAPI-Key": RAPID_API_KEY, "X-RapidAPI-Host": RAPID_API_HOST },
         params: { user: username },
      });
      return ApiResponse.ok(data);
   } catch (error) {
      return ApiResponse.fail({ message: { text: error }, status: error.status });
   }
};
