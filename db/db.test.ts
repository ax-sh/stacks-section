import { faker } from "@faker-js/faker";
import Database from "better-sqlite3";
import { BetterSQLite3Database, drizzle } from "drizzle-orm/better-sqlite3";
import { migrate } from "drizzle-orm/better-sqlite3/migrator";
import * as schema from "./sqlite/schema";
import { users } from "./sqlite/schema";

function buildMemoryDB() {
  const sqlite = new Database(":memory:");
  const db: BetterSQLite3Database<typeof schema> = drizzle(sqlite, { schema });

  migrate(db, { migrationsFolder: "drizzle" });
  return db;
}

async function seedDB(db: BetterSQLite3Database<typeof schema>) {
  const data = { id: faker.commerce.price() };
  await db.insert(users).values(faker.helpers.multiple(() => data));
}

describe("Database memory", () => {
  it("should load memory db", async () => {
    const db = buildMemoryDB();
    await seedDB(db);

    const user = db.select().from(users).all();
    const userQuery = await db.query.users.findMany();
    // expect(user).toHaveLength(1);
    console.log(userQuery);
  });
});
