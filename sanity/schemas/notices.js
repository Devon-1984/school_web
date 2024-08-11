import { defineField, defineType } from "sanity";

export const Noticepage = defineType({
  name: "noticepage",
  title: "Noticepage",
  type: "document",
  fields: [
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
      name: "pdfFile",
      title: "Notice pdf",
      type: "file",
      options: {
        accept: "application/pdf",
      },
    }),
  ],
});
