"use client";
import type { SimpleIcon } from "simple-icons";
import * as icons from "simple-icons";
// import { Image } from "@nextui-org/react";
import SVG from "react-inlinesvg";
import dynamic from "next/dynamic";

import { HTML5Backend } from "react-dnd-html5-backend";
import React, { type CSSProperties, useMemo, useState } from "react";
import { useDrag, useDrop } from "react-dnd";
import { SearchInput } from "@/components/search-Input";

const DndProvider = dynamic(async () => import("react-dnd").then((dnd) => dnd.DndProvider), {
	ssr: false,
});

type DropResult = any;

function StackIcon({ icon }: { icon: SimpleIcon }) {
	return (
		<SVG
			src={icon.svg}
			className={`bg-white/20 rounded-md h-20 w-20 fill-[#${icon.hex}]`}
			// preProcessor={(code) => {
			// 	const i = code.replace(/role=".*?"/g, `fill="#${icon.hex}"`);
			// 	// const i = code.replace(/role=".*?"/g, `fill="currentColor"`);
			// 	return code;
			// }}
			title={icon.title}
		/>
	);
}

export default function IconCard({ icon }: { icon: SimpleIcon }) {
	const [{ isDragging }, drag] = useDrag(() => ({
		type: "ItemTypes.BOX",
		item: { name },
		end(item, monitor) {
			const dropResult = monitor.getDropResult<DropResult>();
			if (item && dropResult) {
				console.log(`You dropped ${item.name} into ${dropResult.name}!`);
			}
		},
		collect: (monitor) => ({
			isDragging: monitor.isDragging(),
			handlerId: monitor.getHandlerId(),
		}),
	}));

	const opacity = isDragging ? 0.4 : 1;
	return (
		<div ref={drag} style={{ fill: "#" + icon.hex, opacity }}>
			<StackIcon key={icon.slug} icon={icon} />
			<label>{icon.title}</label>
		</div>
	);
}

const style: CSSProperties = {
	height: "12rem",
	width: "12rem",
	marginRight: "1.5rem",
	marginBottom: "1.5rem",
	color: "white",
	padding: "1rem",
	textAlign: "center",
	fontSize: "1rem",
	lineHeight: "normal",
	float: "left",
};

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
		<div ref={drop} style={{ ...style, backgroundColor }} data-testid="dustbin">
			{isActive ? "Release to drop" : "Drag a box here"}
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
