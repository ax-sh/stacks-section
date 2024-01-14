import useIconStore from "@/store/icon-store";
import { DataRef, DndContext } from "@dnd-kit/core";
import type { DragEndEvent } from "@dnd-kit/core/dist/types";
import React, { Dispatch, PropsWithChildren, SetStateAction } from "react";
import type { SimpleIcon } from "simple-icons";

type IconPayload = { icon: SimpleIcon; type: string[] };

function definePayload(data: DataRef) {
  return data.current as IconPayload;
}

export function DndWrapper({
  children,
  setDraggedIcon,
}: PropsWithChildren<{
  setDraggedIcon: Dispatch<SetStateAction<SimpleIcon | undefined>>;
}>) {
  const addIconToSection = useIconStore((state) => state.addIconToSection);
  function handleDragEnd({ over, active, ...rest }: DragEndEvent) {
    const data = definePayload(active.data);
    console.log(data, "<<");
    const icon = data?.icon;
    setDraggedIcon(undefined);
    addIconToSection(icon?.slug);
  }

  function handleDragStart({ over, active, ...rest }: DragEndEvent) {
    const data = definePayload(active.data);
    console.log(data, "<<");
    const icon = data?.icon;
    setDraggedIcon(icon);
  }

  return (
    <DndContext onDragEnd={handleDragEnd} onDragStart={handleDragStart}>
      {children}
    </DndContext>
  );
}
