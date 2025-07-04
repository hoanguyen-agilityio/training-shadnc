// Libs
import '@testing-library/jest-dom';
import { render } from '@testing-library/react';

// Components
import { Avatar } from '.';

describe('Avatar component', () => {
  test('Renders Avatar component', () => {
    const { container } = render(<Avatar />);
    expect(container).toMatchSnapshot();
  });
});
