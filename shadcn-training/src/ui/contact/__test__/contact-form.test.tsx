// Libs
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';

// Components
import { ContactForm } from '..';

describe('Contact form Component', () => {
  test('renders contact form component', () => {
    const { container } = render(<ContactForm />);

    expect(container).toMatchSnapshot();
  });
});
