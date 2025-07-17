import { MetaData } from '@/types';
import { ROUTES } from './routes';

export const META_DATA: Record<string, MetaData> = {
  [ROUTES.HOME]: {
    title: 'Home | One Green',
    description:
      'Explore the latest trends in fashion and lifestyle. Shop new arrivals and curated collections on One Green.',
    image: '/assets/left-home-banner.svg',
  },
  [ROUTES.SIGN_IN]: {
    title: 'Sign In | One Green',
    description: 'Access your One Green account securely.',
    image: '/assets/side-img.svg',
  },
  [ROUTES.SIGN_UP]: {
    title: 'Sign Up | One Green',
    description: 'Create a new One Green account and start your journey.',
    image: '/assets/side-img.svg',
  },
  [ROUTES.SHOP]: {
    title: 'Shop | One Green',
    description: 'Browse the latest fashion and lifestyle items.',
    image: '/assets/shop-banner.svg',
  },
  [ROUTES.ABOUT]: {
    title: 'About Us | One Green',
    description: 'Learn more about our story, mission, and values.',
    image: '/assets/common-bg-banner.svg',
  },
  [ROUTES.CONTACT]: {
    title: 'Contact Us | One Green',
    description: 'Get in touch with our support or sales team.',
    image: '/assets/common-bg-banner.svg',
  },
  '*': {
    title: '404 | Page Not Found',
    description: 'The page you are looking for does not exist.',
    image: '/assets/shop-banner.svg',
  },
};
