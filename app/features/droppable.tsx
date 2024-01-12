import React, { type PropsWithChildren } from 'react';
import { type UniqueIdentifier, useDroppable } from '@dnd-kit/core';
import clsx from 'clsx';
import { TbDragDrop2 } from 'react-icons/tb';

export function IconDroppable(
  props: PropsWithChildren<{ id: UniqueIdentifier; className: string }>
) {
  const { isOver, setNodeRef } = useDroppable({
    id: props.id
  });
  const style = {
    opacity: isOver ? 1 : 0.5
  };

  return (
    <section
      ref={setNodeRef}
      style={style}
      className={clsx(props.className, isOver && 'bg-red-400')}
    >
      {props.children}
    </section>
  );
}

export function IconDroppablePlaceholder() {
  return (
    <div className={'absolute inset-0 grid place-content-center'}>
      <TbDragDrop2 size={64} />
    </div>
  );
}
