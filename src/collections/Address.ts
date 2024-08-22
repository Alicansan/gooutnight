import type { CollectionConfig } from "payload";

const Address: CollectionConfig = {
  slug: "address",
  admin: {
    useAsTitle: "addressName",
  },
  fields: [
    {
      name: "addressName",
      type: "text",
      required: true,
      // admin: {
      //   components: {
      //    Field: AddressSearch
      //   },
      // },
    },
    {
      name: "latitude",
      label: "Latitude",
      type: "number",
      required: true,
    },
    {
      name: "longitude",
      label: "Longitude",
      type: "number",
      required: true,
    },
  ],
};

export { Address };
