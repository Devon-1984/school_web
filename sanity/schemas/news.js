import { defineField, defineType } from "sanity";

export const Newspage = defineType({
  name: "newspage",
  title: "Newspage",
  type: "document",
  fields: [
    defineField({
      name: "newsImg",
      title: "Image",
      type: "image",
    }),
    defineField({
      name: "title",
      title: "Title",
      type: "string",
    }),
    defineField({
      name: "date",
      title: "Published At",
      type: "date",
    }),
    defineField({
      name: "description",
      title: "Description",
      type: "text",
    }),
  ],
});
