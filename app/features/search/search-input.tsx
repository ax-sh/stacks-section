import React from "react";
import { Input } from "@nextui-org/react";
import { SearchIcon } from "@/components/icons";

export function SearchInput({ setTerm, term }: { term: string; setTerm: (term: string) => void }) {
	return (
		<Input
			label="Search"
			isClearable
			radius="lg"
			classNames={{
				label: "text-black/50 dark:text-white/90",
				input: [
					"bg-transparent",
					"text-black/90 dark:text-white/90",
					"placeholder:text-default-700/50 dark:placeholder:text-white/60",
				],
				innerWrapper: "bg-transparent",
				inputWrapper: [
					"shadow-xl",
					"bg-default-200/50",
					"dark:bg-default/60",
					"backdrop-blur-xl",
					"backdrop-saturate-200",
					"hover:bg-default-200/70",
					"dark:hover:bg-default/70",
					"group-data-[focused=true]:bg-default-200/50",
					"dark:group-data-[focused=true]:bg-default/60",
					"!cursor-text",
				],
			}}
			placeholder="Type to search..."
			startContent={
				<SearchIcon className="text-black/50 dark:text-white/90 text-slate-400 pointer-events-none flex-shrink-0" />
			}
			onChange={(event) => {
				setTerm(event.target.value);
			}}
			value={term}
		/>
	);
}
