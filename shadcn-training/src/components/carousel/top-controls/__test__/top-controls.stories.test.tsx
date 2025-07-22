// Libs
import '@testing-library/jest-dom';
import { render, fireEvent, screen } from '@testing-library/react';
import React, { useEffect } from 'react';

// Mocks
const mockScrollPrev = jest.fn();
const mockScrollNext = jest.fn();

const MockCarousel = ({
  children,
  setApi,
}: {
  children: React.ReactNode;
  setApi?: (api: { scrollPrev: () => void; scrollNext: () => void }) => void;
}) => {
  useEffect(() => {
    setApi?.({
      scrollPrev: mockScrollPrev,
      scrollNext: mockScrollNext,
    });
  }, [setApi]);

  return <div>{children}</div>;
};

jest.mock('@/components/ui/carousel', () => {
  const actual = jest.requireActual('@/components/ui/carousel');
  return {
    ...actual,
    Carousel: MockCarousel,
    CarouselContent: ({ children }: { children: React.ReactNode }) => <div>{children}</div>,
    CarouselItem: ({ children }: { children: React.ReactNode }) => <div>{children}</div>,
    CarouselPrevious: () => <button style={{ display: 'none' }}>Prev</button>,
    CarouselNext: () => <button style={{ display: 'none' }}>Next</button>,
  };
});

import { CarouselWithTopControls } from '..';

describe('CarouselWithTopControls component', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  test('Renders carouselWithTopControls component', () => {
    const { container } = render(<CarouselWithTopControls />);
    expect(container).toMatchSnapshot();
  });

  test('calls scrollPrev and scrollNext when navigation buttons are clicked', () => {
    render(<CarouselWithTopControls />);

    const prevButton = screen.getByRole('button', { name: /previous/i });
    const nextButton = screen.getByRole('button', { name: /next/i });

    fireEvent.click(prevButton);
    fireEvent.click(nextButton);

    expect(mockScrollPrev).toHaveBeenCalledTimes(1);
    expect(mockScrollNext).toHaveBeenCalledTimes(1);
  });
});
