import { defineField, defineType } from "sanity";

export const Contactpage = defineType({
  name: "contactpage",
  title: "Contact page",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
    }),
    defineField({
      name: "email",
      title: "Email",
      type: "string",
      validation: (Rule) => Rule.required().email(),
    }),

    defineField({
      name: "phoneNumber",
      title: "Phone Number",
      type: "string",
    }),
    defineField({
      name: "addr",
      title: "Address",
      type: "text",
    }),
    defineField({
      name: "social",
      title: "Facebook",
      type: "string",
    }),
  ],
});
