import '@testing-library/jest-dom';
jest.mock('embla-carousel-react', () => {
  return {
    __esModule: true,
    default: () => ({
      // return a dummy ref
      scrollPrev: jest.fn(),
      scrollNext: jest.fn(),
    }),
  };
});
