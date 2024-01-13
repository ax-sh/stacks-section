import logger from "@/app/features/logger";
import * as simpleIcons from "simple-icons";
import type { SimpleIcon } from "simple-icons";
import { create } from "zustand";

type IconState = Required<{
  sections: Record<string, number>;
  addIconToSection: (slug: string) => void;
  getIcons: () => SimpleIcon[];
  getSlugCount: (slug: string) => number;
  allIcons: SimpleIcon[];
  filterIconsBySlug(slug: string): SimpleIcon[];
}>;

const child = logger.child({ type: "IconStore" });

function getAllIcons() {
  child.debug("loading icons");
  const icons = Object.values(simpleIcons);
  child.debug("icons loaded");
  return icons;
}

const useIconStore = create<IconState>()((set, get) => ({
  allIcons: getAllIcons(),
  sections: {},
  addIconToSection(slug) {
    set((state) => {
      const previous = state.sections[slug] ?? 0;

      return { sections: { ...state.sections, [slug]: previous + 1 } };
    });
  },
  getIcons() {
    const { sections } = get();
    if (!sections) return [] as SimpleIcon[];
    console.log(sections);
    const icons = Object.values(simpleIcons);
    return Object.keys(sections).map((slug) => icons.find((i) => i.slug === slug)) as SimpleIcon[];
  },
  getSlugCount(slug) {
    const { sections } = get();
    return sections[slug] ?? -1;
  },
  filterIconsBySlug(slug) {
    if (!slug) return [];

    const predicate = (icon: SimpleIcon) =>
      icon.title.toLowerCase().includes(slug.trim().toLowerCase());
    const results = get().allIcons.filter(predicate);
    return results;
  },
}));
export default useIconStore;
