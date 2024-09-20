import { MigrateUpArgs, MigrateDownArgs, sql } from "@payloadcms/db-sqlite";

export async function up({ payload, req }: MigrateUpArgs): Promise<void> {
  await payload.db.drizzle.run(sql`CREATE TABLE \`users\` (
  	\`id\` integer PRIMARY KEY NOT NULL,
  	\`updated_at\` text DEFAULT (strftime('%Y-%m-%dT%H:%M:%fZ', 'now')) NOT NULL,
  	\`created_at\` text DEFAULT (strftime('%Y-%m-%dT%H:%M:%fZ', 'now')) NOT NULL,
  	\`email\` text NOT NULL,
  	\`reset_password_token\` text,
  	\`reset_password_expiration\` text,
  	\`salt\` text,
  	\`hash\` text,
  	\`login_attempts\` numeric DEFAULT 0,
  	\`lock_until\` text
  );
  `);
  await payload.db.drizzle.run(sql`CREATE TABLE \`venue_bussiness_hours\` (
  	\`_order\` integer NOT NULL,
  	\`_parent_id\` integer NOT NULL,
  	\`id\` text PRIMARY KEY NOT NULL,
  	\`days\` text,
  	\`hours\` text,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`venue\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `);
  await payload.db.drizzle.run(sql`CREATE TABLE \`venue_genre\` (
  	\`_order\` integer NOT NULL,
  	\`_parent_id\` integer NOT NULL,
  	\`id\` text PRIMARY KEY NOT NULL,
  	\`style\` text,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`venue\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `);
  await payload.db.drizzle.run(sql`CREATE TABLE \`venue\` (
  	\`id\` integer PRIMARY KEY NOT NULL,
  	\`title\` text NOT NULL,
  	\`page_link\` text NOT NULL,
  	\`description\` text NOT NULL,
  	\`address_id\` integer NOT NULL,
  	\`phone\` text,
  	\`website\` text,
  	\`image_id\` integer NOT NULL,
  	\`dress_code\` text NOT NULL,
  	\`admission\` text NOT NULL,
  	\`crowd_type\` text NOT NULL,
  	\`lgbtq\` text NOT NULL,
  	\`ageRestriction\` text NOT NULL,
  	\`best_nights\` text NOT NULL,
  	\`updated_at\` text DEFAULT (strftime('%Y-%m-%dT%H:%M:%fZ', 'now')) NOT NULL,
  	\`created_at\` text DEFAULT (strftime('%Y-%m-%dT%H:%M:%fZ', 'now')) NOT NULL,
  	FOREIGN KEY (\`address_id\`) REFERENCES \`address\`(\`id\`) ON UPDATE no action ON DELETE set null,
  	FOREIGN KEY (\`image_id\`) REFERENCES \`media\`(\`id\`) ON UPDATE no action ON DELETE set null
  );
  `);
  await payload.db.drizzle.run(sql`CREATE TABLE \`address\` (
  	\`id\` integer PRIMARY KEY NOT NULL,
  	\`address_name\` text NOT NULL,
  	\`latitude\` numeric NOT NULL,
  	\`longitude\` numeric NOT NULL,
  	\`updated_at\` text DEFAULT (strftime('%Y-%m-%dT%H:%M:%fZ', 'now')) NOT NULL,
  	\`created_at\` text DEFAULT (strftime('%Y-%m-%dT%H:%M:%fZ', 'now')) NOT NULL
  );
  `);
  await payload.db.drizzle.run(sql`CREATE TABLE \`media\` (
  	\`id\` integer PRIMARY KEY NOT NULL,
  	\`alt\` text NOT NULL,
  	\`_key\` text,
  	\`updated_at\` text DEFAULT (strftime('%Y-%m-%dT%H:%M:%fZ', 'now')) NOT NULL,
  	\`created_at\` text DEFAULT (strftime('%Y-%m-%dT%H:%M:%fZ', 'now')) NOT NULL,
  	\`url\` text,
  	\`thumbnail_u_r_l\` text,
  	\`filename\` text,
  	\`mime_type\` text,
  	\`filesize\` numeric,
  	\`width\` numeric,
  	\`height\` numeric,
  	\`focal_x\` numeric,
  	\`focal_y\` numeric
  );
  `);
  await payload.db.drizzle.run(sql`CREATE TABLE \`about_us\` (
  	\`id\` integer PRIMARY KEY NOT NULL,
  	\`title\` text NOT NULL,
  	\`description\` text NOT NULL,
  	\`image_id\` integer NOT NULL,
  	\`updated_at\` text DEFAULT (strftime('%Y-%m-%dT%H:%M:%fZ', 'now')) NOT NULL,
  	\`created_at\` text DEFAULT (strftime('%Y-%m-%dT%H:%M:%fZ', 'now')) NOT NULL,
  	FOREIGN KEY (\`image_id\`) REFERENCES \`media\`(\`id\`) ON UPDATE no action ON DELETE set null
  );
  `);
  await payload.db.drizzle.run(sql`CREATE TABLE \`faqs\` (
  	\`id\` integer PRIMARY KEY NOT NULL,
  	\`question\` text NOT NULL,
  	\`answer\` text NOT NULL,
  	\`updated_at\` text DEFAULT (strftime('%Y-%m-%dT%H:%M:%fZ', 'now')) NOT NULL,
  	\`created_at\` text DEFAULT (strftime('%Y-%m-%dT%H:%M:%fZ', 'now')) NOT NULL
  );
  `);
  await payload.db.drizzle.run(sql`CREATE TABLE \`payload_preferences\` (
  	\`id\` integer PRIMARY KEY NOT NULL,
  	\`key\` text,
  	\`value\` text,
  	\`updated_at\` text DEFAULT (strftime('%Y-%m-%dT%H:%M:%fZ', 'now')) NOT NULL,
  	\`created_at\` text DEFAULT (strftime('%Y-%m-%dT%H:%M:%fZ', 'now')) NOT NULL
  );
  `);
  await payload.db.drizzle.run(sql`CREATE TABLE \`payload_preferences_rels\` (
  	\`id\` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
  	\`order\` integer,
  	\`parent_id\` integer NOT NULL,
  	\`path\` text NOT NULL,
  	\`users_id\` integer,
  	FOREIGN KEY (\`parent_id\`) REFERENCES \`payload_preferences\`(\`id\`) ON UPDATE no action ON DELETE cascade,
  	FOREIGN KEY (\`users_id\`) REFERENCES \`users\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `);
  await payload.db.drizzle.run(sql`CREATE TABLE \`payload_migrations\` (
  	\`id\` integer PRIMARY KEY NOT NULL,
  	\`name\` text,
  	\`batch\` numeric,
  	\`updated_at\` text DEFAULT (strftime('%Y-%m-%dT%H:%M:%fZ', 'now')) NOT NULL,
  	\`created_at\` text DEFAULT (strftime('%Y-%m-%dT%H:%M:%fZ', 'now')) NOT NULL
  );
  `);
  await payload.db.drizzle.run(
    sql`CREATE INDEX \`users_created_at_idx\` ON \`users\` (\`created_at\`);`,
  );
  await payload.db.drizzle.run(
    sql`CREATE UNIQUE INDEX \`users_email_idx\` ON \`users\` (\`email\`);`,
  );
  await payload.db.drizzle.run(
    sql`CREATE INDEX \`venue_bussiness_hours_order_idx\` ON \`venue_bussiness_hours\` (\`_order\`);`,
  );
  await payload.db.drizzle.run(
    sql`CREATE INDEX \`venue_bussiness_hours_parent_id_idx\` ON \`venue_bussiness_hours\` (\`_parent_id\`);`,
  );
  await payload.db.drizzle.run(
    sql`CREATE INDEX \`venue_genre_order_idx\` ON \`venue_genre\` (\`_order\`);`,
  );
  await payload.db.drizzle.run(
    sql`CREATE INDEX \`venue_genre_parent_id_idx\` ON \`venue_genre\` (\`_parent_id\`);`,
  );
  await payload.db.drizzle.run(
    sql`CREATE UNIQUE INDEX \`venue_page_link_idx\` ON \`venue\` (\`page_link\`);`,
  );
  await payload.db.drizzle.run(
    sql`CREATE INDEX \`venue_created_at_idx\` ON \`venue\` (\`created_at\`);`,
  );
  await payload.db.drizzle.run(
    sql`CREATE INDEX \`address_created_at_idx\` ON \`address\` (\`created_at\`);`,
  );
  await payload.db.drizzle.run(
    sql`CREATE INDEX \`media_created_at_idx\` ON \`media\` (\`created_at\`);`,
  );
  await payload.db.drizzle.run(
    sql`CREATE UNIQUE INDEX \`media_filename_idx\` ON \`media\` (\`filename\`);`,
  );
  await payload.db.drizzle.run(
    sql`CREATE INDEX \`about_us_created_at_idx\` ON \`about_us\` (\`created_at\`);`,
  );
  await payload.db.drizzle.run(
    sql`CREATE INDEX \`faqs_created_at_idx\` ON \`faqs\` (\`created_at\`);`,
  );
  await payload.db.drizzle.run(
    sql`CREATE INDEX \`payload_preferences_key_idx\` ON \`payload_preferences\` (\`key\`);`,
  );
  await payload.db.drizzle.run(
    sql`CREATE INDEX \`payload_preferences_created_at_idx\` ON \`payload_preferences\` (\`created_at\`);`,
  );
  await payload.db.drizzle.run(
    sql`CREATE INDEX \`payload_preferences_rels_order_idx\` ON \`payload_preferences_rels\` (\`order\`);`,
  );
  await payload.db.drizzle.run(
    sql`CREATE INDEX \`payload_preferences_rels_parent_idx\` ON \`payload_preferences_rels\` (\`parent_id\`);`,
  );
  await payload.db.drizzle.run(
    sql`CREATE INDEX \`payload_preferences_rels_path_idx\` ON \`payload_preferences_rels\` (\`path\`);`,
  );
  await payload.db.drizzle.run(
    sql`CREATE INDEX \`payload_migrations_created_at_idx\` ON \`payload_migrations\` (\`created_at\`);`,
  );
}

export async function down({ payload, req }: MigrateDownArgs): Promise<void> {
  await payload.db.drizzle.run(sql`DROP TABLE \`users\`;`);
  await payload.db.drizzle.run(sql`DROP TABLE \`venue_bussiness_hours\`;`);
  await payload.db.drizzle.run(sql`DROP TABLE \`venue_genre\`;`);
  await payload.db.drizzle.run(sql`DROP TABLE \`venue\`;`);
  await payload.db.drizzle.run(sql`DROP TABLE \`address\`;`);
  await payload.db.drizzle.run(sql`DROP TABLE \`media\`;`);
  await payload.db.drizzle.run(sql`DROP TABLE \`about_us\`;`);
  await payload.db.drizzle.run(sql`DROP TABLE \`faqs\`;`);
  await payload.db.drizzle.run(sql`DROP TABLE \`payload_preferences\`;`);
  await payload.db.drizzle.run(sql`DROP TABLE \`payload_preferences_rels\`;`);
  await payload.db.drizzle.run(sql`DROP TABLE \`payload_migrations\`;`);
}
