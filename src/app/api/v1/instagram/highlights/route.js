// config
import { APP_BASE_API_URL, RAPID_API_HOST, RAPID_API_KEY, RAPID_API_URL } from "@/config";

// utils
import ApiResponse from "@/utils/ApiResponse";

export const GET = async (request) => {
   const { searchParams } = new URL(request.url);
   const username = searchParams.get("username");
   const type = searchParams.get("type"); // highlight

   if (!username) {
      return ApiResponse.badRequest({ message: { text: "username is required" } });
   }

   if (!type) {
      return ApiResponse.badRequest({ message: { text: "type is required" } });
   }

   try {
      // Get user id
      const getUserId = await fetch(`${APP_BASE_API_URL}/v1/instagram/user_id/?username=${username}`, {
         method: "GET",
         headers: { "X-RapidAPI-Key": RAPID_API_KEY, "X-RapidAPI-Host": RAPID_API_HOST },
      });
      const user = await getUserId.json();

      // sleep
      new Promise((resolve) => setTimeout(resolve, 5000));

      if (getUserId.status === 200) {
         const response = await fetch(`${RAPID_API_URL}/highlights_tray/?id_user=${user.data.id}`, {
            method: "GET",
            headers: { "X-RapidAPI-Key": RAPID_API_KEY, "X-RapidAPI-Host": RAPID_API_HOST },
         });
         const data = await response.json();

         if (response.status === 200) {
            return ApiResponse.ok(data);
         } else {
            return ApiResponse.fail({ message: { text: data }, status: response.status });
         }
      } else {
         return ApiResponse.fail({ message: { text: getUserId }, status: getUserId.status });
      }
   } catch (error) {
      return ApiResponse.internalServerError();
   }
};
