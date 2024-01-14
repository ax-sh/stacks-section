import { IconPayload } from "@/app/features/search/dnd-wrapper";
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
  const payload: IconPayload = {
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
        // Outputs `translate3d(x, y, 0)`
        transform: CSS.Translate.toString(transform),
      }}
      className={clsx(isDragging && " invisible")}
      {...listeners}
      {...attributes}
    >
      {children}
    </div>
  );
}
