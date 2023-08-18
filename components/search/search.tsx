"use client";

import dynamic from "next/dynamic";
import { HTML5Backend } from "react-dnd-html5-backend";
import React, { useState } from "react";
import { SearchInput } from "@/components/search/search-Input";
import { IconCard } from "@/components/search/icon-card";
import { useFilteredMemoIconsList } from "@/components/search/hooks/use-filtered-memo-icons-list";
import { DropSection } from "@/components/search/drop-section";

const DndProvider = dynamic(async () => import("react-dnd").then((dnd) => dnd.DndProvider), {
	ssr: false,
});

export function Search() {
	const [term, setTerm] = useState("");
	const filteredIcons = useFilteredMemoIconsList(term);

	return (
		<div className={"flex flex-col gap-4"}>
			<DndProvider backend={HTML5Backend}>
				<SearchInput term={term} setTerm={setTerm} />
				<div className={"overflow-auto h-[25rem]"}>
					<div className={"py-5 flex flex-wrap gap-2"}>
						{filteredIcons.map((icon) => (
							<IconCard key={icon.slug} icon={icon} />
						))}
					</div>
				</div>
				<DropSection />
			</DndProvider>
		</div>
	);
}
