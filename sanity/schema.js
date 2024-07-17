import { HeroStatDescription, homepageType } from "./schemas/homepage";

import { newspageType, news } from "./schemas/news";

export const schema = {
  types: [homepageType, HeroStatDescription, newspageType, news],
};
