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
      name: "gallery",
      title: "Gallery",
      type: "array",
      of: [{ type: "image" }],
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
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "title",
        maxLength: 96,
      },
    }),
  ],
});
