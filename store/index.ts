import { create } from 'zustand';

type IconState = {
  sections: Record<string, number>;
  addIconToSection: (slug: string) => void;
};

const useIconStore = create<IconState>()((set) => ({
  sections: {},
  addIconToSection(slug) {
    set((state) => ({ sections: { ...state.sections, [slug]: 1 } }));
  }
}));
export default useIconStore;
