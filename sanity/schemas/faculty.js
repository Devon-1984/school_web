import { defineField, defineType } from "sanity";

export const Facultypage = defineType({
  name: "facultypage",
  title: "Faculty page",
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
