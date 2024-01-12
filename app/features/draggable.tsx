import React, { PropsWithChildren } from "react";
import { useDraggable } from "@dnd-kit/core";
import { CSS } from "@dnd-kit/utilities";
import { UniqueIdentifier } from "@dnd-kit/core";

export function Draggable(props: PropsWithChildren<{ id: UniqueIdentifier }>) {
	const { attributes, listeners, setNodeRef, transform } = useDraggable({
		id: props.id,
	});
	const style = {
		// Outputs `translate3d(x, y, 0)`
		transform: CSS.Translate.toString(transform),
	};

	return (
		<button ref={setNodeRef} style={style} {...listeners} {...attributes}>
			{props.children}
		</button>
	);
}
