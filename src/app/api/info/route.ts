import { NextRequest, NextResponse } from "next/server";

import { query } from "../../../lib/db";

export async function GET(req: NextRequest) {
  try {
    const placesResult = await query(
      "SELECT * FROM public.places ORDER BY id ASC",
    );

    const formattedData = await Promise.all(
      placesResult.rows.map(async (place: any) => {
        let imageUrl = "";

        if (place.image_id) {
          const mediaResult = await query(
            "SELECT filename FROM public.media WHERE id = $1",
            [place.image_id],
          );
          if (mediaResult.rows.length > 0) {
            const filename = mediaResult.rows[0].filename;
            imageUrl = `/api/media/file/${filename}`;
          }
        }

        return {
          id: place.id,
          src: imageUrl,
          alt: place.title,
          name: place.title,
          address: place.description,
          link: place.link,
        };
      }),
    );

    return NextResponse.json(formattedData);
  } catch (error) {
    console.error("Database query error:", error);
    return NextResponse.json(
      { error: "Database query error" },
      { status: 500 },
    );
  }
}
