import logger from "@/app/logger";
import useIconStore from "@/store/icon-store";
import { DataRef, DndContext } from "@dnd-kit/core";
import type { DragEndEvent } from "@dnd-kit/core/dist/types";
import React, { Dispatch, PropsWithChildren, SetStateAction } from "react";
import type { SimpleIcon } from "simple-icons";

const log = logger.child({ type: "DndWrapper" });

export type IconPayload = { icon: SimpleIcon; type: "icon" };

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
    const overData = over?.data;
    const icon = data?.icon;

    log.info({ over });
    // if (over.accepts.includes(data.type)) {
    //   // do stuff
    // }
    if(!over)return
    addIconToSection(icon?.slug);
    setDraggedIcon(undefined);
  }

  function handleDragStart({ over, active, ...rest }: DragEndEvent) {
    const data = definePayload(active.data);
    log.info(over);
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
