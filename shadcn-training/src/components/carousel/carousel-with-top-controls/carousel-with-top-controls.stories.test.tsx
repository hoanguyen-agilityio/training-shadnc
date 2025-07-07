// Libs
import '@testing-library/jest-dom';
import { render } from '@testing-library/react';

// Components
import { CarouselWithTopControls } from '.';

jest.mock('@/components/ui/carousel', () => {
  const actual = jest.requireActual('@/components/ui/carousel');
  return {
    ...actual,
    Carousel: ({ children }: { children: React.ReactNode }) => <div>{children}</div>,
    CarouselContent: ({ children }: { children: React.ReactNode }) => <div>{children}</div>,
    CarouselItem: ({ children }: { children: React.ReactNode }) => <div>{children}</div>,
    CarouselPrevious: () => <button>Prev</button>,
    CarouselNext: () => <button>Next</button>,
  };
});

describe('CarouselWithTopControls component', () => {
  test('Renders carouselWithTopControls component', () => {
    const { container } = render(<CarouselWithTopControls />);
    expect(container).toMatchSnapshot();
  });
});
