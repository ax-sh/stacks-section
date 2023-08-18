import clsx from "clsx";
import React from "react";
import useIconStore from "@/store";
import { useDropIcon } from "@/components/search/hooks/use-drop-icon";

export function DropSection() {
	const sections = useIconStore((state) => state.sections);
	const { isActive, state, drop } = useDropIcon();

	return (
		<div
			ref={drop}
			className={clsx("h-40", "text-white p-4 text-center text-base", "grid place-content-center", {
				"bg-[#222]": state === "default",
				"bg-[#BDB76B]": state === "can_drop",
				"bg-[#00f]": state === "active",
			})}
			data-testid="dustbin"
		>
			{isActive ? "Release to drop" : "Drag an icon here"}
			<pre>{JSON.stringify(sections, null, 4)}</pre>
		</div>
	);
}
