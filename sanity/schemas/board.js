import { defineField, defineType } from "sanity";

export const Boardpage = defineType({
  name: "boardpage",
  title: "Board Members",
  type: "document",
  fields: [
    defineField({
      name: "boardName",
      title: "Board Member Name",
      type: "string",
    }),
    defineField({
      name: "boardImg",
      title: "Image",
      type: "image",
    }),
    defineField({
      name: "desc",
      title: "Description",
      type: "text",
    }),
  ],
});
