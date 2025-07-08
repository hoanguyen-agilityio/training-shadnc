// Libs
import '@testing-library/jest-dom';
import { render } from '@testing-library/react';

// Components
import { CarouselWithSideControls } from '..';

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

describe('CarouselWithSideControls component', () => {
  test('Renders CarouselWithSideControls component', () => {
    const { container } = render(<CarouselWithSideControls />);
    expect(container).toMatchSnapshot();
  });
});
