import { defineField, defineType } from "sanity";
import { DocumentTextIcon } from "@sanity/icons";

export const homePageType = defineType({
  name: "homePage",
  type: "object",
  title: "homePage",
  fields: [
    defineField({
      name: "aboveTheFoldArea",
      title: "Above the fold content",
      type: "hero",
      options: {
        collapsible: true,
        collapsed: true,
      },
    }),
    defineField({
      name: "topicsArea",
      title: "Topics Area",
      type: "hero",
      options: {
        collapsible: true,
        collapsed: true,
      },
    }),
    defineField({
      name: "callToActionArea",
      title: "Call to Action Area",
      type: "hero",
      options: {
        collapsible: true,
        collapsed: true,
      },
    }),
  ],
  icon: DocumentTextIcon,
  preview: {
    select: {
      title: "heading",
      image: "image",
    },
    prepare({ title, image }) {
      return {
        title: title || "Untitled",
        subtitle: "Hero",
        media: image || DocumentTextIcon,
      };
    },
  },
});
