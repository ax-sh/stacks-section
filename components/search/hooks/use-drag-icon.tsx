import { SimpleIcon } from "simple-icons";
import { useDrag } from "react-dnd";
import { DropResult } from "@/components/search/icon-card";

export function useDragIcon(icon: SimpleIcon, callback: CallableFunction) {
	const [{ isDragging, opacity }, drag] = useDrag(() => ({
		type: "ItemTypes.BOX",
		item: icon,
		end(item, monitor) {
			const dropResult = monitor.getDropResult<DropResult>();
			if (item && dropResult) {
				const { slug } = item;
				// console.log(`You dropped ${slug} into ${dropResult.name}!`);
				callback(slug);
			}
		},
		collect: (monitor) => ({
			isDragging: monitor.isDragging(),
			handlerId: monitor.getHandlerId(),
			opacity: monitor.isDragging() ? 0.5 : 1,
		}),
	}));
	return { isDragging, drag, opacity };
}
