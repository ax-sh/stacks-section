import Database from "better-sqlite3";
import { BetterSQLite3Database, drizzle } from "drizzle-orm/better-sqlite3";
import { migrate } from "drizzle-orm/better-sqlite3/migrator";
import * as schema from "./sqlite/schema";
import { users } from "./sqlite/schema";




function buildMemoryDB() {
  const sqlite = new Database(':memory:');
  const db: BetterSQLite3Database<typeof schema> = drizzle(sqlite, { schema });

  migrate(db, { migrationsFolder: 'drizzle' });
  return db;
}

describe("Database memory", () => {
  it("should load memory db",async () => {
    const db = buildMemoryDB();
    await db.insert(users).values({ id: 'one' });
    const user = db.select().from(users).all()
    console.log(user);
    expect(user).toHaveLength(1)

  });
});
