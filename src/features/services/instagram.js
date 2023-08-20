// config
import { APP_BASE_API_URL } from "@/config";

// services
import fetcher from "@/services/fetcher";

export const getHighlights = ({ index, type }) => {
   return fetcher({
      url: `${APP_BASE_API_URL}/v1/instagram/highlights/`,
      params: { username: index, type },
      cache: "no-store",
   });
};

export const getIgtvs = ({ index, type }) => {
   return fetcher({
      url: `${APP_BASE_API_URL}/v1/instagram/igtvs/`,
      params: { link: index, type },
      cache: "no-store",
   });
};

export const getPosts = ({ index, type }) => {
   return fetcher({
      url: `${APP_BASE_API_URL}/v1/instagram/posts/`,
      params: { link: index, type },
      cache: "no-store",
   });
};

export const getProfile = ({ index, type }) => {
   return fetcher({
      url: `${APP_BASE_API_URL}/v1/instagram/profile/`,
      params: { username: index, type },
      cache: "no-store",
   });
};

export const getReels = ({ index, type }) => {
   return fetcher({
      url: `${APP_BASE_API_URL}/v1/instagram/reels/`,
      params: { link: index, type },
      cache: "no-store",
   });
};
export const getStories = ({ index, type }) => {
   return fetcher({
      url: `${APP_BASE_API_URL}/v1/instagram/stories/`,
      params: { username: index, type },
      cache: "no-store",
   });
};

export const getUserId = ({ index, type }) => {
   return fetcher({
      url: `${APP_BASE_API_URL}/v1/instagram/user_id/`,
      params: { index, type },
      cache: "no-store",
   });
};
