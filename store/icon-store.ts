import logger from "@/app/logger";
import * as simpleIcons from "simple-icons";
import type { SimpleIcon } from "simple-icons";
import { create } from "zustand";

type IconState = Required<{
  sections: Record<string, number>;
  addIconToSection: (slug: string) => void;
  getIcons: () => SimpleIcon[];
  getSlugCount: (slug: string) => number;
  readonly allIcons: SimpleIcon[];
  filterIconsBySlug(slug: string): SimpleIcon[];
}>;

const log = logger.child({ type: "IconStore" });

function getAllIcons() {
  log.debug("loading icons");
  const icons = Object.values(simpleIcons);
  log.debug("icons loaded");
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
    const { sections, allIcons } = get();
    if (!sections) return [] as SimpleIcon[];

    const findIconWithSlug = (slug: string) => {
      return allIcons.find((icon) => icon.slug === slug) as SimpleIcon;
    };

    return Object.keys(sections).map(findIconWithSlug).filter(Boolean);
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
