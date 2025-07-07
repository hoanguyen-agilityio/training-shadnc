// Libs
import '@testing-library/jest-dom';
import { render } from '@testing-library/react';

// Components
import { Banner } from '.';

describe('Banner component', () => {
  test('Renders banner component', () => {
    const { container } = render(<Banner title="About US" />);
    expect(container).toMatchSnapshot();
  });
});
