import React, { PropsWithChildren } from "react";
import { useFilteredMemoIconsList } from "@/components/search/hooks/use-filtered-memo-icons-list";

import { Badge } from "@nextui-org/react";
import { StackIcon } from "@/assets/icons";
import { type UniqueIdentifier, useDraggable } from "@dnd-kit/core";
import { CSS } from "@dnd-kit/utilities";

function DraggableIcon({ children, id }: PropsWithChildren<{ id: UniqueIdentifier }>) {
	const { attributes, listeners, setNodeRef, transform } = useDraggable({
		id,
	});
	const style = {
		// Outputs `translate3d(x, y, 0)`
		transform: CSS.Translate.toString(transform),
	};

	return (
		<div ref={setNodeRef} style={style} {...listeners} {...attributes}>
			{children}
		</div>
	);
}

export function FilteredIcons({ term }: { term: string }) {
	const filteredIcons = useFilteredMemoIconsList(term);
	return (
		<div className={"overflow-auto h-80"}>
			<div className={"flex flex-wrap gap-4"}>
				{filteredIcons.map((icon) => {
					const count = 0;
					return (
						<DraggableIcon key={icon.slug} id={icon.slug}>
							<div
								className={"flex flex-col items-center justify-center bg-white/10 p-4 rounded"}
								style={{ fill: `#${icon.hex}` }}
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
						</DraggableIcon>
					);
					// return <IconCard key={icon.slug} icon={icon} />;
				})}
			</div>
		</div>
	);
}
