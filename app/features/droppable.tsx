import React, { PropsWithChildren } from "react";
import { UniqueIdentifier, useDroppable } from "@dnd-kit/core";

export function Droppable(props: PropsWithChildren<{ id: UniqueIdentifier }>) {
	const { isOver, setNodeRef } = useDroppable({
		id: props.id,
	});
	const style = {
		opacity: isOver ? 1 : 0.5,
	};

	return (
		<div ref={setNodeRef} style={style}>
			{props.children}
		</div>
	);
}
