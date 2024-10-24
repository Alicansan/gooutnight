import { Pool } from "pg";

const pool = new Pool({
  user: "payloaduser",
  host: "localhost",
  database: "payloaddb",
  password: "payloadpassword",
  port: 5432,
});

export const query = (text: string, params?: any[]) => pool.query(text, params);
