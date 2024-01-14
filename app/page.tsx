import ExportDropdown from "@/app/ui/export-dropdown";
import { Search } from "./features/search/search";
import { Spacer } from '@nextui-org/react';

export default function Home() {
  return (
    <main className="dark text-foreground bg-background">
      <section className={"container mx-auto"}>
       <div className={'flex justify-end'}>
         {/*config section*/}
        <ExportDropdown />
       </div>
        <Spacer y={4} />
        {/*
        //todo
     
        export to svg or html string
        */}
        <Search />
      </section>
      {/* <section className={"container mx-auto"}>icons</section> */}
    </main>
  );
}
