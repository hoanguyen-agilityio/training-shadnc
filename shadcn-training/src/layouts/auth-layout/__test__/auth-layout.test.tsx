// Libs
import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { ClerkProvider } from '@clerk/clerk-react';
import dotenv from 'dotenv';

// Components
import { AuthLayout } from '..';

dotenv.config();

const PUBLISHABLE_KEY = process.env.VITE_CLERK_PUBLISHABLE_KEY;

describe('AuthLayout component', () => {
  test('Renders AuthLayout component', () => {
    const { container } = render(
      <MemoryRouter>
        <ClerkProvider publishableKey={PUBLISHABLE_KEY!}>
          <AuthLayout>
            <div>
              <p>Test</p>
            </div>
          </AuthLayout>
        </ClerkProvider>
      </MemoryRouter>,
    );
    expect(container).toMatchSnapshot();
  });
});
