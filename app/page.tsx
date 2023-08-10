import Image from "next/image";
import SearchInput from "@/app/components/search";
// import { Card } from "@nextui-org/card";
// import { Search } from "@nextui-org/shared-icons";

export default function Home() {
	return (
		<main className="dark text-foreground bg-background">
			<section className={"container mx-auto"}>
				<SearchInput />
				config export{" "}
			</section>
			<section className={"container mx-auto"}>icons</section>
			{/*<Card />*/}
		</main>
	);
}
