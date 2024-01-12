import React, { PropsWithChildren } from 'react';
import { Badge } from '@nextui-org/react';

export function IconWithBadge({ content, children }: PropsWithChildren<{ content?: number }>) {
  return Number(content) > 0 ? (
    <Badge content={content} color='primary'>
      {children}
    </Badge>
  ) : (
    children
  );
}
