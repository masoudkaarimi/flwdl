// config
import { RAPID_API_HOST, RAPID_API_KEY, RAPID_API_URL } from "@/config";

import fetcher from "@/services/fetcher";

// utils
import ApiResponse from "@/utils/ApiResponse";

export async function GET(request) {
   const { searchParams } = new URL(request.url);
   const username = searchParams.get("username");
   const type = searchParams.get("type") || "user_id"; // user_id

   console.log("Before request to user_id");

   if (!username) {
      return ApiResponse.badRequest({ message: { text: "username is required" } });
   }

   if (!type) {
      // return ApiResponse.badRequest({ message: { text: "type is required" } });
   }

   try {
      const response = await fetch(`${RAPID_API_URL}/user_id/?user=${username}`, {
         method: "GET",
         headers: { "X-RapidAPI-Key": RAPID_API_KEY, "X-RapidAPI-Host": RAPID_API_HOST },
         next: {
            revalidate: 60,
         },
      });
      const data = await response.json();

      console.log("After request to user_id", data);

      if (response.status === 200) {
         return ApiResponse.ok({ type, ...data });
      } else {
         return ApiResponse.fail({ message: { text: data }, status: response.status });
      }
   } catch (error) {
      return ApiResponse.internalServerError();
   }
}
