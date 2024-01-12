'use client';

import React, { type PropsWithChildren, useMemo, useState } from 'react';
import { DndContext, DragOverlay } from '@dnd-kit/core';
import type { DragEndEvent } from '@dnd-kit/core/dist/types';
import { SearchInput } from '@/app/features/search/search-input';
import { FilteredIcons, StackIconCard } from '@/app/features/search/filtered-icons';

import logger from '@/app/features/logger';
import useIconStore from '@/store';
import * as simpleIcons from 'simple-icons';
import { IconDroppable, IconDroppablePlaceholder } from '@/app/features/droppable';

const child = logger.child({ type: 'search' });
child.info('search parent');

function DndWrapper({ children, setDraggedIcon }: PropsWithChildren<{ setDraggedIcon: any }>) {
  const addIconToSection = useIconStore((state) => state.addIconToSection);
  function handleDragEnd({ over, active, ...rest }: DragEndEvent) {
    setDraggedIcon(null);
    console.log('end over', over);
    console.log('end active', active);
    console.log('end rest', rest);
    addIconToSection('$44');
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
  const sections = useIconStore((state) => state.sections);

  const icons = useMemo(() => {
    if (!sections) return [];
    return Object.keys(sections).map((slug) =>
      Object.values(simpleIcons).find((i) => i.slug === slug)
    );
  }, [sections]);
  console.log(icons, sections, 77);

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
          <IconDroppablePlaceholder />
        </IconDroppable>
      </DndWrapper>
    </div>
  );
}
