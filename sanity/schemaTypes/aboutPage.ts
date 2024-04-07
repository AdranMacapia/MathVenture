import { defineField, defineType } from "sanity";
import { DocumentTextIcon } from "@sanity/icons";

export const aboutPageType = defineType({
  name: "aboutPage",
  type: "object",
  title: "About Page",
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
      name: "mission",
      title: "Our Mission",
      type: "blockContent",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "vision",
      title: "Our vision",
      type: "blockContent",
      validation: (Rule) => Rule.required(),
    }),
  ],
  icon: DocumentTextIcon,
});
