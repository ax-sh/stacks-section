import React, { type PropsWithChildren } from 'react';
import { type UniqueIdentifier, useDraggable } from '@dnd-kit/core';
import { CSS } from '@dnd-kit/utilities';

export function DraggableIcon({
  children,
  id,
  data
}: PropsWithChildren<{ id: UniqueIdentifier; data: any }>) {
  const { isDragging, attributes, listeners, setNodeRef, transform } = useDraggable({
    id,
    data
  });

  return (
    <div
      ref={setNodeRef}
      style={{
        // Outputs `translate3d(x, y, 0)`
        transform: CSS.Translate.toString(transform),
        visibility: isDragging ? 'hidden' : 'visible'
      }}
      {...listeners}
      {...attributes}
    >
      {children}
    </div>
  );
}
