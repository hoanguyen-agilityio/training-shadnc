// Libs
import '@testing-library/jest-dom';
import { render, screen, fireEvent } from '@testing-library/react';

// Components
import { Button } from '.';
import { ChevronIcon } from '@/components/icons';

describe('Button component', () => {
  test('Renders menu component', () => {
    const { container } = render(<Button label="Button" onClick={() => {}} size="sm" />);
    expect(container).toMatchSnapshot();
  });

  test('calls onClick handler when clicked', () => {
    const handleClick = jest.fn();
    render(<Button label="Click me" onClick={handleClick} size="sm" />);
    const button = screen.getByRole('button');
    fireEvent.click(button);
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  test('applies correct variant classes', () => {
    const { container } = render(<Button label="Small" onClick={() => {}} size="default" />);
    expect(container.firstChild).toHaveClass('py-2.5');
  });

  test('renders icon if provided', () => {
    render(
      <Button
        label="Icon button"
        onClick={() => {}}
        size="sm"
        icon={<ChevronIcon dataTestId="icon" fill="white" />}
      />,
    );
    expect(screen.getByTestId('icon')).toBeInTheDocument();
  });
});
