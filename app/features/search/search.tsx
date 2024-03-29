"use client";

import { IconDroppableWrapper } from "@/app/features/droppable";
import { DndWrapper } from "@/app/features/search/dnd-wrapper";
import { FilteredIcons, StackIconCard } from "@/app/features/search/filtered-icons";
import { SearchInput } from "@/app/features/search/search-input";
import useIconStore from "@/store/icon-store";
import { DragOverlay } from "@dnd-kit/core";

import clsx from "clsx";
import React, { ElementRef, useRef, useState } from "react";
import type { SimpleIcon } from "simple-icons";
import { useShallow } from "zustand/react/shallow";

export function Search() {
  const [term, setTerm] = useState("");
  const [draggedIcon, setDraggedIcon] = useState<SimpleIcon>();
  const getIcons = useIconStore(useShallow((state) => state.getIcons));

  const icons = getIcons();
  const ref = useRef<ElementRef<"div">>(null);
  const div = ref.current;
  console.log(div?.cloneNode(true), div?.getBoundingClientRect());
  return (
    <div className={"flex flex-col gap-4"}>
      <SearchInput term={term} setTerm={setTerm} />

      <DndWrapper setDraggedIcon={setDraggedIcon}>
        <FilteredIcons term={term} />
        <DragOverlay
          dropAnimation={{
            duration: 500,
            easing: "cubic-bezier(0.18, 0.67, 0.6, 1.22)",
          }}
        >
          {/* NOTE needed for fixing overflow hidden issue */}
          {!!draggedIcon && <StackIconCard key={draggedIcon.slug} icon={draggedIcon} />}
        </DragOverlay>
        <section className={"grid grid-cols-12 grid-rows-1 h-80 gap-4"}>
          <div className={"relative col-span-10 row-span-1"} ref={ref}>
            <IconDroppableWrapper
              id={"large-droppable"}
              icons={icons}
              className={"absolute inset-0"}
            />
          </div>

          <div className={clsx("relative col-span-2 row-span-1", "flex flex-col gap-2 [&>*]:h-20")}>
            <IconDroppableWrapper id={"droppable-1"} icons={icons} className={"relative"} />
            <IconDroppableWrapper id={"droppable-2"} icons={icons} className={"relative"} />
          </div>
        </section>
      </DndWrapper>
    </div>
  );
}
