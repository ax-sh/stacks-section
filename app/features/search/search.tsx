"use client";

import { IconDroppable, IconDroppablePlaceholder } from "@/app/features/droppable";
import { DndWrapper } from "@/app/features/search/dnd-wrapper";
import { FilteredIcons, StackIconCard } from "@/app/features/search/filtered-icons";
import { SearchInput } from "@/app/features/search/search-input";
import useIconStore from "@/store/icon-store";
import { DragOverlay } from "@dnd-kit/core";
import pc from "picocolors";
import React, { useState } from "react";
import type { SimpleIcon } from "simple-icons";

function IconDroppableWrapper({ icons }: Readonly<{ icons: SimpleIcon[] }>) {
  return (
    <IconDroppable id={"drop-2"} className={"bg-gray-950 p-4  relative rounded col-span-3"}>
      {icons.length > 0 ? (
        <div className={"flex flex-wrap gap-2"}>
          {icons.map((icon) => (
            <StackIconCard key={icon.slug} icon={icon} />
          ))}
        </div>
      ) : (
        <IconDroppablePlaceholder />
      )}
    </IconDroppable>
  );
}

export function Search() {
  const [term, setTerm] = useState("");
  const [draggedIcon, setDraggedIcon] = useState<SimpleIcon | undefined>();
  const getIcons = useIconStore((state) => state.getIcons);

  const icons = getIcons();
  // console.log(pc.green(`How are ${pc.italic(`you`)} doing?`));

  return (
    <div className={"flex flex-col gap-4"}>
      <SearchInput term={term} setTerm={setTerm} />

      <DndWrapper setDraggedIcon={setDraggedIcon}>
        <FilteredIcons term={term} />
        <DragOverlay>
          {/* note needed for fixing overflow hidden issue */}
          {!!draggedIcon && <StackIconCard key={draggedIcon.slug} icon={draggedIcon} />}
        </DragOverlay>
        <div className={"grid grid-cols-12 grid-rows-1 h-80 gap-4"}>
          <IconDroppableWrapper icons={icons} />
        </div>
      </DndWrapper>
    </div>
  );
}
