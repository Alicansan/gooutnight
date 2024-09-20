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
      "url": "https://i.imgur.com/d3pna1N.jpeg",
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

  const testVenue = venueData(testImage.id, testAdress.id);
  console.log("🚀 ~ GET ~ testVenue:", testVenue)

  const createdVenue = await payload.create({
    collection: "venue",
    data: testVenue,
  });



  return Response.json(createdVenue)
}



// const venueData: RequiredDataFromCollectionSlug<"venue"> = {
//   id: 3,
//   title: "The Bitter End 3",
//   pageLink: "the-bitter-end-3",
//   description: `The Bitter End is 3...`,
//   address: 1,
//   phone: "(415) 221-9538",
//   website: "https://www.facebook.com/The-Bitter-End-271565771373/?rf=926486317417237",
//   image: 1,
//   bussinessHours: [
//     { days: "Monday", hours: "3pm – 2am" },
//     { days: "Tuesday", hours: "3pm – 2am" },
//     { days: "Wednesday", hours: "4pm – 2am" },
//     { days: "Thursday", hours: "3pm – 2am" },
//     { days: "Friday", hours: "3pm – 2am" },
//     { days: "Saturday", hours: "11am to 2:00am" },
//     { days: "Sunday", hours: "11am to 2:00am" }
//   ],
//   genre: [{
//     style: "Rock",
//   }, {
//     style: "Classic",
//   }],
//   dressCode: "Casual",
//   admission: "Free Admission",
//   crowdType: "Casual crowd with a good mixture of tourists, locals and international tourists",
//   lgbtq: "Welcome",
//   ageRestriction: "No",
//   bestNights: "Tuesday, Friday, and Saturday"
// };



const venueData = (imageId: number, addressId: number): RequiredDataFromCollectionSlug<"venue"> => ({
  id: 2,
  title: "The Bitter End 2",
  pageLink: "the-bitter-end-2",
  description: `The Bitter End is 2...`,
  // address: {
  //   "id": 1,
  //   "addressName": "222 441 Clement St San Francisco, CA 94118",
  //   "latitude": 37.783499158608905,
  //   "longitude": -122.46372472267072,
  //   "updatedAt": "2024-08-22T11:50:46.990Z",
  //   "createdAt": "2024-08-22T11:50:46.990Z"
  // },
  address: addressId,
  phone: "(415) 221-9538",
  website: "https://www.facebook.com/The-Bitter-End-271565771373/?rf=926486317417237",
  // image: {
  //   "id": 1,
  //   "alt": "bitter_end",
  //   "_key": "86538d53-ff3a-43d4-9a9a-bd2d0fdfe97b-w1l1jb.png",
  //   "updatedAt": "2024-08-22T11:51:20.907Z",
  //   "createdAt": "2024-08-22T11:51:20.907Z",
  //   "url": "/api/media/file/example1.png",
  //   "thumbnailURL": null,
  //   "filename": "example1.png",
  //   "mimeType": "image/png",
  //   "filesize": 499323,
  //   "width": 600,
  //   "height": 400,
  //   "focalX": 50,
  //   "focalY": 50
  // },
  image: imageId,
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
