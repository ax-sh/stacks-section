import clsx from "clsx";
import React, { useMemo } from "react";
import * as simpleIcons from "simple-icons";
import useIconStore from "@/store";
import { useDropIcon } from "@/components/search/hooks/use-drop-icon";
import { IconCard } from "@/components/search/icon-card";

export function DropSection() {
	const sections = useIconStore((state) => state.sections);
	const { isActive, state, drop } = useDropIcon();
	const icons = useMemo(() => {
		if (!sections) return [];
		return Object.keys(sections).map((slug) =>
			Object.values(simpleIcons).find((i) => i.slug === slug)
		);
	}, [sections]);
	return (
		<div
			ref={drop}
			className={clsx("h-40", "text-white p-4 text-center text-base", "grid place-content-center", {
				"bg-[#222]": state === "DEFAULT",
				"bg-[#BDB76B]": state === "CAN_DROP",
				"bg-[#00f]": state === "ACTIVE",
			})}
			data-testid="dustbin"
		>
			{isActive ? "Release to drop" : "Drag an icon here"}
			<div className={"flex gap-2 flex-wrap"}>
				{icons.map((icon) => (
					<IconCard key={icon.slug} icon={icon} />
				))}
			</div>
		</div>
	);
}
