// Libs
import '@testing-library/jest-dom';
import { render } from '@testing-library/react';

// Components
import { Tabs } from '.';

// Mocks
import { PRODUCTS_HOME_PAGE, TABS_LABEL } from '@/mocks';

describe('Tabs component', () => {
  test('Renders tabs component', () => {
    const { container } = render(<Tabs tabs={TABS_LABEL} cards={PRODUCTS_HOME_PAGE} />);
    expect(container).toMatchSnapshot();
  });
});
