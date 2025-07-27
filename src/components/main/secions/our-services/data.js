// components
import SvgIcon from "@/components/svg-icon";

// paths
import { PATH_PAGE } from "@/config/paths";

export default [
   {
      id       : 1,
      title    : "YouTube",
      icon     : <SvgIcon name={"brands/youtube/youtube"} />,
      path     : PATH_PAGE.youtube.root,
      is_active: false,
   },
   {
      id       : 2,
      title    : "Instagram",
      icon     : <SvgIcon name={"brands/instagram/instagram"} />,
      path     : PATH_PAGE.instagram.root,
      is_active: true,
   },
   {
      id       : 3,
      title    : "Facebook",
      icon     : <SvgIcon name={"brands/facebook/facebook"} />,
      path     : PATH_PAGE.facebook.root,
      is_active: false,
   },
   {
      id       : 4,
      title    : "TikTok",
      icon     : <SvgIcon name={"brands/tiktok/tiktok"} />,
      path     : PATH_PAGE.tiktok.root,
      is_active: false,
   },
   {
      id       : 5,
      title    : "Pinterest",
      icon     : <SvgIcon name={"brands/pinterest/pinterest"} />,
      path     : PATH_PAGE.pinterest.root,
      is_active: false,
   },
   {
      id       : 6,
      title    : "Telegram",
      icon     : <SvgIcon name={"brands/telegram/telegram"} />,
      path     : PATH_PAGE.telegram.root,
      is_active: false,
   },
   {
      id       : 7,
      title    : "Twitter",
      icon     : <SvgIcon name={"brands/twitter/twitter"} />,
      path     : PATH_PAGE.twitter.root,
      is_active: false,
   },
   {
      id       : 8,
      title    : "Tumblr",
      icon     : <SvgIcon name={"brands/tumblr/tumblr"} />,
      path     : PATH_PAGE.tumblr.root,
      is_active: false,
   },
];
