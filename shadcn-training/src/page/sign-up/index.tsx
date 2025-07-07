// Libs
import { zodResolver } from '@hookform/resolvers/zod';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import z from 'zod';

// Constants
import { ERROR_MESSAGES, ROUTES } from '@/constants';

// Services
import { createUser } from '@/services';

// Layouts
import { AuthLayout } from '@/layouts';

// Utils
import { formSchemaSignup, useInitialUsers } from '@/utils';
// Components
import { Button, Input } from '@/components';
import { ChevronIcon } from '@/components/icons';
import { Checkbox } from '@/components/ui/checkbox';
import { Form, FormControl, FormField, FormItem, FormMessage } from '@/components/ui/form';

export const SignUpPage = () => {
  const navigate = useNavigate();
  const initialUsers = useInitialUsers();
  const [signupError, setSignupError] = useState<string | null>(null);
  const form = useForm<z.infer<typeof formSchemaSignup>>({
    resolver: zodResolver(formSchemaSignup),
    defaultValues: {
      email: '',
      password: '',
      firstName: '',
      lastName: '',
    },
  });

  const onSubmit = async (values: z.infer<typeof formSchemaSignup>) => {
    setSignupError(null);

    const matchedUser = initialUsers.find((user) => user.email === values.email);

    if (matchedUser) {
      setSignupError(ERROR_MESSAGES.EMAIL.EXISTED);
      return;
    }

    try {
      await createUser({
        email: values.email,
        password: values.password,
        firstName: values.firstName,
        lastName: values.lastName,
      });

      localStorage.setItem('token', values.email);
      navigate(ROUTES.HOME);
    } catch (error) {
      console.error('Failed to create user:', error);
      setSignupError('Something went wrong during registration.');
    }
  };

  return (
    <AuthLayout title="Create New Account" description="Please enter details">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          <FormField
            control={form.control}
            name="firstName"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input
                    label="First Name"
                    placeholder="Robert"
                    {...field}
                    type="text"
                    variant="default"
                  />
                </FormControl>
                <FormMessage className="text-red-500" />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="lastName"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input
                    label="Last Name"
                    placeholder="Fox"
                    {...field}
                    type="text"
                    variant="default"
                  />
                </FormControl>
                <FormMessage className="text-red-500" />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input
                    label="Email Address"
                    placeholder="robertfox@example.com"
                    {...field}
                    type="email"
                    variant="default"
                  />
                </FormControl>
                <FormMessage className="text-red-500" />
                {signupError && <p className="text-red-500">{signupError}</p>}
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input
                    label="Password"
                    placeholder="**************"
                    {...field}
                    type="password"
                    variant="default"
                  />
                </FormControl>
                <FormMessage className="text-red-500" />
              </FormItem>
            )}
          />
          <div className="flex items-center gap-2">
            <Checkbox />
            <span>
              I agree to the <b>Terms & Conditions</b>
            </span>
          </div>
          <Button
            label={form.formState.isSubmitting ? 'Signing up...' : 'SIGNUP'}
            icon={<ChevronIcon fill="white" />}
            size="default"
            type="submit"
            className="w-full"
            disabled={form.formState.isSubmitting}
          />
        </form>
      </Form>
    </AuthLayout>
  );
};
