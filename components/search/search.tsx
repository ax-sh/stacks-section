"use client";
import type { SimpleIcon } from "simple-icons";
import * as icons from "simple-icons";
// import { Image } from "@nextui-org/react";
import dynamic from "next/dynamic";

import { HTML5Backend } from "react-dnd-html5-backend";
import React, { useMemo, useState } from "react";
import { useDrop } from "react-dnd";
import { SearchInput } from "@/components/search/search-Input";
import clsx from "clsx";
import { IconCard } from "@/components/search/icon-card";

const DndProvider = dynamic(async () => import("react-dnd").then((dnd) => dnd.DndProvider), {
	ssr: false,
});

function DropSection() {
	const [{ canDrop, isOver }, drop] = useDrop(() => ({
		accept: "ItemTypes.BOX",
		drop: () => ({ name: "Dustbin" }),
		collect: (monitor) => ({
			isOver: monitor.isOver(),
			canDrop: monitor.canDrop(),
		}),
	}));

	const isActive = canDrop && isOver;
	let backgroundColor = "#222";
	if (isActive) {
		backgroundColor = "darkgreen";
	} else if (canDrop) {
		backgroundColor = "darkkhaki";
	}

	return (
		<div
			ref={drop}
			className={clsx("h-40", "text-white p-4 text-center text-base", "grid place-content-center")}
			style={{ backgroundColor }}
			data-testid="dustbin"
		>
			{isActive ? "Release to drop" : "Drag an icon here"}
		</div>
	);
}

export function Search() {
	const [term, setTerm] = useState("");
	const filteredIcons = useMemo(() => {
		if (!term) return [];
		const predicate = (i: SimpleIcon) => i.title.toLowerCase().includes(term);
		const results = Object.values(icons).filter(predicate);

		return results;
	}, [term]);

	return (
		<div className={"flex flex-col gap-4"}>
			<DndProvider backend={HTML5Backend}>
				<SearchInput term={term} setTerm={setTerm} />
				<div className={"overflow-auto h-[25rem]"}>
					<div className={"flex flex-wrap gap-2"}>
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
