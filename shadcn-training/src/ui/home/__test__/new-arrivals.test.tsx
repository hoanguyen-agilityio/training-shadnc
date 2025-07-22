// Libs
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

// Components
import { NewArrivals } from '..';

// Mocks
jest.mock('@/hooks', () => ({
  useHomePageProductsByTab: () => [
    {
      img: 'https://picsum.photos/seed/1/354/244',
      imgAlt: 'img product',
      variant: 'compact',
      title: 'Lorem ipsum 1',
      brand: 'Al Karam',
      rating: 5,
      price: '$95.50',
      reviewLabel: '(4.1k) Customer Reviews',
      value: 'lorem1',
    },
    {
      img: 'https://picsum.photos/seed/7/354/244',
      imgAlt: 'img product',
      variant: 'compact',
      title: 'Lorem ipsum 1',
      brand: 'Al Karam',
      rating: 5,
      price: '$65.50',
      reviewLabel: '(2.5k) Customer Reviews',
      value: 'lorem2',
    },
    {
      img: 'https://picsum.photos/seed/13/354/244',
      imgAlt: 'img product',
      variant: 'compact',
      title: 'Lorem ipsum 1',
      brand: 'Al Karam',
      rating: 5,
      price: '$55.50',
      reviewLabel: '(1.9k) Customer Reviews',
      value: 'lorem3',
    },
  ],
}));

jest.mock('@/mocks', () => ({
  TABS_LABEL: [
    {
      label: 'Lorem ipsum',
      value: 'lorem1',
    },
    {
      label: 'Dolor sit',
      value: 'lorem2',
    },
    {
      label: 'Amet consectetur',
      value: 'lorem3',
    },
  ],
}));

describe('New arrivals Component', () => {
  test('renders new arrivals component', () => {
    const { container } = render(<NewArrivals />);

    expect(container).toMatchSnapshot();
  });

  test('renders section with correct aria-label', () => {
    render(<NewArrivals />);
    const section = screen.getByRole('region', { name: /new arrivals/i });
    expect(section).toBeInTheDocument();
  });

  test('renders heading and paragraph text', () => {
    render(<NewArrivals />);
    expect(screen.getByRole('heading', { name: /new arrivals/i })).toBeInTheDocument();

    expect(
      screen.getByText(/Lorem ipsum dolor sit amet, consectetur adipiscing elit/i),
    ).toBeInTheDocument();
  });

  test('renders tabs with correct labels', () => {
    render(<NewArrivals />);
    expect(screen.getByText('Lorem ipsum')).toBeInTheDocument();
    expect(screen.getByText('Dolor sit')).toBeInTheDocument();
    expect(screen.getByText('Amet consectetur')).toBeInTheDocument();
  });

  test('renders mocked product content inside a tab', () => {
    render(<NewArrivals />);
    expect(screen.getByText(/Lorem ipsum 1/i)).toBeInTheDocument();
  });
});
