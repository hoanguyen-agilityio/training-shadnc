// Libs
import '@testing-library/jest-dom';
import { render } from '@testing-library/react';

// Components
import { LoadingPage } from '..';

describe('Home page', () => {
  test('Renders Home page', () => {
    const { container } = render(<LoadingPage />);
    expect(container).toMatchSnapshot();
  });
});
