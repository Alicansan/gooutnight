import type { CollectionConfig } from "payload";

import AddressSearch from "@/collections/views/AddressSearch";

const Address: CollectionConfig = {
  slug: "address",
  admin: {
    useAsTitle: "fullAddress",
  },
  fields: [
    {
      name: "fullAddress",
      type: "text",
      required: true,
      // admin: {
      //   components: {
      //     Field: AddressSearch,
      //   },
      // },
    },
    {
      name: "streetNumber",
      type: "text",
      required: true,
    },

    {
      name: "streetName",
      type: "text",
      required: true,
    },
    {
      name: "city",
      type: "text",
      required: true,
    },
    {
      name: "state",
      type: "text",
      required: true,
    },
    {
      name: "zipCode",
      type: "number",
      required: true,
    },
    {
      name: "coordinates",
      type: "number",
    },
  ],
};

export { Address };
