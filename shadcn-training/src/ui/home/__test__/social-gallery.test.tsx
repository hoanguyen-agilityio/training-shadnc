// Libs
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';

// Components
import { SocialGallery } from '..';

describe('Social gallery Component', () => {
  test('renders social gallery component', () => {
    const { container } = render(<SocialGallery />);

    expect(container).toMatchSnapshot();
  });
});
