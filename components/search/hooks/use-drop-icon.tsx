import { useDrop } from "react-dnd";
import { useMemo } from "react";
// TODO use https://docs.dndkit.com/
type DropStates = "ACTIVE" | "CAN_DROP" | "DEFAULT";
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
	const state: DropStates = useMemo(() => {
		if (isActive) {
			return "ACTIVE";
		}

 if (canDrop) {
			return "CAN_DROP";
		}
 
			return "DEFAULT";
		
	}, [isActive, canDrop]);
	return { canDrop, isActive, drop, state };
}
