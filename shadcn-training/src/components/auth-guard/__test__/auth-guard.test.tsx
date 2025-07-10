import { render, screen } from '@testing-library/react';
import { Navigate } from 'react-router-dom';

// Components
import { AuthGuard } from '..';

// Mock react-router-dom Navigate
jest.mock('react-router-dom', () => ({
  Navigate: jest.fn(() => null),
}));

// Mock ROUTES constant
jest.mock('@/constants', () => ({
  ROUTES: {
    HOME: '/',
  },
}));

describe('AuthGuard', () => {
  const mockChild = <div data-testid="child">Child Content</div>;
  const mockNavigate = Navigate as jest.Mock;

  beforeEach(() => {
    // Clear mocks and localStorage before each test
    jest.clearAllMocks();
    localStorage.clear();
  });

  test('should render children when user is not authenticated and blockIfAuthenticated is false', () => {
    render(<AuthGuard>{mockChild}</AuthGuard>);

    expect(screen.getByTestId('child')).toBeInTheDocument();
    expect(mockNavigate).not.toHaveBeenCalled();
  });

  test('should render children when user is authenticated and blockIfAuthenticated is false', () => {
    localStorage.setItem('token', 'mock-token');

    render(<AuthGuard>{mockChild}</AuthGuard>);

    expect(screen.getByTestId('child')).toBeInTheDocument();
    expect(mockNavigate).not.toHaveBeenCalled();
  });

  test('should render children when user is not authenticated and blockIfAuthenticated is true', () => {
    render(<AuthGuard blockIfAuthenticated>{mockChild}</AuthGuard>);

    expect(screen.getByTestId('child')).toBeInTheDocument();
    expect(mockNavigate).not.toHaveBeenCalled();
  });

  test('should redirect to home when user is authenticated and blockIfAuthenticated is true', () => {
    localStorage.setItem('token', 'mock-token');

    render(<AuthGuard blockIfAuthenticated>{mockChild}</AuthGuard>);

    expect(screen.queryByTestId('child')).not.toBeInTheDocument();
    expect(mockNavigate).toHaveBeenCalledWith({ to: '/', replace: true }, undefined);
  });
});
