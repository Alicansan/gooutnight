import { revalidatePath } from "next/cache";
import type { CollectionConfig } from "payload";

export const AboutUs: CollectionConfig = {
  slug: "about-us",
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
      name: "image",
      type: "upload",
      relationTo: "media",
      required: true,
    },
  ],
  hooks: {
    afterChange: [
      (args) => {
        revalidatePath("/about-us");
      },
    ],
  },
};
