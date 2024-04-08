import { defineField } from "sanity";

export default defineField({
  name: "user",
  title: "Users",
  type: "document",
  fields: [
    defineField({
      name: "fullName",
      title: "Full Name",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: "email",
      title: "Email or username",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
  ],
});
