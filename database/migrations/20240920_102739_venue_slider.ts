import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-sqlite'

export async function up({ payload, req }: MigrateUpArgs): Promise<void> {
  await payload.db.drizzle.run(sql`CREATE TABLE \`venue_venue_images\` (
  	\`_order\` integer NOT NULL,
  	\`_parent_id\` integer NOT NULL,
  	\`id\` text PRIMARY KEY NOT NULL,
  	\`image_id\` integer NOT NULL,
  	FOREIGN KEY (\`image_id\`) REFERENCES \`media\`(\`id\`) ON UPDATE no action ON DELETE set null,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`venue\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await payload.db.drizzle.run(sql`CREATE INDEX \`venue_venue_images_order_idx\` ON \`venue_venue_images\` (\`_order\`);`)
  await payload.db.drizzle.run(sql`CREATE INDEX \`venue_venue_images_parent_id_idx\` ON \`venue_venue_images\` (\`_parent_id\`);`)
}

export async function down({ payload, req }: MigrateDownArgs): Promise<void> {
  await payload.db.drizzle.run(sql`DROP TABLE \`venue_venue_images\`;`)
}
