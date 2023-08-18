import { SimpleIcon } from "simple-icons";
import { useDrag } from "react-dnd";
import { StackIcon } from "@/assets/icons";
import React from "react";

export type DropResult = any;
export function IconCard({ icon }: { icon: SimpleIcon }) {
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
