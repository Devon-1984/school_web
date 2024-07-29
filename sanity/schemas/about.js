import { defineField, defineType } from "sanity";

export const Aboutpage = defineType({
  name: "aboutpage",
  title: "About page",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
    }),
    defineField({
      name: "description",
      title: "Description",
      type: "text",
    }),
    defineField({
      name: "aboutImg",
      title: "Image",
      type: "image",
    }),
    defineField({
      name: "principal",
      title: "Principal",
      type: "string",
    }),
    defineField({
      name: "principalDescription",
      title: "Description",
      type: "text",
    }),
    defineField({
      name: "principalImg",
      title: "Image",
      type: "image",
    }),
    defineField({
      name: "principalName",
      title: "Principal",
      type: "string",
    }),
    defineField({
      name: "teachers",
      title: "Teachers",
      type: "string",
    }),
  ],
});
