import logger from "@/app/logger";
import { DraggableIconData, DroppableIconData } from "@/app/types";
import useIconStore from "@/store/icon-store";
import { DataRef, DndContext } from "@dnd-kit/core";
import type { DragEndEvent } from "@dnd-kit/core/dist/types";
import React, { Dispatch, PropsWithChildren, SetStateAction } from "react";
import type { SimpleIcon } from "simple-icons";

const log = logger.child({ type: "DndWrapper" });

function defineDraggablePayload(data: DataRef) {
  return data.current as DraggableIconData;
}
function defineDroppablePayload(data: DataRef | undefined) {
  return data?.current as DroppableIconData;
}

export function DndWrapper({
  children,
  setDraggedIcon,
}: PropsWithChildren<{
  setDraggedIcon: Dispatch<SetStateAction<SimpleIcon | undefined>>;
}>) {
  const addIconToSection = useIconStore((state) => state.addIconToSection);
  function handleDragEnd({ over, active, ...rest }: DragEndEvent) {
    const data = defineDraggablePayload(active.data);
    const overData = defineDroppablePayload(over?.data);
    const icon = data?.icon;
    console.log({ type:'end',over, overData, data });
    // if (overData.accepts.includes(data.type)) {
    //   // do stuff
    // }
    if (!overData) return;
    addIconToSection(icon.slug);
    setDraggedIcon(undefined);
  }

  function handleDragStart({ over, active, ...rest }: DragEndEvent) {
    const data = defineDraggablePayload(active.data);
    const overData = defineDroppablePayload(over?.data);
    console.log({
      type:'start',
      over,
      overData,
      data,
      rest,
    });
    const icon = data?.icon;
    setDraggedIcon(icon);
  }

  return (
    <DndContext
      onDragEnd={handleDragEnd}
      onDragStart={handleDragStart}
      // onDragMove={(e) => {
      //   log.info({ e });
      // }}
    >
      {children}
    </DndContext>
  );
}
