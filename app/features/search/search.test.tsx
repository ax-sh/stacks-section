import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { type ReactElement } from 'react';
import { Search } from '@/app/features/search/search';

// setup function
function setup(jsx: ReactElement) {
  return {
    user: userEvent.setup(),
    // Import `render` from the framework library of your choice.
    // See https://testing-library.com/docs/dom-testing-library/install#wrappers
    ...render(jsx)
  };
}

describe(Search.name, () => {
  it('should function', async () => {
    const { user } = setup(<Search />);

    await user.type(
      screen.getByRole('textbox', {
        name: /search search/i
      }),
      'foo'
    );
    await user.click(screen.getByText(/search/i));

    expect(
      screen.getByRole('heading', {
        name: /foo/i
      })
    ).toHaveTextContent('foo');
  });
});
