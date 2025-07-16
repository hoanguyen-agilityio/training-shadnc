// Libs
import { SignUp } from '@clerk/clerk-react';

// Layouts
import { AuthLayout } from '@/layouts';
import { ROUTES } from '@/constants';

export const SignUpPage = () => {
  return (
    <AuthLayout>
      <SignUp signInUrl={ROUTES.SIGN_IN} />
    </AuthLayout>
  );
};
