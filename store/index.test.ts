import useIconStore from '@/store/index';

const initialStoreState = useIconStore.getState();
describe(useIconStore.name, () => {
  beforeEach(() => {
    useIconStore.setState(initialStoreState, true);
  });
  it('should load store', () => {
    expect(useIconStore.getState()).toBeDefined();
  });

  it('should have empty selections', () => {
    expect(useIconStore.getState().sections).toEqual({});
  });
  it('should have empty icons', () => {
    expect(useIconStore.getState().getIcons()).toEqual([]);
  });

  it('should have one selection after invoking function', async () => {
    useIconStore.getState().addIconToSection('test');

    expect(useIconStore.getState().sections).toEqual({ test: 1 });

    useIconStore.getState().addIconToSection('test');
    useIconStore.getState().addIconToSection('test');
    useIconStore.getState().addIconToSection('test');
    useIconStore.getState().addIconToSection('test');
    expect(useIconStore.getState().sections).toEqual({ test: 5 });
  });

  it('should find the number of count in selections', () => {
    expect(useIconStore.getState().getSlugCount('test')).toEqual(-1);
  });
});
