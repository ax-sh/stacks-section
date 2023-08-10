"use client";
import { Input } from "@nextui-org/react";
import type { SimpleIcon } from "simple-icons";
import * as icons from "simple-icons";
import { Image } from "@nextui-org/react";

import React from "react";
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

function SearchInput() {
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
			// startContent={
			// 	<SearchIcon className="text-black/50 dark:text-white/90 text-slate-400 pointer-events-none flex-shrink-0" />
			// }
		/>
	);
}

export default function IconCard({ icon }: { icon: SimpleIcon }) {
	return <div className={"bg-white h-10 w-10"} dangerouslySetInnerHTML={{ __html: icon.svg }} />;
}

export function Search() {
	console.log(icons.fa);
	return (
		<div>
			<SearchInput />
			show dropdown
			<IconCard icon={icons.siAtom} />
		</div>
	);
}
