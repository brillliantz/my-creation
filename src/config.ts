import type { Site, SocialObjects } from "./types";

export const SITE: Site = {
  website: "https://bingnan.xyz/",
  author: "Bingnan",
  desc: "Read, Think and Write.",
  title: "Bingnan's Blog",
  ogImage: "site-og.jpg",
  lightAndDarkMode: true,
  postPerPage: 20,
};

export const LOCALE = {
  lang: "en", // html lang code. Set this empty and default will be "en"
  langTag: ["en-EN"], // BCP 47 Language Tags. Set this empty [] to use the environment default
} as const;

export const LOGO_IMAGE = {
  enable: false,
  svg: true,
  width: 216,
  height: 46,
};

export const SOCIALS: SocialObjects = [
  {
    name: "Twitter",
    href: "https://twitter.com/brillliantz",
    linkTitle: `Me on Twitter`,
    active: true,
  },
  {
    name: "Mail",
    href: "mailto:me@bingnan.xyz",
    linkTitle: `Email me`,
    active: true,
  },
  {
    name: "Weibo",
    href: "https://weibo.com/u/2621383013",
    linkTitle: `Me on Sina-Weibo`,
    active: true,
  },
  {
    name: "Github",
    href: "https://github.com/brillliantz",
    linkTitle: ` $Me on Github`,
    active: true,
  },
];
