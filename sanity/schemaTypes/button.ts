import { defineField, defineType } from "sanity";
import { BoldIcon } from "@sanity/icons";

export const buttonType = defineType({
  name: "button",
  type: "object",
  title: "Button",
  fields: [
    defineField({
      name: "label",
      type: "string",
    }),
    defineField({
      name: "href",
      type: "string",
      options: {
        list: ["/about", "/simulations", "/#faqs", "/privacy-policy", "/login"],
        layout: "dropdown",
      },
    }),
    defineField({
      name: "variant",
      type: "string",
      options: {
        list: ["outline", "solid"],
        layout: "dropdown",
      },
    }),
  ],
  icon: BoldIcon,
  preview: {
    select: {
      title: "label",
    },
    prepare({ title }) {
      return {
        title: title || "Untitled",
        subtitle: "Button",
      };
    },
  },
});
