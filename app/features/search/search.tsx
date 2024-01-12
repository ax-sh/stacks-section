'use client';

import React, {
  type Dispatch,
  type PropsWithChildren,
  type SetStateAction,
  useMemo,
  useState
} from 'react';
import { DndContext, DragOverlay } from '@dnd-kit/core';
import type { DragEndEvent } from '@dnd-kit/core/dist/types';
import type { SimpleIcon } from 'simple-icons';
import { SearchInput } from '@/app/features/search/search-input';
import { FilteredIcons, StackIconCard } from '@/app/features/search/filtered-icons';
import logger from '@/app/features/logger';
import useIconStore from '@/store';
import { IconDroppable, IconDroppablePlaceholder } from '@/app/features/droppable';

const child = logger.child({ type: 'search' });
child.info('search parent');

function DndWrapper({
  children,
  setDraggedIcon
}: PropsWithChildren<{ setDraggedIcon: Dispatch<SetStateAction<SimpleIcon | undefined>> }>) {
  const addIconToSection = useIconStore((state) => state.addIconToSection);
  function handleDragEnd({ over, active, ...rest }: DragEndEvent) {
    setDraggedIcon(undefined);
    addIconToSection(active.data.current?.slug);
  }

  function handleDragStart({ over, active, ...rest }: DragEndEvent) {
    setDraggedIcon(active.data.current as SimpleIcon);
  }

  return (
    <DndContext onDragEnd={handleDragEnd} onDragStart={handleDragStart}>
      {children}
    </DndContext>
  );
}

export function Search() {
  const [term, setTerm] = useState('');
  const [draggedIcon, setDraggedIcon] = useState<SimpleIcon | undefined>();
  const getIcons = useIconStore((state) => state.getIcons);

  const icons = getIcons();

  return (
    <div className={'flex flex-col gap-4'}>
      <SearchInput term={term} setTerm={setTerm} />
      <DndWrapper setDraggedIcon={setDraggedIcon}>
        <FilteredIcons term={term} />
        <DragOverlay>
          {/* note needed for fixing overflow hidden issue */}
          {!!draggedIcon && <StackIconCard key={draggedIcon.slug} icon={draggedIcon} />}
        </DragOverlay>
        <IconDroppable id={'drop'} className={'bg-gray-950 p-4 h-40 relative'}>
          {icons.length === 0 ? (
            <IconDroppablePlaceholder />
          ) : (
            <div className={'flex flex-wrap gap-2 '}>
              {icons.map((icon) => (
                <StackIconCard key={icon.slug} icon={icon} />
              ))}
            </div>
          )}
        </IconDroppable>
      </DndWrapper>
    </div>
  );
}
