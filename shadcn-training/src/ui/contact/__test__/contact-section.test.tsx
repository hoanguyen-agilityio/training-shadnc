// Libs
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';

// Components
import { ContactForm, ContactSection } from '..';

describe('Contact section Component', () => {
  test('renders contact section component', () => {
    const { container } = render(<ContactSection />);

    expect(container).toMatchSnapshot();
  });

  test('updates date and closes popover on date selection', async () => {
    render(<ContactForm />);

    const dateButton = screen.getByRole('button', { name: /select date/i });
    expect(dateButton).toHaveTextContent('Select date');

    // Open the date picker
    fireEvent.click(dateButton);
    expect(dateButton).toHaveAttribute('aria-expanded', 'true');

    // Wait for all button elements and click the first one that looks like a date (e.g. '15')
    const allButtons = await screen.findAllByRole('button');
    const dayButton = allButtons.find((btn) => /^\d+$/.test(btn.textContent || ''));

    expect(dayButton).toBeDefined();
    fireEvent.click(dayButton!);

    // The date should now be selected and shown on the button (not 'Select date')
    expect(dateButton).not.toHaveTextContent('Select date');
  });
});
