import { HeroStatDescription, homepageType } from "./schemas/homepage";

import { Newspage } from "./schemas/news";

export const schema = {
  types: [homepageType, HeroStatDescription, Newspage],
};
