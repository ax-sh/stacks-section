import useIconStore from '@/store/index';

describe(useIconStore.name, () => {
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
  });
});
