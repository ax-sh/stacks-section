import { Search } from "./features/search/search";

export default function Home() {
  return (
    <main className="dark text-foreground bg-background">
      <section className={"container mx-auto"}>
        {/*
        //todo
        config section
        export to svg or html string
        */}
        <Search />

      </section>
      {/* <section className={"container mx-auto"}>icons</section> */}

    </main>
  );
}
