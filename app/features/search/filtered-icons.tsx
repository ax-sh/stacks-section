import { DraggableIcon } from "@/app/features/draggable";
import { useFilteredMemoIconsList } from "@/app/features/search/hooks/use-filtered-memo-icons-list";
import { IconWithBadge } from "@/app/ui/icon-with-badge";
import { StackIcon } from "@/components/icons";
import useIconStore from "@/store";
import React from "react";
import type { SimpleIcon } from "simple-icons";

export function StackIconCard({ icon }: { icon: SimpleIcon }) {
  const getSlugCount = useIconStore((state) => state.getSlugCount);

  return (
    <div
      className={
        "flex flex-col items-center justify-center bg-white/10 p-4 gap-2 rounded"
      }
      style={{ fill: `#${icon.hex}` }}
    >
      <IconWithBadge content={getSlugCount(icon.slug)}>
        <StackIcon key={icon.slug} icon={icon} />
      </IconWithBadge>
      <label className={"text-xs"}>{icon.title}</label>
    </div>
  );
}

export function FilteredIcons({ term }: { term: string }) {
  const filteredIcons = useFilteredMemoIconsList(term);
  return (
    <div className={"overflow-auto h-80"}>
      <div className={"flex flex-wrap gap-4"}>
        {filteredIcons.map((icon) => (
          <DraggableIcon key={icon.slug} id={icon.slug} data={icon}>
            <StackIconCard icon={icon} />
          </DraggableIcon>
        ))}
      </div>
    </div>
  );
}
