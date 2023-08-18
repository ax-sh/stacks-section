import { SimpleIcon } from "simple-icons";
import { StackIcon } from "@/assets/icons";
import React from "react";
import { useDragIcon } from "@/components/search/use-drag-icon";

export type DropResult = any;

export function IconCard({ icon }: { icon: SimpleIcon }) {
	const { isDragging, drag, opacity } = useDragIcon(icon, (slug: string) => {
		console.log(slug, 34);
	});

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

//
// import { useDrag } from "react-dnd";
// import { ItemTypes } from "@/app/constants";
//
// type IconCardProps = {
// 	isDragging: boolean;
// 	text: string;
// };
// export default function IconCard({ isDragging, text }: IconCardProps) {
// 	const [{ opacity }, dragRef] = useDrag(
// 		() => ({
// 			type: ItemTypes.ICON_CARD,
// 			item: { text },
// 			collect: (monitor) => ({
// 				opacity: monitor.isDragging() ? 0.5 : 1,
// 			}),
// 		}),
// 		[]
// 	);
// 	return (
// 		<div ref={dragRef} style={{ opacity }}>
// 			{text}
// 		</div>
// 	);
// }
