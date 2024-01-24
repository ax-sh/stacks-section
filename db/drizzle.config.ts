import type { Config } from "drizzle-kit";
import { resolve } from "path";

export const DATABASE_URL = resolve("./src/data/local.db");
export default {
	schema: "./src/data/schema.ts",
	out: "./drizzle",
	driver: "better-sqlite",
	// dbCredentials: {
	// 	url: DATABASE_URL,
	// },
	verbose: true,
	strict: true,
} satisfies Config;
