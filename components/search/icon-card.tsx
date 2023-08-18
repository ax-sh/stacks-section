import { SimpleIcon } from "simple-icons";
import { StackIcon } from "@/assets/icons";
import React from "react";
import { useDragIcon } from "@/components/search/use-drag-icon";

export type DropResult = any;

export function IconCard({ icon }: { icon: SimpleIcon }) {
	const { isDragging, drag } = useDragIcon(icon, (slug: string) => {
		console.log(slug, 34);
	});

	const opacity = isDragging ? 0.4 : 1;
	return (
		<div
			ref={drag}
			className={"flex flex-col items-center justify-center"}
			style={{ fill: `#${icon.hex}`, opacity }}
		>
			<StackIcon key={icon.slug} icon={icon} />
			<label className={"text-xs"}>{icon.title}</label>
		</div>
	);
}
