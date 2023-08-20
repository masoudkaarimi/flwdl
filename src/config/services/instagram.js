import SvgIcon from "@/components/SvgIcon";

export const INSTAGRAM_SERVICES = [
   {
      id: 1,
      title: "Photos",
      icon: <SvgIcon name={"instagram/photos"} />,
      type: "posts",
      input_name: "link",
      params: {
         index: "",
         type: "photos",
      },
      placeholder: "Enter a post link or photos link, example = ...",
   },
   {
      id: 2,
      title: "Videos",
      icon: <SvgIcon name={"instagram/videos"} />,
      type: "posts",
      input_name: "link",
      params: {
         index: "",
         type: "videos",
      },
      placeholder: "Enter a post link or video link, example = ...",
   },
   {
      id: 3,
      title: "Profile",
      icon: <SvgIcon name={"instagram/profile"} />,
      type: "profile",
      input_name: "username",
      params: {
         index: "",
         type: "profile",
      },
      placeholder: "Enter a username or profile link, example = ...",
   },
   {
      id: 4,
      title: "IGTVs",
      icon: <SvgIcon name={"instagram/igtvs"} />,
      type: "igtvs",
      input_name: "link",
      params: {
         index: "",
         type: "igtvs",
      },
      placeholder: "Enter a igtv link or post link, example = ...",
   },
   {
      id: 5,
      title: "Reels",
      icon: <SvgIcon name={"instagram/reels"} />,
      type: "reels",
      input_name: "link",
      params: {
         index: "",
         type: "reels",
      },
      placeholder: "Enter a reels link or post link, example = ...",
   },
   {
      id: 6,
      title: "Profile Picture",
      icon: <SvgIcon name={"instagram/profile-picture"} />,
      type: "profile",
      input_name: "username",
      params: {
         index: "",
         type: "profile_picture",
      },
      placeholder: "Enter a username or profile link, example = ...",
   },
   {
      id: 7,
      title: "Stories",
      icon: <SvgIcon name={"instagram/stories"} />,
      type: "stories",
      input_name: "username",
      params: {
         index: "",
         type: "stories",
      },
      placeholder: "Enter a username or story link, example = ...",
   },
   {
      id: 8,
      title: "Posts",
      icon: <SvgIcon name={"instagram/posts"} />,
      type: "posts",
      input_name: "link",
      params: {
         index: "",
         type: "posts",
      },
      placeholder: "Enter a post link, example = ...",
   },
   {
      id: 9,
      title: "Highlights",
      icon: <SvgIcon name={"instagram/highlights"} />,
      type: "highlights",
      input_name: "link",
      params: {
         index: "",
         type: "highlights",
      },
      placeholder: "Enter a username or highlight link, example = ...",
   },
];
