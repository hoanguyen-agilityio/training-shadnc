// Libs
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';

// Components
import { CookieConsent } from '..';

describe('CookieConsent Component', () => {
  test('renders cookie consent component', () => {
    const { container } = render(<CookieConsent />);

    expect(container).toMatchSnapshot();
  });
});
