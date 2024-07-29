import { HeroStatDescription, homepageType } from "./schemas/homepage";

import { Newspage } from "./schemas/news";

import { Aboutpage } from "./schemas/about";

import { Facultypage } from "./schemas/faculty";

export const schema = {
  types: [homepageType, HeroStatDescription, Newspage, Aboutpage, Facultypage],
};
