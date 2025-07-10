// Libs
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import { MemoryRouter } from 'react-router-dom';

// Components
import { ErrorBoundary } from '..';

describe('Error Boundary Component', () => {
  test('renders error boundary component', () => {
    const { container } = render(
      <MemoryRouter>
        <ErrorBoundary>
          <div>Content without error</div>
        </ErrorBoundary>
      </MemoryRouter>,
    );

    expect(container).toMatchSnapshot();
  });

  test('handles getDerivedStateFromError correctly', () => {
    const result = ErrorBoundary.getDerivedStateFromError();
    expect(result).toEqual({ hasError: true });
  });

  test('calls componentDidCatch and logs the error', () => {
    const error = new Error('Test error');
    const errorInfo = { componentStack: 'Error stack trace' };
    const logSpy = jest.spyOn(console, 'error').mockImplementation(() => {});

    const boundary = new ErrorBoundary({ children: <div /> });
    boundary.componentDidCatch(error, errorInfo);

    expect(logSpy).toHaveBeenCalledWith('Uncaught error:', error, errorInfo);

    logSpy.mockRestore();
  });
});
