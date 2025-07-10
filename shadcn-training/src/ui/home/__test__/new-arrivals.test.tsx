// Libs
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';

// Components
import { NewArrivals } from '..';

describe('New arrivals Component', () => {
  test('renders new arrivals component', () => {
    const { container } = render(<NewArrivals />);

    expect(container).toMatchSnapshot();
  });
});
