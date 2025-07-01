import { Evaluate, Badge, Button } from '@/components';
import {
  Card as CardShadcn,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { CartIcon, EyeIcon, HeartIcon } from '@/components/icons';

type ProductCardVariant = 'simple' | 'withActions';

interface IProductCard {
  img: string;
  imgAlt: string;
  title: string;
  brand: string;
  price: string;
  rating: number;
  reviewLabel?: string;
  variant?: ProductCardVariant;
}

export const ProductCard = ({
  img,
  imgAlt,
  title,
  brand,
  price,
  rating,
  reviewLabel,
  variant = 'simple',
}: IProductCard) => {
  return (
    <CardShadcn className="w-full max-w-sm group">
      <CardHeader>
        <div className="relative">
          <img src={img} alt={imgAlt} />
          {variant === 'withActions' && (
            <>
              {/* badges - hidden by default, show on hover */}
              <div className="flex gap-2 absolute top-6 left-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <Badge name="Sale 50%" variant="destructive" />
                <Badge name="Best Sale" />
              </div>

              {/* buttons - hidden by default, show on hover */}
              <div className="absolute bottom-6 left-10 flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <Button
                  variant="primary"
                  size="circle"
                  icon={<HeartIcon />}
                  onClick={() => {}}
                  className="flex-shrink-0 cursor-not-allowed"
                />
                <Button
                  variant="primary"
                  size="lg"
                  label="Add to Cart"
                  icon={<CartIcon />}
                  onClick={() => {}}
                  className="flex flex-row-reverse cursor-not-allowed"
                />
                <Button
                  variant="primary"
                  size="circle"
                  icon={<EyeIcon />}
                  onClick={() => {}}
                  className="flex-shrink-0 cursor-not-allowed"
                />
              </div>
            </>
          )}
        </div>
      </CardHeader>
      {variant === 'simple' && (
        <CardContent className="flex flex-col gap-6">
          <div className="flex justify-between items-center">
            <div>
              <CardTitle className="text-xl">{title}</CardTitle>
              <CardDescription className="text-xs text-[#8A8A8A]">{brand}</CardDescription>
            </div>
            <Evaluate value={rating} />
          </div>
          <CardDescription className="text-xs">{reviewLabel}</CardDescription>
          <div className="flex justify-between items-center">
            <CardDescription className="text-2xl font-bold">{price}</CardDescription>
            <CardDescription className="text-xs text-[#FF4646]">Almost Sold Out</CardDescription>
          </div>
        </CardContent>
      )}

      {variant === 'withActions' && (
        <CardContent className="flex flex-col gap-3">
          <div className="flex justify-between items-center">
            <CardTitle className="text-xl">{title}</CardTitle>
            <CardDescription className="text-xs text-[#8A8A8A]">{brand}</CardDescription>
          </div>
          <div className="flex gap-0.5">
            <Evaluate value={rating} />
            <span>{reviewLabel}</span>
          </div>
          <div className="flex justify-between items-center">
            <CardDescription className="text-2xl font-bold">{price}</CardDescription>
            <CardDescription className="text-xs text-[#FF4646]">Almost Sold Out</CardDescription>
          </div>
        </CardContent>
      )}
    </CardShadcn>
  );
};
