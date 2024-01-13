"use client";

import { IconDroppable, IconDroppablePlaceholder } from "@/app/features/droppable";
import { DndWrapper } from "@/app/features/search/dnd-wrapper";
import { FilteredIcons, StackIconCard } from "@/app/features/search/filtered-icons";
import { SearchInput } from "@/app/features/search/search-input";
import useIconStore from "@/store/icon-store";
import { DragOverlay } from "@dnd-kit/core";

import React, { useState } from "react";
import type { SimpleIcon } from "simple-icons";

function IconDroppableWrapper({ icons }: Readonly<{ icons: SimpleIcon[] }>) {
  return (
    <div className={"grid grid-cols-12 grid-rows-1 h-80 gap-4"}>
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
    </div>
  );
}

export function Search() {
  const [term, setTerm] = useState("");
  const [draggedIcon, setDraggedIcon] = useState<SimpleIcon | undefined>();
  const getIcons = useIconStore((state) => state.getIcons);

  const icons = getIcons();

  return (
    <div className={"flex flex-col gap-4"}>
      <SearchInput term={term} setTerm={setTerm} />

      <DndWrapper setDraggedIcon={setDraggedIcon}>
        <FilteredIcons term={term} />
        <DragOverlay>
          {/* note needed for fixing overflow hidden issue */}
          {!!draggedIcon && <StackIconCard key={draggedIcon.slug} icon={draggedIcon} />}
        </DragOverlay>

        <IconDroppableWrapper icons={icons} />
      </DndWrapper>
    </div>
  );
}
