import { useMemo } from "react";
import * as icons from "simple-icons";
import { type SimpleIcon } from "simple-icons";

export function useFilteredMemoIconsList(term: string) {
	return useMemo(() => {
		if (!term) return [];
		const predicate = (i: SimpleIcon) => i.title.toLowerCase().includes(term);
		const results = Object.values(icons).filter(predicate);

		return results;
	}, [term]);
}