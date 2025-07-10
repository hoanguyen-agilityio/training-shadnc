// Libs
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';

// Components
import { ShopBanner } from '..';

describe('Shop banner Component', () => {
  test('renders shop banner component', () => {
    const { container } = render(<ShopBanner />);

    expect(container).toMatchSnapshot();
  });
});
