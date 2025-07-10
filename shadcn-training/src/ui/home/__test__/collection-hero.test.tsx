// Libs
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';

// Components
import { CollectionHero } from '..';

describe('Collection hero Component', () => {
  test('renders collection hero component', () => {
    const { container } = render(<CollectionHero />);

    expect(container).toMatchSnapshot();
  });
});
