import { defineField, defineType } from "sanity";
import { BlockContentIcon } from "@sanity/icons";

export const richContentType = defineType({
  name: "richContentType",
  type: "object",
  title: "Rich text content",
  fields: [
    defineField({
      name: "heading",
      type: "string",
    }),
    defineField({
      name: "content",
      title: "Content",
      type: "blockContent",
      validation: (Rule) => Rule.required(),
    }),
  ],
  icon: BlockContentIcon,
  preview: {
    select: {
      title: "heading",
    },
    prepare({ title }) {
      return {
        title: title || "Untitled",
        subtitle: "Rich text content",
        media: BlockContentIcon,
      };
    },
  },
});
