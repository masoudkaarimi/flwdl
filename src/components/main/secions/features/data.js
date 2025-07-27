// components
import SvgIcon from "@/components/svg-icon";

// paths
import { PATH_PAGE } from "@/config/paths";

export default {
   instagram: [
      {
         id: 1,
         title: "Download Photos",
         body: "Save pictures from Instagram in high quality.",
         icon: <SvgIcon name={"brands/instagram/photos"} sx={{ width: 35, height: 35 }} />,
         path: PATH_PAGE.instagram.photos,
      },
      {
         id: 2,
         title: "Download Videos",
         body: "Save videos from Instagram's account.",
         icon: <SvgIcon name={"brands/instagram/videos"} sx={{ width: 35, height: 35 }} />,
         path: PATH_PAGE.instagram.videos,
      },
      {
         id: 3,
         title: "Download Profile",
         body: "Save any profile's content.",
         icon: <SvgIcon name={"brands/instagram/profile"} sx={{ width: 35, height: 35 }} />,
         path: PATH_PAGE.instagram.profile,
      },
      {
         id: 4,
         title: "Download IGTVs",
         body: "Save IGTV to your camera roll.",
         icon: <SvgIcon name={"brands/instagram/igtvs"} sx={{ width: 35, height: 35 }} />,
         path: PATH_PAGE.instagram.igtvs,
      },
      {
         id: 5,
         title: "Download Reels",
         body: "Save reels to your camera roll.",
         icon: <SvgIcon name={"brands/instagram/reels"} sx={{ width: 35, height: 35 }} />,
         path: PATH_PAGE.instagram.reels,
      },
      {
         id: 6,
         title: "Download Profile Picture",
         body: "Save profile picture in full size.",
         icon: <SvgIcon name={"brands/instagram/profile-picture"} sx={{ width: 35, height: 35 }} />,
         path: PATH_PAGE.instagram.profilePicture,
      },
      {
         id: 7,
         title: "Download Stories",
         body: "Save and view Instagram stories.",
         icon: <SvgIcon name={"brands/instagram/stories"} sx={{ width: 35, height: 35 }} />,
         path: PATH_PAGE.instagram.stories,
      },
      {
         id: 8,
         title: "Download Posts",
         body: "Get photos and videos from posts, save to your smartphone, PC or Mac.",
         icon: <SvgIcon name={"brands/instagram/posts"} sx={{ width: 35, height: 35 }} />,
         path: PATH_PAGE.instagram.posts,
      },
      {
         id: 9,
         title: "Download Highlights",
         body: "Save Highlights and view anonymously.",
         icon: <SvgIcon name={"brands/instagram/highlights"} sx={{ width: 35, height: 35 }} />,
         path: PATH_PAGE.instagram.highlights,
      },
   ],
};
