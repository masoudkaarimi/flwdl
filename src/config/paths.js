function path(root, sublink) {
   return `${root}${sublink}`;
}

const ROOT_AUTH = "/auth";

export const PATH_AUTH = {
   root: ROOT_AUTH,
   login: path(ROOT_AUTH, "/login"),
   register: path(ROOT_AUTH, "/register"),
   forgotPassword: path(ROOT_AUTH, "/forgot-password"),
   verify: path(ROOT_AUTH, "/verify"),
};

export const PATH_PAGE = {
   home: "/",
   blog: "/blog",
   services: "/services",
   faqs: "/faqs",
   about: "/about",
   contacts: "/contacts",
   terms: "/terms",
};
