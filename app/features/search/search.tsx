"use client";

import React, { useState } from "react";
import { DndContext, DragOverlay } from "@dnd-kit/core";
import type { DragEndEvent } from "@dnd-kit/core/dist/types";
import { SearchInput } from "@/app/features/search/search-input";
import { FilteredIcons, StackIconCard } from "@/app/features/search/filtered-icons";
import { TbDragDrop2 } from "react-icons/tb";
import { Example } from "@/app/features/search/example";
import logger from "@/app/features/logger";

const child = logger.child({ type: "search" });
child.info("hello child!");
export function Search() {
	const [term, setTerm] = useState("");
	const [draggedIcon, setDraggedIcon] = useState<any | null>(null);
	function handleDragEnd({ over, active, ...rest }: DragEndEvent) {
		setDraggedIcon(null);
	}
	function handleDragStart({ over, active, ...rest }: DragEndEvent) {
		setDraggedIcon(active.data.current);
	}
	return (
		<div className={"flex flex-col gap-4"}>
			<SearchInput term={term} setTerm={setTerm} />
			<DndContext onDragEnd={handleDragEnd} onDragStart={handleDragStart}>
				<FilteredIcons term={term} />
				<DragOverlay>
					{!!draggedIcon && <StackIconCard key={draggedIcon.slug} icon={draggedIcon} />}
				</DragOverlay>
				<section className={"bg-gray-950 p-4 h-40 relative"}>
					<div className={"absolute inset-0 grid place-content-center"}>
						<TbDragDrop2 size={64} />
					</div>
				</section>
			</DndContext>

			<Example />
		</div>
	);
}
