import { Search } from "@/app/features/search";

export default function Home() {
	return (
		<main className="dark text-foreground bg-background">
			<section className={"container mx-auto"}>
				<Search />
				{/* config export{" "} */}
			</section>
			{/* <section className={"container mx-auto"}>icons</section> */}
			{/* <Card /> */}
		</main>
	);
}
