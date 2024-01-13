"use client";

import { IconDroppable, IconDroppablePlaceholder } from "@/app/features/droppable";

import { FilteredIcons, StackIconCard } from "@/app/features/search/filtered-icons";
import { SearchInput } from "@/app/features/search/search-input";
import useIconStore from "@/store/icon-store";
import { DndContext, DragOverlay } from "@dnd-kit/core";
import type { DragEndEvent } from "@dnd-kit/core/dist/types";
import React, { type Dispatch, type PropsWithChildren, type SetStateAction, useState } from "react";
import type { SimpleIcon } from "simple-icons";

function DndWrapper({
  children,
  setDraggedIcon,
}: PropsWithChildren<{
  setDraggedIcon: Dispatch<SetStateAction<SimpleIcon | undefined>>;
}>) {
  const addIconToSection = useIconStore((state) => state.addIconToSection);
  function handleDragEnd({ over, active, ...rest }: DragEndEvent) {
    setDraggedIcon(undefined);
    addIconToSection(active.data.current?.slug as string);
  }

  function handleDragStart({ over, active, ...rest }: DragEndEvent) {
    setDraggedIcon(active.data.current as SimpleIcon);
  }

  return (
    <DndContext onDragEnd={handleDragEnd} onDragStart={handleDragStart}>
      {children}
    </DndContext>
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
        <div className={"grid grid-cols-12 grid-rows-1 h-80 gap-4"}>
          <IconDroppable id={"drop"} className={"bg-gray-950 p-4 relative rounded col-span-9"}>
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

          <IconDroppable id={"drop"} className={"bg-gray-950 p-4  relative rounded col-span-3"}>
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
      </DndWrapper>
    </div>
  );
}
