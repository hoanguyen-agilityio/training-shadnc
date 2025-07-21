// Libs
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';

// Components
import { CookieConsent } from '..';

describe('CookieConsent Component', () => {
  beforeEach(() => {
    localStorage.clear();
    jest.clearAllMocks();
  });
  test('renders cookie consent component', () => {
    const { container } = render(<CookieConsent />);

    expect(container).toMatchSnapshot();
  });

  test('renders cookie banner if consent not previously given', () => {
    render(<CookieConsent />);

    expect(screen.getByText(/we use cookies to improve your experience/i)).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /accept/i })).toBeInTheDocument();
  });

  test('hides cookie banner if consent is already given', () => {
    localStorage.setItem('cookieConsent', 'true');
    const { container } = render(<CookieConsent />);

    expect(container).toBeEmptyDOMElement();
  });

  test('clicking Accept stores consent and hides banner', () => {
    const setItemSpy = jest.spyOn(localStorage.__proto__, 'setItem');

    render(<CookieConsent />);

    const acceptButton = screen.getByRole('button', { name: /accept/i });
    fireEvent.click(acceptButton);

    expect(setItemSpy).toHaveBeenCalledWith('cookieConsent', 'true');
    expect(
      screen.queryByText(/we use cookies to improve your experience/i),
    ).not.toBeInTheDocument();
  });
});
