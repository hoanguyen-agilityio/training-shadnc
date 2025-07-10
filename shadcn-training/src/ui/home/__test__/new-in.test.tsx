// Libs
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';

// Components
import { NewIn } from '..';

describe('New in Component', () => {
  test('renders new in component', () => {
    const { container } = render(<NewIn />);

    expect(container).toMatchSnapshot();
  });
});
