// Libs
import '@testing-library/jest-dom';
import { render } from '@testing-library/react';

// Components
import { Badge } from '.';

describe('Badge component', () => {
  test('Renders badge component', () => {
    const { container } = render(<Badge name="Best Sale" />);
    expect(container).toMatchSnapshot();
  });
});
