// Libs
import { SignIn } from '@clerk/clerk-react';

// Layouts
import { AuthLayout } from '@/layouts';
import { ROUTES } from '@/constants';

export const LoginPage = () => {
  return (
    <AuthLayout>
      <SignIn signInUrl={ROUTES.SIGN_UP} />
    </AuthLayout>
  );
};
