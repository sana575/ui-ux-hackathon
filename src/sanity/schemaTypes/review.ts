import { defineType } from "sanity";

export const review = defineType({
  name: "review",
  title: "Review",
  type: "document",
  fields: [
    {
      name: "reviewerName",
      type: "string",
      title: "Reviewer Name",
      validation: (rule) => rule.required(),
    },
    {
      name: "rating",
      type: "number",
      title: "Rating",
      validation: (rule) => rule.required().min(1).max(5), // Rating between 1 and 5
    },
    {
      name: "reviewText",
      type: "text",
      title: "Review Text",
      validation: (rule) => rule.max(500), // Optional limit on review text
    },
    {
      name: "reviewDate",
      type: "datetime",
      title: "Review Date",
      validation: (rule) => rule.required(),
    },
    {
      name: "product",
      type: "reference",
      to: [{ type: "product" }], // Link to the product schema
      title: "Related Product",
      validation: (rule) => rule.required(),
    },
  ],
});
