// Libs
import '@testing-library/jest-dom';
import { render } from '@testing-library/react';

// Components
import { Spinner } from '.';

describe('Spinner component', () => {
  test('Renders spinner component', () => {
    const { container } = render(<Spinner size={43} />);
    expect(container).toMatchSnapshot();
  });
});
