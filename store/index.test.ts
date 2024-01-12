import useIconStore from '@/store/index';

describe(useIconStore.name, () => {
  it('should load store', () => {
    expect(useIconStore.getState()).toBeDefined();
  });
});
