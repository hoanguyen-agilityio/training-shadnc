// Libs
import '@testing-library/jest-dom';
import { render } from '@testing-library/react';

// Components
import { ProductCard } from '.';

describe('Menu component', () => {
  test('Renders menu component', () => {
    const { container } = render(
      <ProductCard
        variant="simple"
        img="/public/assets/product.svg"
        imgAlt="simple"
        title="Chinese cabbage"
        brand="Al Karam"
        rating={5}
        price="$95.50"
        reviewLabel="(4.1k) Customer Reviews"
      />,
    );
    expect(container).toMatchSnapshot();
  });
});
