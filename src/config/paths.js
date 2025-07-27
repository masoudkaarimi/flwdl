function path(root, sublink) {
   return `${root}${sublink}`;
}

const ROOT_AUTH = "/auth";
const ROOT_INSTAGRAM = "/instagram";
const ROOT_YOUTUBE = "/youtube";
const ROOT_FACEBOOK = "/facebook";
const ROOT_TIKTOK = "/tiktok";
const ROOT_PINTEREST = "/pinterest";
const ROOT_TELEGRAM = "/telegram";
const ROOT_TWITTER = "/twitter";
const ROOT_TUMBLR = "/tumblr";

const PATH_AUTH = {
   root: ROOT_AUTH,
   login: path(ROOT_AUTH, "/login"),
   register: path(ROOT_AUTH, "/register"),
   forgotPassword: path(ROOT_AUTH, "/forgot-password"),
   verify: path(ROOT_AUTH, "/verify"),
};

const PATH_INSTAGRAM = {
   root: ROOT_INSTAGRAM,
   photos: path(ROOT_INSTAGRAM, "/photos"),
   videos: path(ROOT_INSTAGRAM, "/videos"),
   profile: path(ROOT_INSTAGRAM, "/profile"),
   igtvs: path(ROOT_INSTAGRAM, "/igtvs"),
   reels: path(ROOT_INSTAGRAM, "/reels"),
   profilePicture: path(ROOT_INSTAGRAM, "/profile-picture"),
   stories: path(ROOT_INSTAGRAM, "/stories"),
   posts: path(ROOT_INSTAGRAM, "/posts"),
   highlights: path(ROOT_INSTAGRAM, "/highlights"),
};

const PATH_YOUTUBE = {
   root: ROOT_YOUTUBE,
};

const PATH_FACEBOOK = {
   root: ROOT_FACEBOOK,
};

const PATH_TIKTOK = {
   root: ROOT_TIKTOK,
};

const PATH_PINTEREST = {
   root: ROOT_PINTEREST,
};

const PATH_TELEGRAM = {
   root: ROOT_TELEGRAM,
};

const PATH_TWITTER = {
   root: ROOT_TWITTER,
};

const PATH_TUMBLR = {
   root: ROOT_TUMBLR,
};

export const PATH_PAGE = {
   home: "/",
   blog: "/blog",
   services: "/services",
   faqs: "/faqs",
   about: "/about",
   contacts: "/contacts",
   terms: "/terms",
   auth: PATH_AUTH,
   instagram: PATH_INSTAGRAM,
   youtube: PATH_YOUTUBE,
   facebook: PATH_FACEBOOK,
   tiktok: PATH_TIKTOK,
   pinterest: PATH_PINTEREST,
   telegram: PATH_TELEGRAM,
   twitter: PATH_TWITTER,
   tumblr: PATH_TUMBLR,
};
