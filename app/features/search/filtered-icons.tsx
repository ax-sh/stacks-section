import React from "react";
import { useFilteredMemoIconsList } from "@/components/search/hooks/use-filtered-memo-icons-list";

export function FilteredIcons({ term }: { term: string }) {
	const filteredIcons = useFilteredMemoIconsList(term);
	return (
		<div className={"overflow-auto h-[25rem]"}>
			<div className={"py-5 flex flex-wrap gap-2"}>
				{filteredIcons.map((icon) => (
					<div>{icon.slug}</div>
				))}
			</div>
		</div>
	);
}

/*				<IconCard key={icon.slug} icon={icon} /> */
