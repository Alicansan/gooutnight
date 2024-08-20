import type { CollectionConfig } from "payload";

import AddressSearch from "@/collections/views/AddressSearch";

const Address: CollectionConfig = {
  slug: "address",
  admin: {
    useAsTitle: "Full Address",
  },
  fields: [
    {
      name: "Full Address",
      type: "text",
      required: true,
      admin: {
        components: {
          Field: AddressSearch,
        },
      },
    },
    {
      name: "street number",
      type: "text",
      required: true,
    },

    {
      name: "street name",
      type: "text",
      required: true,
    },
    {
      name: "city",
      type: "text",
      required: true,
    },
    {
      name: "State",
      type: "text",
      required: true,
    },
    {
      name: "ZIP Code",
      type: "number",
      required: true,
    },
    {
      name: "Coordinates",
      type: "number",
    },
  ],
};

export { Address };
