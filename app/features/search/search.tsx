"use client";

// import dynamic from "next/dynamic";
import React, { useState } from "react";
import { useFilteredMemoIconsList } from "@/components/search/hooks/use-filtered-memo-icons-list";
import { SearchInput } from "@/app/features/search/search-input";
import { Draggable } from "@/app/features/draggable";
import { DndContext, UniqueIdentifier } from "@dnd-kit/core";
import { Droppable } from "@/app/features/droppable";
import type { DragEndEvent } from "@dnd-kit/core/dist/types";

// const DndProvider = dynamic(async () => import("react-dnd").then((dnd) => dnd.DndProvider), {
// 	ssr: false,
// });

function Example() {
	const [parent, setParent] = useState<UniqueIdentifier | null>(null!);
	const draggable = <Draggable id="draggable">Go ahead, drag me.</Draggable>;

	return (
		<DndContext onDragEnd={handleDragEnd}>
			{!parent ? draggable : null}
			<Droppable id="droppable">{parent === "droppable" ? draggable : "Drop here"}</Droppable>
		</DndContext>
	);

	function handleDragEnd({ over }: DragEndEvent) {
		setParent(over ? over.id : null);
	}
}

export function Search() {
	const [term, setTerm] = useState("");
	const filteredIcons = useFilteredMemoIconsList(term);

	return (
		<div className={"flex flex-col gap-4"}>
			<SearchInput term={term} setTerm={setTerm} />
			<h1>{term}</h1>
			<Example />
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
