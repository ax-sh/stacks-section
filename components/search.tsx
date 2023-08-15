"use client";
import { Input } from "@nextui-org/react";
import type { SimpleIcon } from "simple-icons";
import * as icons from "simple-icons";
// import { Image } from "@nextui-org/react";
import SVG from "react-inlinesvg";
import dynamic from "next/dynamic";
// const HTML5Backend: any = dynamic(
// 	() => import("react-dnd-html5-backend").then((html) => html.HTML5Backend as any),
// 	{ ssr: false }
// );
import { HTML5Backend } from "react-dnd-html5-backend";
import React, { type CSSProperties, useMemo, useState } from "react";
import { useDrag, useDrop } from "react-dnd";

const DndProvider = dynamic(async () => import("react-dnd").then((dnd) => dnd.DndProvider), {
	ssr: false,
});

export const SearchIcon = (props: any) => (
	<svg
		aria-hidden="true"
		fill="none"
		focusable="false"
		height="1em"
		role="presentation"
		viewBox="0 0 24 24"
		width="1em"
		{...props}
	>
		<path
			d="M11.5 21C16.7467 21 21 16.7467 21 11.5C21 6.25329 16.7467 2 11.5 2C6.25329 2 2 6.25329 2 11.5C2 16.7467 6.25329 21 11.5 21Z"
			stroke="currentColor"
			strokeLinecap="round"
			strokeLinejoin="round"
			strokeWidth="2"
		/>
		<path
			d="M22 22L20 20"
			stroke="currentColor"
			strokeLinecap="round"
			strokeLinejoin="round"
			strokeWidth="2"
		/>
	</svg>
);

function SearchInput({ setTerm, term }: { term: string; setTerm: (term: string) => void }) {
	return (
		<Input
			label="Search"
			isClearable
			radius="lg"
			classNames={{
				label: "text-black/50 dark:text-white/90",
				input: [
					"bg-transparent",
					"text-black/90 dark:text-white/90",
					"placeholder:text-default-700/50 dark:placeholder:text-white/60",
				],
				innerWrapper: "bg-transparent",
				inputWrapper: [
					"shadow-xl",
					"bg-default-200/50",
					"dark:bg-default/60",
					"backdrop-blur-xl",
					"backdrop-saturate-200",
					"hover:bg-default-200/70",
					"dark:hover:bg-default/70",
					"group-data-[focused=true]:bg-default-200/50",
					"dark:group-data-[focused=true]:bg-default/60",
					"!cursor-text",
				],
			}}
			placeholder="Type to search..."
			startContent={
				<SearchIcon className="text-black/50 dark:text-white/90 text-slate-400 pointer-events-none flex-shrink-0" />
			}
			onChange={(e) => { setTerm(e.target.value); }}
			value={term}
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
				alert(`You dropped ${item.name} into ${dropResult.name}!`);
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
			<SVG
				key={icon.slug}
				src={icon.svg}
				className={`bg-white/20 rounded-md h-20 w-20 fill-[#${icon.hex}]`}
				// preProcessor={(code) => {
				// 	const i = code.replace(/role=".*?"/g, `fill="#${icon.hex}"`);
				// 	// const i = code.replace(/role=".*?"/g, `fill="currentColor"`);
				// 	console.log(i, 777);
				// 	return code;
				// }}
				title={icon.title}
			/>
			<label>{icon.title}</label>
		</div>
	);
	// return <div className={"bg-white h-10 w-10"} dangerouslySetInnerHTML={{ __html: icon.svg }} />;
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
