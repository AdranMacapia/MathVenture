import { defineField, defineType } from "sanity";

export default defineType({
  name: "simulation",
  title: "Simulations",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "title",
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "subtitle",
      title: "Subtitle",
      type: "text",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "simulationUrl",
      title: "Simulation url",
      type: "url",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "objectives",
      title: "Objectives",
      type: "blockContent",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "mechanics",
      title: "Mechanics",
      type: "blockContent",
    }),
    defineField({
      name: "coverImage",
      title: "Cover Image",
      type: "image",
      options: {
        hotspot: true,
      },
      fields: [
        {
          name: "alt",
          type: "string",
          title: "Alternative Text",
        },
      ],
    }),
    defineField({
      name: "topic",
      title: "Topic",
      type: "reference",
      to: { type: "topic" },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "simulationScreenshots",
      title: "Simulation screenshots",
      type: "array",
      of: [
        {
          type: "image",
          options: {
            hotspot: true,
          },
          fields: [
            {
              name: "alt",
              type: "string",
              title: "Alternative Text",
            },
          ],
        },
      ],
    }),
  ],
});
