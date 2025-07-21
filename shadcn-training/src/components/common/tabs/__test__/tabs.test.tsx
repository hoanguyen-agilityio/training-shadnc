// Libs
import '@testing-library/jest-dom';
import { render, fireEvent, screen } from '@testing-library/react';

// Components
import { Tabs } from '..';

// Mocks
import { PRODUCTS_HOME_PAGE, TABS_LABEL } from '@/mocks';

describe('Tabs component', () => {
  test('Renders tabs component', () => {
    const { container } = render(<Tabs tabs={TABS_LABEL} cards={PRODUCTS_HOME_PAGE} />);
    expect(container).toMatchSnapshot();
  });

  test('View More button increases visible cards', () => {
    render(<Tabs tabs={TABS_LABEL} cards={PRODUCTS_HOME_PAGE} />);

    const initialCards = screen.getAllByTestId('product-card');
    expect(initialCards.length).toBeLessThanOrEqual(6);

    const viewMoreButton = screen.getByRole('button', { name: /view more/i });
    fireEvent.click(viewMoreButton);

    const updatedCards = screen.getAllByTestId('product-card');
    expect(updatedCards.length).toBeGreaterThan(initialCards.length);
  });
});
