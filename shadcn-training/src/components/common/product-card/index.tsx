import { Evaluate, Badge, Button } from '@/components';
import {
  Card as CardShadcn,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { CartIcon, EyeIcon, HeartIcon } from '@/components/icons';
import { IProductCard } from '@/types/product-card';

export const ProductCard = ({
  img,
  imgAlt,
  title,
  brand,
  price,
  rating,
  reviewLabel,
  variant = 'compact',
}: IProductCard) => {
  return (
    <CardShadcn className="w-custom-6xl group">
      <CardHeader>
        <div className="relative">
          <img src={img} alt={imgAlt} />
          {variant === 'expanded' && (
            <>
              {/* badges - hidden by default, show on hover */}
              <div className="flex gap-2 absolute top-6 left-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <Badge name="Sale 50%" variant="destructive" />
                <Badge name="Best Sale" />
              </div>

              {/* buttons - hidden by default, show on hover */}
              <div className="absolute bottom-6 left-10 flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <Button
                  aria-label="heart icon"
                  variant="primary"
                  size="circle"
                  icon={<HeartIcon />}
                  className="flex-shrink-0 cursor-not-allowed"
                />
                <Button
                  aria-label="add to cart"
                  variant="primary"
                  size="lg"
                  label="Add to Cart"
                  icon={<CartIcon />}
                  className="flex flex-row-reverse cursor-not-allowed"
                />
                <Button
                  aria-label="eye icon"
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
      {variant === 'compact' && (
        <CardContent className="flex flex-col gap-6">
          <div className="flex gap-2 justify-between items-center">
            <div>
              <CardTitle className="text-xl dark:text-white">{title}</CardTitle>
              <CardDescription className="text-xs text-charcoalGray-60 dark:text-slate-400">
                {brand}
              </CardDescription>
            </div>
            <Evaluate value={rating} />
          </div>
          <CardDescription className="text-xs dark:text-white">{reviewLabel}</CardDescription>
          <div className="flex justify-between items-center">
            <CardDescription className="text-2xl font-bold dark:text-white">
              {price}
            </CardDescription>
            <CardDescription className="text-xs text-red-600 dark:text-red-400">
              Almost Sold Out
            </CardDescription>
          </div>
        </CardContent>
      )}

      {variant === 'expanded' && (
        <CardContent className="flex flex-col gap-3">
          <div className="flex justify-between items-center">
            <CardTitle className="text-xl dark:text-white">{title}</CardTitle>
            <CardDescription className="text-xs text-charcoalGray-60 dark:text-slate-400">
              {brand}
            </CardDescription>
          </div>
          <div className="flex gap-0.5">
            <Evaluate value={rating} />
            <span className="text-charcoalGray-60 dark:text-slate-400">{reviewLabel}</span>
          </div>
          <div className="flex justify-between items-center">
            <CardDescription className="text-2xl font-bold dark:text-white">
              {price}
            </CardDescription>
            <CardDescription className="text-xs text-red-600 dark:text-red-400">
              Almost Sold Out
            </CardDescription>
          </div>
        </CardContent>
      )}
    </CardShadcn>
  );
};
