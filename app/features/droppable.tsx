import React, { type PropsWithChildren } from 'react';
import { type UniqueIdentifier, useDroppable } from '@dnd-kit/core';

export function Droppable(props: PropsWithChildren<{ id: UniqueIdentifier }>) {
  const { isOver, setNodeRef } = useDroppable({
    id: props.id
  });
  const style = {
    opacity: isOver ? 1 : 0.5
  };

  return (
    <div ref={setNodeRef} style={style} className={isOver ? 'bg-red-400' : ''}>
      {props.children}
    </div>
  );
}
