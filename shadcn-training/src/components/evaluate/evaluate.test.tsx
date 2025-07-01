// Libs
import '@testing-library/jest-dom';
import { render } from '@testing-library/react';

// Components
import { Evaluate } from '.';

describe('Evaluate component', () => {
  test('Renders evaluate component', () => {
    const { container } = render(<Evaluate value={5} />);
    expect(container).toMatchSnapshot();
  });
});
