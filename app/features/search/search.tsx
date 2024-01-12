"use client";

import React, { useState } from "react";
import { DndContext, DragOverlay, type UniqueIdentifier } from "@dnd-kit/core";
import type { DragEndEvent } from "@dnd-kit/core/dist/types";
import { SearchInput } from "@/app/features/search/search-input";
import { Draggable } from "@/app/features/draggable";
import { Droppable } from "@/app/features/droppable";
import { FilteredIcons, StackIconCard } from "@/app/features/search/filtered-icons";
import { StackIcon } from "@/assets/icons";

function Example() {
	const [parent, setParent] = useState<UniqueIdentifier | undefined>(undefined);
	const draggable = <Draggable id="draggable">Go ahead, drag me.</Draggable>;

	return (
		<DndContext onDragEnd={handleDragEnd}>
			{parent ? null : draggable}
			<Droppable id="droppable">{parent === "droppable" ? draggable : "Drop here"}</Droppable>
		</DndContext>
	);

	function handleDragEnd({ over }: DragEndEvent) {
		setParent(over ? over.id : undefined);
	}
}

export function Search() {
	const [term, setTerm] = useState("");
	const [draggedIcon, setDraggedIcon] = useState<any | null>(null);
	function handleDragEnd({ over, active, ...rest }: DragEndEvent) {
		setDraggedIcon(null);
	}
	function handleDragStart({ over, active, ...rest }: DragEndEvent) {
		setDraggedIcon(active.data.current);
		console.log("start", rest, active, "<<<<<<");
	}
	return (
		<div className={"flex flex-col gap-4"}>
			<SearchInput term={term} setTerm={setTerm} />
			<DndContext onDragEnd={handleDragEnd} onDragStart={handleDragStart}>
				<FilteredIcons term={term} />
				<DragOverlay>
					{!!draggedIcon && <StackIconCard key={draggedIcon.slug} icon={draggedIcon} />}
				</DragOverlay>
			</DndContext>

			<Example />
		</div>
	);
}
