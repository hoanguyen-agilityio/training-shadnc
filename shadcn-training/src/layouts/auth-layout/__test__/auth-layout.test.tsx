// Libs
import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';

// Components
import { AuthLayout } from '..';

describe('AuthLayout component', () => {
  test('Renders AuthLayout component', () => {
    const { container } = render(
      <MemoryRouter>
        <AuthLayout title="Welcome" description="Please login here">
          <div>
            <p>Test</p>
          </div>
        </AuthLayout>
      </MemoryRouter>,
    );
    expect(container).toMatchSnapshot();
  });
});
