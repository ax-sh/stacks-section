import logger from "@/app/features/logger";
import useIconStore from "@/store/icon-store";
import { useMemo } from "react";
import { type SimpleIcon } from "simple-icons";

const child = logger.child({ type: "useFilteredMemoIconsList" });
export function useFilteredMemoIconsList(term: string) {
  return useMemo(() => {
    if (!term) return [];
    const predicate = (i: SimpleIcon) => i.title.toLowerCase().includes(term);
    const results = useIconStore.getState().allIcons.filter(predicate);

    return results;
  }, [term]);
}
