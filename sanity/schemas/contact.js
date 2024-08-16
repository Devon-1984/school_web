import { defineField, defineType } from "sanity";

export const Contactpage = defineType({
  name: "contactpage",
  title: "Contact page",
  type: "document",
  fields: [
    defineField({
      name: "ourTeacher",
      title: "Teacher",
      type: "string",
    }),
    defineField({
      name: "teachImg",
      title: "Image",
      type: "image",
    }),
    defineField({
      name: "role",
      title: "Role",
      type: "text",
    }),
  ],
});
