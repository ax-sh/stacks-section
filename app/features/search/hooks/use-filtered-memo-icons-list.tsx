import { useMemo } from "react";
import * as icons from "simple-icons";
import { type SimpleIcon } from "simple-icons";
import useIconStore from "@/store/icon-store";

export function useFilteredMemoIconsList(term: string) {
  // const icons = useIconStore((state) => state.allIcons)
  return useMemo(() => {
    if (!term) return [];
    const predicate = (i: SimpleIcon) => i.title.toLowerCase().includes(term);
    const results = Object.values(icons).filter(predicate);

    return results;
  }, [term]);
}
