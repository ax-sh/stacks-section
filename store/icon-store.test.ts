import useIconStore from "@/store/icon-store";

const initialStoreState = useIconStore.getState();
describe(useIconStore.name, () => {
  beforeEach(() => {
    useIconStore.setState(initialStoreState, true);
  });
  it("should load store", () => {
    expect(useIconStore.getState()).toBeDefined();
  });

  it("should have empty selections", () => {
    expect(useIconStore.getState().sections).toEqual({});
  });
  it("should have empty icons", () => {
    expect(useIconStore.getState().getIcons()).toEqual([]);
  });

  it("should have one selection after invoking function", async () => {
    const state = useIconStore.getState();
    state.addIconToSection("test");

    expect(state.sections).toEqual({ test: 1 });

    state.addIconToSection("test");
    state.addIconToSection("test");
    state.addIconToSection("test");
    state.addIconToSection("test");
    expect(state.sections).toEqual({ test: 5 });
  });

  it("should find the number of count in selections when empty", () => {
    expect(useIconStore.getState().getSlugCount("test")).toEqual(-1);
  });

  it("should find the number of count in selections", () => {
    const state = useIconStore.getState();
    state.addIconToSection("slug");
    state.addIconToSection("slug");
    state.addIconToSection("slug");
    state.addIconToSection("slug");
    state.addIconToSection("slug");
    state.addIconToSection("slug");
    state.addIconToSection("slug");
    state.addIconToSection("slug");
    state.addIconToSection("slug");
    state.addIconToSection("slug");
    expect(useIconStore.getState().getSlugCount("slug")).toEqual(10);
  });

  it("count all icons on simple icon", () => {
    const state = useIconStore.getState();
    expect(state.allIcons.length).toEqual(2950);
  });

  it("should filter icon that matches slug", () => {
    const state = useIconStore.getState();
    expect(state.filterIconsBySlug("slug")).toEqual([]);
    expect(state.filterIconsBySlug("fb")).toHaveLength(1);
  });
});
