import { useDrag } from "react-dnd";
import { ItemTypes } from "@/app/constants";

type IconCardProps = {
	isDragging: boolean;
	text: string;
};
export default function IconCard({ isDragging, text }: IconCardProps) {
	const [{ opacity }, dragRef] = useDrag(
		() => ({
			type: ItemTypes.ICON_CARD,
			item: { text },
			collect: (monitor) => ({
				opacity: monitor.isDragging() ? 0.5 : 1,
			}),
		}),
		[]
	);
	return (
		<div ref={dragRef} style={{ opacity }}>
			{text}
		</div>
	);
}
