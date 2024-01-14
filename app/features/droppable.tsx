import { StackIconCard } from "@/app/features/search/filtered-icons";
import { DroppableIconData } from "@/app/types";
import { type UniqueIdentifier, useDroppable } from "@dnd-kit/core";
import clsx from "clsx";
import React, { type PropsWithChildren } from "react";
import { TbDragDrop2 } from "react-icons/tb";
import type { SimpleIcon } from "simple-icons";

export function IconDroppable(
  props: PropsWithChildren<{ id: UniqueIdentifier; className: string }>,
) {
  const payload: DroppableIconData = {
    accepts: ["icon"],
  };
  const { isOver, setNodeRef } = useDroppable({
    id: props.id,
    data: payload,
  });

  return (
    <section
      ref={setNodeRef}
      style={{
        opacity: isOver ? 1 : 0.5,
      }}
      className={clsx(props.className, isOver && "bg-red-400")}
    >
      {props.children}
    </section>
  );
}

export function IconDroppablePlaceholder() {
  return (
    <div className={"absolute inset-0 grid place-content-center"}>
      <TbDragDrop2 size={64} />
    </div>
  );
}

type IconDroppableWrapperProps = Readonly<{
  icons: SimpleIcon[];
  className?: string;
  id: UniqueIdentifier;
}>;

export function IconDroppableWrapper({ icons, className, id }: IconDroppableWrapperProps) {
  return (
    <IconDroppable
      id={id}
      className={clsx(
        "bg-gray-700 p-2 rounded overflow-auto",
        "before:content-['Drop_Here'] before:block before:pb-2 before:text-red-500 ",
        className,
      )}
    >
      {icons.length > 0 ? (
        <div className={"flex flex-wrap gap-2"}>
          {icons.map((icon) => (
            <StackIconCard key={icon.slug} icon={icon} />
          ))}
        </div>
      ) : (
        <IconDroppablePlaceholder />
      )}
    </IconDroppable>
  );
}
