// config
import { RAPID_API_HOST, RAPID_API_KEY, RAPID_API_URL } from "@/config";

// utils
import { getShortcodeFromMedia } from "@/utils/instagram";
import ApiResponse from "@/utils/ApiResponse";

export async function GET(request) {
   const { searchParams } = new URL(request.url);
   const link = searchParams.get("link");
   const type = searchParams.get("type"); // reels

   console.log("Before request to reels");

   if (!link) {
      return ApiResponse.badRequest({ message: { text: "link is required" } });
   }

   if (!type) {
      return ApiResponse.badRequest({ message: { text: "type is required" } });
   }

   try {
      const response = await fetch(`${RAPID_API_URL}/post_info/?shortcode=${getShortcodeFromMedia(link)}`, {
         method: "GET",
         headers: { "X-RapidAPI-Key": RAPID_API_KEY, "X-RapidAPI-Host": RAPID_API_HOST },
         next: {
            revalidate: 60,
         },
      });
      const data = await response.json();

      console.log("After request to reels", data);

      if (response.status === 200) {
         return ApiResponse.ok({ type, ...data });
      } else {
         return ApiResponse.fail({ message: { text: data }, status: response.status });
      }
   } catch (error) {
      return ApiResponse.internalServerError();
   }
}
