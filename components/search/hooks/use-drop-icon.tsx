import { useDrop } from "react-dnd";
import { useMemo } from "react";

export function useDropIcon() {
	const [{ canDrop, isOver }, drop] = useDrop(() => ({
		accept: "ItemTypes.BOX",
		drop: () => ({ name: "Dustbin" }),
		collect: (monitor) => ({
			isOver: monitor.isOver(),
			canDrop: monitor.canDrop(),
		}),
	}));
	const isActive = canDrop && isOver;
	const state = useMemo(() => {
		if (isActive) {
			return "active";
		} else if (canDrop) {
			return "can_drop";
		} else {
			return "default";
		}
	}, [isActive, canDrop]);
	return { canDrop, isActive, drop, state };
}