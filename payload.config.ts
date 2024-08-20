// storage-adapter-import-placeholder
import { sqliteAdapter } from "@payloadcms/db-sqlite";
import { lexicalEditor } from "@payloadcms/richtext-lexical";
import { uploadthingStorage } from "@payloadcms/storage-uploadthing";
import path from "path";
import { buildConfig } from "payload";
import sharp from "sharp";
import { fileURLToPath } from "url";

import { AboutUs } from "@/collections/AboutUs";
import { Address } from "@/collections/Address";
import { Faqs } from "@/collections/Faqs";
import { Media } from "@/collections/Media";
import { Users } from "@/collections/Users";
import { Venue } from "@/collections/Venue";

const filename = fileURLToPath(import.meta.url);
const dirname = path.dirname(filename);

export default buildConfig({
  admin: {
    user: Users.slug,
  },
  collections: [Users, Venue, Address, Media, AboutUs, Faqs], // Places koleksiyonunu buraya ekleyin
  editor: lexicalEditor(),
  secret: process.env.PAYLOAD_SECRET || "",
  typescript: {
    outputFile: path.resolve(dirname, "payload-types.ts"),
  },
  db: sqliteAdapter({
    // SQLite-specific arguments go here.
    // `client.url` is required.
    client: {
      url: process.env.DATABASE_URL ?? "",
      authToken: process.env.DATABASE_AUTH_TOKEN,
    },
  }),
  sharp,
  plugins: [
    uploadthingStorage({
      collections: {
        [Media.slug]: true,
      },
      options: {
        apiKey: process.env.UPLOADTHING_SECRET,
        acl: "public-read",
      },
    }),
  ],
});
