import { Badge } from "@nextui-org/react";
import React, { type PropsWithChildren } from "react";

export function IconWithBadge({
  content,
  children,
}: PropsWithChildren<{ content?: number }>) {
  return Number(content) > 0 ? (
    <Badge content={content} color="primary">
      {children}
    </Badge>
  ) : (
    children
  );
}
