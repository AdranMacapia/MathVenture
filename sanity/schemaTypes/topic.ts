import { defineField, defineType } from "sanity";

export default defineType({
  name: "topic",
  title: "Topics",
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
      name: "objectives",
      title: "Objectives",
      type: "blockContent",
      validation: (Rule) => Rule.required(),
    }),
    {
      name: "bgColor",
      title: "Background color",
      type: "color",
    },
    {
      name: "textColor",
      title: "Text color",
      type: "color",
    },
    defineField({
      name: "asset",
      title: "Svg Asset",
      type: "reference",
      to: { type: "svgAsset" },
    }),
    defineField({
      name: "simulations",
      title: "Simulations",
      type: "array",
      of: [{ type: "reference", to: { type: "simulation" } }],
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
