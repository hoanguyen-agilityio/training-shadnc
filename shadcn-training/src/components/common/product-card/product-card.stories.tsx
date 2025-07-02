// Libs
import type { Meta, StoryObj } from '@storybook/react-vite';

// Components
import { ProductCard } from './index';

export default {
  title: 'Components/Common/ProductCard',
  component: ProductCard,
  decorators: [],
} as Meta;

type Story = StoryObj<typeof ProductCard>;

export const ProductCardSimple: Story = {
  args: {
    img: '/public/assets/product.svg',
    imgAlt: 'img product',
    variant: 'simple',
    title: 'Chinese cabbage',
    brand: 'Al Karam',
    rating: 5,
    price: '$95.50',
    reviewLabel: '(4.1k) Customer Reviews',
  },
};

export const ProductCardWithActions: Story = {
  args: {
    img: '/public/assets/product.svg',
    imgAlt: 'img product',
    variant: 'withActions',
    title: 'Chinese cabbage',
    brand: 'Al Karam',
    rating: 5,
    price: '$95.50',
    reviewLabel: '(524 Feedback)',
  },
};
