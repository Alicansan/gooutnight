import type { CollectionConfig } from "payload";

export const Faqs: CollectionConfig = {
  slug: "faqs",
  fields: [
    {
      name: "question",
      type: "text",
      required: true,
    },
    {
      name: "answer",
      type: "textarea",
      required: true,
    },
  ],
};
