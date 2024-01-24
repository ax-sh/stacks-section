import type { Config } from "drizzle-kit";

export default {
  schema: "./db/sqlite/schema.ts",
  out: "./drizzle",
  driver: "better-sqlite",
  // dbCredentials: {
  // 	url: 'local.db',
  // },
  verbose: true,
  strict: true,
} satisfies Config;
