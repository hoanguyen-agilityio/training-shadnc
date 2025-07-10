// Libs
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';

// Components
import { ActiveFilter } from '..';

describe('Active filter Component', () => {
  test('renders active filter component', () => {
    const { container } = render(<ActiveFilter />);

    expect(container).toMatchSnapshot();
  });
});
