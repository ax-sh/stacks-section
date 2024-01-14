import ExportDropdown from "@/app/ui/export-dropdown";
import { Spacer } from "@nextui-org/react";
import { Search } from "./features/search/search";

export default function Home() {
  return (
    <main className="dark text-foreground bg-background">
      <section className={"container mx-auto"}>
        <div className={"flex justify-end"}>
          {/*
          todo

          config section
          export to svg or html string
          */}
          <ExportDropdown />
        </div>
        <Spacer y={4} />

        <Search />
      </section>
    </main>
  );
}
