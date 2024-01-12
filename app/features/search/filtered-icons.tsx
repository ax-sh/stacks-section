import { useFilteredMemoIconsList } from "@/components/search/hooks/use-filtered-memo-icons-list";
import React from "react";

export function FilteredIcons({ term }: { term: string }) {
	const filteredIcons = useFilteredMemoIconsList(term);
	return (
		<div className={"overflow-auto h-[25rem]"}>
			<div className={"py-5 flex flex-wrap gap-2"}>
				{filteredIcons.map((icon) => {
					return <div>{icon.slug}</div>;
				})}
			</div>
		</div>
	);
}

{
	/*	<div className={"overflow-auto h-[25rem]"}> */
}
{
	/*		<div className={"py-5 flex flex-wrap gap-2"}> */
}
{
	/*			{filteredIcons.map((icon) => ( */
}
{
	/*				<IconCard key={icon.slug} icon={icon} /> */
}
{
	/*			))} */
}
{
	/*		</div> */
}
{
	/*	</div> */
}
