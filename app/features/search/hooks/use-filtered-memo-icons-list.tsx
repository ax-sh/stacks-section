import { useMemo } from "react";
import * as icons from "simple-icons";
import { type SimpleIcon } from "simple-icons";
import useIconStore from "@/store/icon-store";
import logger from "@/app/features/logger";

const child = logger.child({ type: "useFilteredMemoIconsList" });
export function useFilteredMemoIconsList(term: string) {

  return useMemo(() => {
    if (!term) return [];
    const predicate = (i: SimpleIcon) => i.title.toLowerCase().includes(term);

    child.info("start")
    const results =useIconStore.getState().allIcons.filter(predicate);
    child.info("end")

    return results;
  }, [term]);
}
