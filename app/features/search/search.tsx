"use client";

import React, { useState } from "react";
import { DndContext, type UniqueIdentifier } from "@dnd-kit/core";
import type { DragEndEvent } from "@dnd-kit/core/dist/types";
import { SearchInput } from "@/app/features/search/search-input";
import { Draggable } from "@/app/features/draggable";
import { Droppable } from "@/app/features/droppable";
import { FilteredIcons } from "@/app/features/search/filtered-icons";

function Example() {
	const [parent, setParent] = useState<UniqueIdentifier | null>(null!);
	const draggable = <Draggable id="draggable">Go ahead, drag me.</Draggable>;

	return (
		<DndContext onDragEnd={handleDragEnd}>
			{parent ? null : draggable}
			<Droppable id="droppable">{parent === "droppable" ? draggable : "Drop here"}</Droppable>
		</DndContext>
	);

	function handleDragEnd({ over }: DragEndEvent) {
		setParent(over ? over.id : null);
	}
}

export function Search() {
	const [term, setTerm] = useState("");

	return (
		<div className={"flex flex-col gap-4"}>
			<SearchInput term={term} setTerm={setTerm} />
			<FilteredIcons term={term} />
			<h1>{term}</h1>
			<Example />
		</div>
	);
}
