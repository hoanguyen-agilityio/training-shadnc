// Libs
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';

// Components
import { HeroImg } from '..';

describe('Hero img Component', () => {
  test('renders hero img component', () => {
    const { container } = render(<HeroImg />);

    expect(container).toMatchSnapshot();
  });
});
