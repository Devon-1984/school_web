import { defineField, defineType } from "sanity";

export const news = defineType({
  name: "news",
  title: "News",
  type: "object",
  fields: [
    defineField({
      name: "newsImg",
      title: "News Image",
      type: "image",
    }),
    defineField({
      name: "newsArray",
      title: "News Array",
      type: "array",
      of: [{ type: "string" }],
    }),
  ],
});

export const newspageType = defineType({
  name: "newspage",
  title: "Newspage",
  type: "document",
  fields: [
    defineField({
      name: "news",
      title: "News",
      type: "array",
      of: [{ type: "news" }],
    }),
  ],
});
