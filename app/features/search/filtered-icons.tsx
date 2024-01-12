import React from "react";
import { useFilteredMemoIconsList } from "@/components/search/hooks/use-filtered-memo-icons-list";
import { IconCard } from "@/components/search/icon-card";
import { Badge } from "@nextui-org/react";
import { StackIcon } from "@/assets/icons";

export function FilteredIcons({ term }: { term: string }) {
	const filteredIcons = useFilteredMemoIconsList(term);
	return (
		<div className={"overflow-auto h-[25rem]"}>
			<div className={"py-5 flex flex-wrap gap-2"}>
				{filteredIcons.map((icon) => {
					const count = 0;
					return (
						<div
							className={"flex flex-col items-center justify-center"}
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
					);
					// return <IconCard key={icon.slug} icon={icon} />;
				})}
			</div>
		</div>
	);
}
