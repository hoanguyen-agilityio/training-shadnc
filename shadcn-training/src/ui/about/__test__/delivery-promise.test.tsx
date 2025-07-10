// Libs
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';

// Components
import { DeliveryPromise } from '..';

describe('Delivery promise Component', () => {
  test('renders delivery promise component', () => {
    const { container } = render(<DeliveryPromise />);

    expect(container).toMatchSnapshot();
  });
});
