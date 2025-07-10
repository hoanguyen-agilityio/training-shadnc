// Libs
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';

// Components
import { OrganicFoodStore } from '..';

describe('Organic food store Component', () => {
  test('renders organic food store component', () => {
    const { container } = render(<OrganicFoodStore />);

    expect(container).toMatchSnapshot();
  });
});
