import type { CollectionConfig } from "payload";

const Venue: CollectionConfig = {
  slug: "venue",
  admin: {
    useAsTitle: "title",
  },
  fields: [
    
    {
      name: "title",
      type: "text",
      required: true,
    },
    {
      name: "pageLink",
      type: "text",
      required: true,
      unique: true,
      
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
      name: "phone",
      type: "text",
    },
    {
      name: "website",
      type: "text",
    },
    {
      name: "image",
      type: "upload",
      relationTo: "media",
      required: true,
    },
    {
      name: "venueImages",
      label: "Images of your venue that being displayed as slide image ",
      type: "array",
      required: true,
      fields:[
        {
      
      name: "image",
      type: "upload",
      relationTo: "media",
      required: true,
    },
      ]
    },
    {
      name: "bussinessHours",
      label: "Your open days and their hours",
      type: "array",
       maxRows: 7,
      required: true,
      fields:[
        {name: "days",
          type: "text",
        },
        {name: "hours",
          type: "text",
        },
      ]
    },
    {
      name: "genre",
      type: "array",
      label: "Type of genres usually plays in the venue",
      fields: [
        {
          name: "style",
          type: "text"
        }
      ]
    },
    {
      name: "dressCode",
      label: "Dress Code",
      type: "text",
      required: true,
    },
    {
      name: "admission",
      label: "General Admission",
      type: "text",
      required: true,
    },
    
    {
      name: "crowdType",
      label: "Type of Crowd",
      type: "text",
      required: true,
    },
    {
      name: "lgbtq",
      label: "LGBTQ",
      type: "radio", 
  required: true,
  options: [
    {
      label: "Welcome",
      value: "Welcome",
    },
    {
      label: "Not Welcomed",
      value: "Not Welcomed",
    },
  ],
    },
   {
  name: "ageRestriction",
  label: "18-20 age allowed?",
  type: "radio", 
  required: true,
  options: [
    {
      label: "Yes",
      value: "Yes",
    },
    {
      label: "No",
      value: "No",
    },
  ],
},
{
  name: "bestNights",
  label: "Best Nights",
  type: "text",
  required: true,
  admin: {
    placeholder: "Enter days separated by commas (e.g., Tuesday, Saturday and Sunday)",
  },
}

  ],
 
};

export { Venue };
