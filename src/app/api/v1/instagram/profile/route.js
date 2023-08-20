// config
import { RAPID_API_HOST, RAPID_API_KEY, RAPID_API_URL } from "@/config";

// utils
import ApiResponse from "@/utils/ApiResponse";

export const GET = async (request) => {
   const { searchParams } = new URL(request.url);
   const username = searchParams.get("username");
   const type = searchParams.get("type"); // profile, profile_picture

   if (!username) {
      return ApiResponse.badRequest({ message: { text: "username is required" } });
   }

   if (!type) {
      return ApiResponse.badRequest({ message: { text: "type is required" } });
   }

   try {
      const response = await fetch(`${RAPID_API_URL}/info_username/?user=${username}`, {
         method: "GET",
         headers: { "X-RapidAPI-Key": RAPID_API_KEY, "X-RapidAPI-Host": RAPID_API_HOST },
      });
      const data = await response.json();

      if (response.status === 200) {
         return ApiResponse.ok(data);
      } else {
         return ApiResponse.fail({ message: { text: data }, status: response.status });
      }
   } catch (error) {
      return ApiResponse.internalServerError();
   }
};
