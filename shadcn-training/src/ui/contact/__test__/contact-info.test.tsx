// Libs
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';

// Components
import { ContactInfo } from '..';

describe('Contact info Component', () => {
  test('renders contact info component', () => {
    const { container } = render(<ContactInfo />);

    expect(container).toMatchSnapshot();
  });
});
