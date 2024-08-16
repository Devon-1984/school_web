import { HeroStatDescription, homepageType } from "./schemas/homepage";

import { Newspage } from "./schemas/news";

import { Aboutpage } from "./schemas/about";

import { Facultypage } from "./schemas/faculty";

import { Boardpage } from "./schemas/board";

import { Noticepage } from "./schemas/notices";

import { Contactpage } from "./schemas/contact";

export const schema = {
  types: [
    homepageType,
    HeroStatDescription,
    Newspage,
    Aboutpage,
    Facultypage,
    Boardpage,
    Noticepage,
    Contactpage,
  ],
};
