import { create } from 'zustand';
import * as simpleIcons from 'simple-icons';
type IconState = {
  sections: Record<string, number>;
  addIconToSection: (slug: string) => void;
  getIcons: () => any[];
};

const useIconStore = create<IconState>()((set, get) => ({
  sections: {},
  addIconToSection(slug) {
    set((state) => {
      const prev = state.sections[slug] ?? 0;

      return { sections: { ...state.sections, [slug]: prev + 1 } };
    });
  },
  getIcons() {
    console.log(434);
    const { sections } = get();
    if (!sections) return [];
    return Object.keys(sections).map((slug) =>
      Object.values(simpleIcons).find((i) => i.slug === slug)
    );
  }
}));
export default useIconStore;
