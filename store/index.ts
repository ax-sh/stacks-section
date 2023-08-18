import { create } from "zustand";
const useStore = create((set, get) => ({
	counter: 0,
	sections: { slug: 2 },
	increment: () => set((state) => ({ counter: state.counter + 1 })),
	decrement: () => set((state) => ({ counter: state.counter - 1 })),
	addIconToSection(slug: string) {
		set((state) => ({ selector: { ...state.selector, [slug]: 3 } }));
	},
}));
export default useStore;
