// Libs
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';

// Components
import { DatePicker } from '..';

describe('DatePicker Component', () => {
  test('renders date picker component', () => {
    const { container } = render(<DatePicker />);

    expect(container).toMatchSnapshot();
  });
});
