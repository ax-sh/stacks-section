import { IconDroppable } from "@/app/features/droppable";
import type { SimpleIcon } from "simple-icons";

export type Id = string | number;

export type Group = {
  id: Id;
  title: string;
};

export type Icon = {
  id: Id;
  groupId: Id;
  content: string;
};

export type DraggableIconData = { icon: SimpleIcon; type: "icon" };
export type DroppableIconData = { accepts: ["icon"] };
