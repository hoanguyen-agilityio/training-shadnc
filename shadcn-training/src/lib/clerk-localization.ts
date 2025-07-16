const clerkLocalization = {
  signIn: {
    start: {
      title: 'Welcome 👋',
      subtitle: 'Please login here',
    },
    password: {
      title: 'Welcome 👋',
      subtitle: 'Please login here',
    },
  },
  signUp: {
    start: {
      title: 'Create New Account',
      actionText: 'Please enter details',
    },
  },
  formFieldInputPlaceholder__emailAddress: 'robertfox@example.com',
  formFieldInputPlaceholder__password: '**************',
  formFieldInputPlaceholder__firstName: 'Robert',
  formFieldInputPlaceholder__lastName: 'Fox',
  unstable__errors: {
    form_identifier_not_found: 'This email does not exist. Please sign up.',
    form_param_format_invalid:
      'The format of the value entered is invalid. Please review and correct it.',
    form_password_incorrect: 'The password you entered is incorrect.',
    form_param_nil: 'This field cannot be empty.',
    form_param_format_invalid__email_address: 'The email address you entered is invalid.',
    form_password_pwned:
      'This password has appeared in a data breach and cannot be used. Please choose a different one.',
  },
};

export default clerkLocalization;
