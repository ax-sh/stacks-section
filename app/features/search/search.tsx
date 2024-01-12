'use client';

import React, { type PropsWithChildren, useState } from 'react';
import { DndContext, DragOverlay, type UniqueIdentifier, useDroppable } from '@dnd-kit/core';
import type { DragEndEvent } from '@dnd-kit/core/dist/types';
import { SearchInput } from '@/app/features/search/search-input';
import { FilteredIcons, StackIconCard } from '@/app/features/search/filtered-icons';
import { TbDragDrop2 } from 'react-icons/tb';

import logger from '@/app/features/logger';
import clsx from 'clsx';

const child = logger.child({ type: 'search' });
child.info('search parent');

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

function DndWrapper({ children, setDraggedIcon }: PropsWithChildren<{ setDraggedIcon: any }>) {
  function handleDragEnd({ over, active, ...rest }: DragEndEvent) {
    setDraggedIcon(null);
    console.log('end over', over);
    console.log('end active', active);
    console.log('end rest', rest);
  }
  function handleDragStart({ over, active, ...rest }: DragEndEvent) {
    setDraggedIcon(active.data.current);
    console.log('start over', over);
    console.log('start active', active);
    console.log('start rest', rest);
  }
  return (
    <DndContext onDragEnd={handleDragEnd} onDragStart={handleDragStart}>
      {children}
    </DndContext>
  );
}

export function Search() {
  const [term, setTerm] = useState('');
  const [draggedIcon, setDraggedIcon] = useState<any | null>(null);

  return (
    <div className={'flex flex-col gap-4'}>
      <SearchInput term={term} setTerm={setTerm} />
      <DndWrapper setDraggedIcon={setDraggedIcon}>
        <FilteredIcons term={term} />
        <DragOverlay>
          {/*note needed for fixing overflow hidden issue*/}
          {!!draggedIcon && <StackIconCard key={draggedIcon.slug} icon={draggedIcon} />}
        </DragOverlay>
        <IconDroppable id={'drop'} className={'bg-gray-950 p-4 h-40 relative'}>
          <div className={'absolute inset-0 grid place-content-center'}>
            <TbDragDrop2 size={64} />
          </div>
        </IconDroppable>
      </DndWrapper>
    </div>
  );
}
