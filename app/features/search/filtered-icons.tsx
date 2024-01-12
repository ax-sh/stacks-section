import React, { PropsWithChildren } from "react";
import { useFilteredMemoIconsList } from "@/components/search/hooks/use-filtered-memo-icons-list";
import { IconCard } from "@/components/search/icon-card";
import { Badge } from "@nextui-org/react";
import { StackIcon } from "@/assets/icons";

function DraggableIcon({ children }: PropsWithChildren) {
	return <div>{children}</div>;
}

export function FilteredIcons({ term }: { term: string }) {
	const filteredIcons = useFilteredMemoIconsList(term);
	return (
		<div className={"overflow-auto h-[25rem]"}>
			<div className={"flex flex-wrap gap-4"}>
				{filteredIcons.map((icon) => {
					const count = 0;
					return (
						<DraggableIcon>
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
