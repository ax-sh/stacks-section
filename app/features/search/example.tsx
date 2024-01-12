import React, { useState } from 'react';
import { DndContext, UniqueIdentifier } from '@dnd-kit/core';
import { Draggable } from '@/app/features/draggable';
import { Droppable } from '@/app/features/droppable';
import type { DragEndEvent } from '@dnd-kit/core/dist/types';

export function Example() {
  const [parent, setParent] = useState<UniqueIdentifier | undefined>(undefined);
  const draggable = <Draggable id='draggable'>Go ahead, drag me.</Draggable>;

  return (
    <DndContext onDragEnd={handleDragEnd}>
      {parent ? null : draggable}
      <Droppable id='droppable'>{parent === 'droppable' ? draggable : 'Drop here'}</Droppable>
    </DndContext>
  );

  function handleDragEnd({ over }: DragEndEvent) {
    setParent(over ? over.id : undefined);
  }
}
