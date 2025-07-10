// Libs
import '@testing-library/jest-dom';
import { render, screen, fireEvent } from '@testing-library/react';

// Components
import { Input } from '..';

describe('Button component', () => {
  test('Renders menu component', () => {
    const { container } = render(
      <Input
        label="Email"
        type="email"
        htmlFor="email"
        name="email"
        placeholder="Enter your email"
        onChange={() => {}}
        variant="default"
      />,
    );
    expect(container).toMatchSnapshot();
  });

  test('renders with primary variant', () => {
    render(
      <Input
        type="email"
        placeholder="Enter email"
        label="Email"
        name="email"
        variant="primary"
        onChange={() => {}}
      />,
    );

    const input = screen.getByPlaceholderText('Enter email');
    expect(input).toBeInTheDocument();
    expect(input).toHaveClass('shadow-md');
  });

  test('calls onChange correctly', () => {
    const handleChange = jest.fn();
    render(
      <Input
        variant="default"
        type="text"
        placeholder="Enter value"
        label="Value"
        name="value"
        onChange={handleChange}
      />,
    );

    const input = screen.getByPlaceholderText('Enter value');
    fireEvent.change(input, { target: { value: 'hello' } });
    expect(handleChange).toHaveBeenCalled();
    expect(input).toHaveValue('hello');
  });
});
