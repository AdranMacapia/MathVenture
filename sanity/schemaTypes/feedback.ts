import { defineField, defineType } from "sanity";

export default defineType({
  name: "feedback",
  title: "User Feedback",
  type: "document",
  fields: [
    defineField({
      name: "feedbackType",
      title: "Type",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "message",
      title: "Message",
      type: "text",
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: "date",
      title: "Date and time",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
  ],
});
