import { Search } from "./features/search/search";

export default function Home() {
  return (
    <main className="dark text-foreground bg-background">
      <section className={"container mx-auto"}>
        <Search />
        {/* todo config export  */}
      </section>
      {/* <section className={"container mx-auto"}>icons</section> */}
      {/* <Card /> */}
    </main>
  );
}
