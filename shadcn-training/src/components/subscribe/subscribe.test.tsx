// Libs
import '@testing-library/jest-dom';
import { render } from '@testing-library/react';

// Components
import { Subscribe } from '.';

describe('Subscribe component', () => {
  test('Renders subscribe component', () => {
    const { container } = render(<Subscribe />);
    expect(container).toMatchSnapshot();
  });
});
