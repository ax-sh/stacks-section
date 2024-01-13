import * as simpleIcons from "simple-icons";
import { create } from "zustand";

type IconState = {
  sections: Record<string, number>;
  addIconToSection: (slug: string) => void;
  getIcons: () => any[];
  getSlugCount: (slug: string) => number;
};

const useIconStore = create<IconState>()((set, get) => ({
  sections: {},
  addIconToSection(slug) {
    set((state) => {
      const previous = state.sections[slug] ?? 0;

      return { sections: { ...state.sections, [slug]: previous + 1 } };
    });
  },
  getIcons() {
    console.log(434);
    const { sections } = get();
    if (!sections) return [];
    return Object.keys(sections).map((slug) =>
      Object.values(simpleIcons).find((i) => i.slug === slug),
    );
  },
  getSlugCount(slug) {
    const { sections } = get();
    return sections[slug] ?? -1;
  },
}));
export default useIconStore;
