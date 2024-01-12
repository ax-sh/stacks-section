import React, { type PropsWithChildren } from 'react';
import { Badge } from '@nextui-org/react';
import { type UniqueIdentifier, useDraggable } from '@dnd-kit/core';
import { CSS } from '@dnd-kit/utilities';
import type { SimpleIcon } from 'simple-icons';
import { StackIcon } from '@/components/icons';
import { useFilteredMemoIconsList } from '@/app/features/search/hooks/use-filtered-memo-icons-list';

function DraggableIcon({
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

function IconWithBadge({ content, children }: PropsWithChildren<{ content?: number }>) {
  return content ? (
    <Badge content={content} color='primary'>
      {children}
    </Badge>
  ) : (
    children
  );
}

export function StackIconCard({ icon }: { icon: SimpleIcon }) {
  return (
    <div
      className={'flex flex-col items-center justify-center bg-white/10 p-4 rounded'}
      style={{ fill: `#${icon.hex}` }}
    >
      <IconWithBadge content={3}>
        <StackIcon key={icon.slug} icon={icon} />
      </IconWithBadge>
      <label className={'text-xs'}>{icon.title}</label>
    </div>
  );
}

export function FilteredIcons({ term }: { term: string }) {
  const filteredIcons = useFilteredMemoIconsList(term);
  return (
    <div className={'overflow-auto h-80'}>
      <div className={'flex flex-wrap gap-4'}>
        {filteredIcons.map((icon) => (
            <DraggableIcon key={icon.slug} id={icon.slug} data={icon}>
              <StackIconCard icon={icon} />
            </DraggableIcon>
          ))}
      </div>
    </div>
  );
}
