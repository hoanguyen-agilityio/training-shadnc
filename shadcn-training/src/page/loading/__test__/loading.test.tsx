// Libs
import '@testing-library/jest-dom';
import { render } from '@testing-library/react';

// Components
import { LoadingPage } from '..';

describe('Loading page', () => {
  test('Renders Loading page', () => {
    const { container } = render(<LoadingPage />);
    expect(container).toMatchSnapshot();
  });
});
