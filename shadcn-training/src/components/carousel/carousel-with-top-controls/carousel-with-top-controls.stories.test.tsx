// Libs
import '@testing-library/jest-dom';
import { render } from '@testing-library/react';

// Components
import { CarouselWithTopControls } from '.';

describe('CarouselWithTopControls component', () => {
  test('Renders carouselWithTopControls component', () => {
    const { container } = render(<CarouselWithTopControls />);
    expect(container).toMatchSnapshot();
  });
});
