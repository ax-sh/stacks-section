import { SimpleIcon } from "simple-icons";
import { StackIcon } from "@/assets/icons";
import React from "react";
import { useDragIcon } from "@/components/search/use-drag-icon";
import useIconStore from "@/store";
import { Badge } from "@nextui-org/react";

export type DropResult = any;

export function IconCard({ icon }: { icon: SimpleIcon }) {
	const addIconToSection = useIconStore((state) => state.addIconToSection);
	const sections = useIconStore((state) => state.sections);

	const { drag, opacity } = useDragIcon(icon, (slug: string) => {
		addIconToSection(slug);
	});
	const count = icon.slug in sections ? sections[icon.slug] : false;
	console.log(count);

	return (
		<div
			ref={drag}
			className={"flex flex-col items-center justify-center"}
			style={{ fill: `#${icon.hex}`, opacity }}
		>
			{count ? (
				<Badge content={count} color="primary">
					<StackIcon key={icon.slug} icon={icon} />
				</Badge>
			) : (
				<StackIcon key={icon.slug} icon={icon} />
			)}
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
