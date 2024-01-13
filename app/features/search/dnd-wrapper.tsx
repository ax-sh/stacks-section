import React, { Dispatch, PropsWithChildren, SetStateAction } from "react";
import type { SimpleIcon } from "simple-icons";
import useIconStore from "@/store/icon-store";
import type { DragEndEvent } from "@dnd-kit/core/dist/types";
import { DndContext } from "@dnd-kit/core";

export function DndWrapper({
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
