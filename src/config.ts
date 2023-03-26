import type { Site, SocialObjects } from "./types";

export const SITE: Site = {
  website: "https://bingnan.vercel.app/",
  author: "Bingnan",
  desc: "Read, Think and Write.",
  title: "Bingnan's Creation",
  ogImage: "site-og.jpg",
  lightAndDarkMode: true,
  postPerPage: 20,
};

export const LOGO_IMAGE = {
  enable: false,
  svg: true,
  width: 216,
  height: 46,
};

export const SOCIALS: SocialObjects = [
  {
    name: "Weibo",
    href: "https://weibo.com/u/2621383013",
    linkTitle: `${SITE.title} on Weibo`,
    active: true,
  },
  {
    name: "Twitter",
    href: "https://twitter.com/brillliantz",
    linkTitle: `${SITE.title} on Twitter`,
    active: true,
  },
  {
    name: "Github",
    href: "https://github.com/brillliantz",
    linkTitle: ` ${SITE.title} on Github`,
    active: true,
  },
];
