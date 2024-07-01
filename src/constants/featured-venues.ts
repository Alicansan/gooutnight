import { LatLngTuple } from "leaflet";

export interface FeaturedVenue {
  id: number;
  slug: string;
  src: string;
  alt: string;
  name: string;
  address: string;
  description: string;
  fields: FeaturedVenueFields;
}

interface FeaturedVenueFields {
  website: string;
  phone: string;
  address: string;
  addressLink: string;
  coord: LatLngTuple;
  days: string[];
  hours: string[];
  musicFormats: string[];
  dressCode: string;
  generalAdmission: string;
  bestNights: string;
  typeOfCrowd: string;
  lgbtq: string;
  welcome: string;
  age: string;
}

export const defaultFields: FeaturedVenueFields = {
  website:
    "https://www.facebook.com/The-Bitter-End-271565771373/?rf=926486317417237",
  phone: "(415) 221-9538",
  address: "441 Clement St San Francisco, CA 94118",
  addressLink: "https://g.co/kgs/pxLCBEu",
  coord: [37.783499158608905, -122.46372472267073],
  days: [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ],
  hours: [
    "3pm – 2am",
    "3pm – 2am",
    "4pm – 2am",
    "3pm – 2am",
    "3pm – 2am",
    "11am - 2am",
    "11am - 2am",
  ],
  musicFormats: [
    " Techno",
    "Hip Hop ",
    " Top RnB",
    " DnB",
    " Deep House",
    " Breakcore",
    " EDM",
  ],
  dressCode: "Casual",
  generalAdmission: "Free Admission",
  bestNights: "Tuesday, Friday, and Saturday",
  typeOfCrowd:
    "Casual crowd with a good mixture of tourists, locals and international tourists",
  lgbtq: "Welcome",
  welcome: "No",
  age: "20+",
};

const defaultDescription = `The Bitter End is in the center of 6th & Clement neighborhood, but that’s not the only reason it is the neighborhood hang out bar. The bartenders are fast, friendly and funny. The local regulars are decent looking and friendly as well. The Tuesday Trivia night is always packed and is renowned as the best in San Francisco. The bar possesses a large, yet standard selection of beers on taps and you’re ensured a very generous shot portions. Simple mixed drinks with the well alcohol leave something to be desired but if you order something slightly more complex or order premium alcohol the bartenders will make sure you get your money’s worth.

The traditional Irish food is ironically very tasty. For dinner I suggest the Celtic Chicken or the Shepard’s Pie. For breakfast you can get ready for a whole day of drinking with a Traditional Irish Breakfast or  you can order the other traditional Irish breakfast, a pint of Guinness. The decor is that of old beat up wooden pub, the atmosphere is that of a pub that could actually be in Ireland, instead of the Applebee’s on St. Patrick’s Day, covered in clovers look so many other touristy Irish Bars go with.`;

export const featuredVenues: FeaturedVenue[] = [
  {
    id: 1,
    slug: "the-bitter-end",
    src: "/example1.png",
    alt: "example1",
    name: "The Bitter End",
    address: "441 Clement St San Francisco, CA 94118",
    description: defaultDescription,
    fields: defaultFields,
  },

  {
    id: 2,
    slug: "monkey-bar",
    src: "/example2.png",
    alt: "example2",
    name: "Monkey Bar",
    address: "26 Wall St Orlando, FL 32801",
    description: defaultDescription,
    fields: defaultFields,
  },
  {
    id: 3,
    slug: "sideshow",
    src: "/example3.png",
    alt: "example3",
    name: "Sideshow",
    address: "15 N. Orange Ave Orlando, FL 32801",
    description: defaultDescription,
    fields: defaultFields,
  },
  {
    id: 4,
    slug: "waitiki",
    src: "/example4.png",
    alt: "example4",
    name: "Waitiki",
    address: "26 Wall St Orlando, FL 32801",
    description: defaultDescription,
    fields: defaultFields,
  },
  {
    id: 5,
    slug: "shine",
    src: "/example5.png",
    alt: "example5",
    name: "Shine",
    address: "25 Wall St Orlando, FL 32801",
    description: defaultDescription,
    fields: defaultFields,
  },
  {
    id: 6,
    slug: "hen-house",
    src: "/example6.png",
    alt: "example6",
    name: "Hen House",
    address: "11 Wall St Orlando, FL 32801",
    description: defaultDescription,
    fields: defaultFields,
  },
];
