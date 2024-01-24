import Database from "better-sqlite3";
import { drizzle } from "drizzle-orm/better-sqlite3";
import * as schema from './sqlite/schema'
import { users } from "./sqlite/schema";
describe("Database memory", () => {
  const sqlite = new Database(':memory:');
  const db = drizzle(sqlite, {schema});
  console.log(db.select().from(users).all());
});
