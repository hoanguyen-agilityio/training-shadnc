// Libs
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';

// Components
import { HomeBanner } from '..';

describe('Home banner Component', () => {
  test('renders home banner component', () => {
    const { container } = render(<HomeBanner />);

    expect(container).toMatchSnapshot();
  });
});
