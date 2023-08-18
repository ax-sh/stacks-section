import { create } from "zustand";
const useStore = create((set) => ({
	counter: 0,
	sections: { slug: 2 },
	increment: () => set((state) => ({ counter: state.counter + 1 })),
	decrement: () => set((state) => ({ counter: state.counter - 1 })),
	addIconToSection() {
		console.log("addIconToSection");
	},
}));
export default useStore;
