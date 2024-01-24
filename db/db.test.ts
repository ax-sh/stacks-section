import Database from "better-sqlite3";
import { drizzle } from "drizzle-orm/better-sqlite3";
import * as schema from "./sqlite/schema";
import { users } from "./sqlite/schema";
import { migrate } from "drizzle-orm/better-sqlite3/migrator";
describe("Database memory", () => {
  it("should load memory db", ()=>{
    const sqlite = new Database(":memory:");
    const db = drizzle(sqlite, { schema });

    migrate(db,{ migrationsFolder: "", migrationsTable: "" });
  })

  // migrate(db,
  // //   {
  // //   // migrationsFolder:
  // //   //   "C:\\Users\\USER\\Desktop\\CODE\\youtube-personal-playlist-nextjs\\migrations",
  // // }
  // );
  console.log(db.select().from(users).all());
});
