"use client";

import dynamic from "next/dynamic";
import React, { useState } from "react";
import { useFilteredMemoIconsList } from "@/components/search/hooks/use-filtered-memo-icons-list";
import { SearchInput } from "@/app/features/search-input";

const DndProvider = dynamic(async () => import("react-dnd").then((dnd) => dnd.DndProvider), {
	ssr: false,
});

export function Search() {
	const [term, setTerm] = useState("");
	const filteredIcons = useFilteredMemoIconsList(term);

	return (
		<div className={"flex flex-col gap-4"}>
			<SearchInput term={term} setTerm={setTerm} />
			<h1>{term}</h1>
			{/* <DndProvider backend={HTML5Backend}> */}
			{/*	<div className={"overflow-auto h-[25rem]"}> */}
			{/*		<div className={"py-5 flex flex-wrap gap-2"}> */}
			{/*			{filteredIcons.map((icon) => ( */}
			{/*				<IconCard key={icon.slug} icon={icon} /> */}
			{/*			))} */}
			{/*		</div> */}
			{/*	</div> */}
			{/*	<DropSection /> */}
			{/* </DndProvider> */}
		</div>
	);
}
