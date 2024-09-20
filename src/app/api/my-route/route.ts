import getPayload from '@/payload/payload.ssr'
import configPromise from '@payload-config'
import { Payload, RequiredDataFromCollectionSlug } from 'payload'

export const GET = async () => {
  const payload = await getPayload();


  const testAdress = await payload.create({
    collection: "address",
    data: {
      "id": 1,
      "addressName": "222 441 Clement St San Francisco, CA 94118",
      "latitude": 37.783499158608905,
      "longitude": -122.46372472267072,
      "updatedAt": "2024-08-22T11:50:46.990Z",
      "createdAt": "2024-08-22T11:50:46.990Z"
    }
  });



  const testImage = await payload.create({
    collection: "media",
    data: {
      "id": 1,
      "alt": "bitter_end",
      "_key": "86538d53-ff3a-43d4-9a9a-bd2d0fdfe97b-w1l1jb.png",
      "updatedAt": "2024-08-22T11:51:20.907Z",
      "createdAt": "2024-08-22T11:51:20.907Z",
      "url": "/api/media/file/cover-1.png",
      "thumbnailURL": null,
      "filename": "example1.png",
      "mimeType": "image/png",
      "filesize": 499323,
      "width": 600,
      "height": 400,
      "focalX": 50,
      "focalY": 50
    }
  });

  
  if (testImage.id === undefined) {
    return Response.json({ error: "testImage.id is undefined" });
  }

  if (testAdress.id === undefined) {
    return Response.json({ error: "testAdress.id is undefined" });
  }


   const slideData = [{"id": 2,
"alt": "bitter1",
"_key": "05cdc095-a528-4189-a28e-b7f1fcbe6e4f-33.jpg",
"updatedAt": "2024-09-20T10:49:05.434Z",
"createdAt": "2024-09-20T10:49:05.434Z",
"url": "/api/media/file/o.jpg",
"thumbnailURL": null,
"filename": "o.jpg",
"mimeType": "image/jpeg",
"filesize": 202367,
"width": 750,
"height": 1000,
"focalX": 50,
"focalY": 50
},
{
"id": 3,
"alt": "bitter-2",
"_key": "93bcfa21-ba4e-4234-9c11-de794aa54198-otiena.jpg",
"updatedAt": "2024-09-20T10:49:35.076Z",
"createdAt": "2024-09-20T10:49:35.076Z",
"url": "/api/media/file/2023-04-21.jpg",
"thumbnailURL": null,
"filename": "2023-04-21.jpg",
"mimeType": "image/jpeg",
"filesize": 104735,
"width": 496,
"height": 510,
"focalX": 50,
"focalY": 50
},
{
"id": 4,
"alt": "bitter-3",
"_key": "52b6caed-e862-4e2d-bb41-e31fa7a28b71-1pmgb3.jpg",
"updatedAt": "2024-09-20T10:50:57.048Z",
"createdAt": "2024-09-20T10:50:57.048Z",
"url": "/api/media/file/o (1).jpg",
"thumbnailURL": null,
"filename": "o (1).jpg",
"mimeType": "image/jpeg",
"filesize": 194213,
"width": 750,
"height": 1000,
"focalX": 50,
"focalY": 50
}
]

const createdSlides = [];

for (const slide of slideData) {
  const createdSlide = await payload.create({
    collection: "media",
    data: slide,
  });
  createdSlides.push(createdSlide.id); 
}

  const testVenue = venueData(testImage.id, testAdress.id, createdSlides);
  console.log("🚀 ~ GET ~ testVenue:", testVenue)

  const createdVenue = await payload.create({
    collection: "venue",
    data: testVenue,
  });

  return Response.json(createdVenue)
}
  
const venueData = (imageId: number, addressId: number,createdSlides:number[] ): RequiredDataFromCollectionSlug<"venue"> => ({
  id: 1,
  title: "The Bitter End",
  pageLink: "the-bitter-end",
  description: 'The Bitter End is in the center of 6th & Clement neighborhood, but that’s not the only reason it is the neighborhood hang out bar. The bartenders are fast, friendly and funny. The local regulars are decent looking and friendly as well. The Tuesday Trivia night is always packed and is renowned as the best in San Francisco. The bar possesses a large, yet standard selection of beers on taps and you’re ensured a very generous shot portions. Simple mixed drinks with the well alcohol leave something to be desired but if you order something slightly more complex or order premium alcohol the bartenders will make sure you get your money’s worth. The traditional Irish food is ironically very tasty. For dinner I suggest the Celtic Chicken or the Shepard’s Pie. For breakfast you can get ready for a whole day of drinking with a Traditional Irish Breakfast or  you can order the other traditional Irish breakfast, a pint of Guinness. The decor is that of old beat up wooden pub, the atmosphere is that of a pub that could actually be in Ireland, instead of the Applebee’s on St. Patrick’s Day, covered in clovers look so many other touristy Irish Bars go with.',
  address: addressId,
  phone: "(415) 221-9538",
  website: "https://www.facebook.com/The-Bitter-End-271565771373/?rf=926486317417237",
  image: imageId,
  venueImages: createdSlides.map(slideId => ({
    image: slideId  
  })),
  bussinessHours: [
    { days: "Monday", hours: "3pm – 2am" },
    { days: "Tuesday", hours: "3pm – 2am" },
    { days: "Wednesday", hours: "4pm – 2am" },
    { days: "Thursday", hours: "3pm – 2am" },
    { days: "Friday", hours: "3pm – 2am" },
    { days: "Saturday", hours: "11am to 2:00am" },
    { days: "Sunday", hours: "11am to 2:00am" }
  ],
  genre: [{
    style: "Rock",
  }, {
    style: "Classic",
  }],
  dressCode: "Casual",
  admission: "Free Admission",
  crowdType: "Casual crowd with a good mixture of tourists, locals and international tourists",
  lgbtq: "Welcome",
  ageRestriction: "No",
  bestNights: "Tuesday, Friday, and Saturday"
});
