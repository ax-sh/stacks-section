import { DraggableIconData } from "@/app/types";
import { type UniqueIdentifier, useDraggable } from "@dnd-kit/core";
import { CSS } from "@dnd-kit/utilities";
import clsx from "clsx";
import React, { type PropsWithChildren } from "react";
import { SimpleIcon } from "simple-icons";

export function DraggableIcon({
  children,
  id,
  data,
}: PropsWithChildren<{ id: UniqueIdentifier; data: SimpleIcon }>) {
  const payload: DraggableIconData = {
    type: "icon",
    icon: data,
  };
  const { isDragging, attributes, listeners, setNodeRef, transform } = useDraggable({
    id,
    data: payload,
  });

  return (
    <div
      ref={setNodeRef}
      style={{
        transform: CSS.Translate.toString(transform), // Outputs `translate3d(x, y, 0)`
      }}
      className={clsx(isDragging && " invisible")}
      {...listeners}
      {...attributes}
    >
      {children}
    </div>
  );
}
