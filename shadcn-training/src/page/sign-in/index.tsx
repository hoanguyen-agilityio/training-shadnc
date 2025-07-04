// Libs
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { useForm } from 'react-hook-form';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

// Constants
import { ERROR_MESSAGES, ROUTES } from '@/constants';

// Layouts
import { AuthLayout } from '@/layouts';

// @Utils
import { formSchema, useInitialUsers } from '@/utils';

// Components
import { Button, Input } from '@/components';
import { Form, FormControl, FormField, FormItem, FormMessage } from '@/components/ui/form';
import { ArrowIcon } from '@/components/icons';
import { Checkbox } from '@/components/ui/checkbox';

export const LoginPage = () => {
  const navigate = useNavigate();
  const initialUsers = useInitialUsers();

  const [loginError, setLoginError] = useState<string | null>(null);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: '',
      password: '',
    },
  });

  const onSubmit = (values: z.infer<typeof formSchema>) => {
    setLoginError(null);

    const matchedUser = initialUsers.find((user) => user.email === values.email);

    if (!matchedUser || matchedUser.password !== values.password) {
      setLoginError(ERROR_MESSAGES.INVALID_ACCOUNT);
      return;
    }

    localStorage.setItem('token', matchedUser.email);
    navigate(ROUTES.HOME);
  };

  return (
    <AuthLayout title="Welcome" icon description="Please login here">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
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
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Checkbox />
              <span>Remember Me</span>
            </div>
            <Link to="#" className="text-sm	text-black">
              Forgot Password?
            </Link>
          </div>
          {loginError && <p className="text-red-500">{loginError}</p>}
          <Button
            label={form.formState.isSubmitting ? 'Logging in...' : 'LOGIN'}
            icon={<ArrowIcon fill="white" />}
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
