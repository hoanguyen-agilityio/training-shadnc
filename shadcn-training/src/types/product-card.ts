type ProductCardVariant = 'compact' | 'expanded';

export interface IProductCard {
  img: string;
  imgAlt: string;
  title: string;
  brand: string;
  price: string;
  rating: number;
  reviewLabel?: string;
  variant?: ProductCardVariant;
}
