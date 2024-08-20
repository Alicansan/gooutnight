import type { CollectionConfig } from "payload";

const Venue: CollectionConfig = {
  slug: "venue",
  fields: [
    {
      name: "title",
      type: "text",
      required: true,
    },
    {
      name: "description",
      type: "textarea",
      required: true,
    },
    {
      name: "address",
      type: "relationship",
      relationTo: "address",
      required: true,
    },
    {
      name: "link",
      type: "text",
    },
    {
      name: "image",
      type: "upload",
      relationTo: "media",
      required: true,
    },
  ],
};

export { Venue };
