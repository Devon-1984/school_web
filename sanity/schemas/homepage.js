import { defineField, defineType } from "sanity";

export const HeroStatDescription = defineType({
  name: "heroStatDescription",
  title: "Stats",
  type: "object",
  fields: [
    defineField({
      name: "stat_description",
      title: "Stat Description",
      type: "array",
      of: [{ type: "string" }],
    }),
  ],
});

export const homepageType = defineType({
  name: "homepage",
  title: "Homepage",
  type: "document",
  fields: [
    defineField({
      name: "announcementText",
      title: "Announcement Text",
      type: "string",
    }),
    defineField({
      name: "heroTitle",
      title: "Hero Title",
      type: "string",
    }),
    defineField({
      name: "heroSubtitle",
      title: "Hero Subtitle",
      type: "string",
    }),
    defineField({
      name: "heroImg",
      title: "Hero Image",
      type: "image",
    }),

    defineField({
      name: "heroStats",
      title: "Hero Stats",
      type: "array",
      of: [{ type: "heroStatDescription" }],
    }),

    defineField({
      name: "about",
      title: "About us",
      type: "array",
      of: [{ type: "string" }],
    }),

    defineField({
      name: "aboutImg",
      title: "About image",
      type: "image",
    }),

    defineField({
      name: "gallery",
      title: "Gallery",
      type: "array",
      of: [{ type: "image" }],
    }),
  ],
});
