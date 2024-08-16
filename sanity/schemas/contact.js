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
      validation: (Rule) =>
        Rule.required().regex(/^\+?[1-9]\d{1,14}$/, {
          name: "phone number", // Error message
          invert: false, // Set to true to enforce that the pattern does not match
        }),
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
