import { create } from 'zustand';

type IconState = {
  sections: Record<string, number>;
  addIconToSection: (slug: string) => void;
};

const useIconStore = create<IconState>()((set) => ({
  sections: {},
  addIconToSection(slug) {
    set((state) => {
      const prev = state.sections[slug] ?? 0;

      return { sections: { ...state.sections, [slug]: prev + 1 } };
    });
  }
}));
export default useIconStore;
