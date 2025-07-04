const ERROR_MESSAGES = {
  EMAIL: {
    MIN: 'Email must be at least 2 characters.',
    INVALID: 'Invalid email address format.',
  },
  PASSWORD: {
    MIN: 'Password must be at least 6 characters.',
    MAX: 'Password must be less than 50 characters.',
    UPPERCASE: 'Password must contain at least one uppercase letter.',
    NUMBER: 'Password must contain at least one number.',
  },
  INVALID_ACCOUNT: 'Email or password is incorrect',
};

export { ERROR_MESSAGES };
