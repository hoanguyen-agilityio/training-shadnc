const ERROR_MESSAGES = {
  EMAIL: {
    MIN: 'Email must be at least 2 characters.',
    INVALID: 'Invalid email address format.',
    EXISTED: 'Email already exists. Please use a different email.',
  },
  PASSWORD: {
    MIN: 'Password must be at least 6 characters.',
    MAX: 'Password must be less than 50 characters.',
    UPPERCASE: 'Password must contain at least one uppercase letter.',
    NUMBER: 'Password must contain at least one number.',
  },
  FIRST_NAME: {
    MIN: 'First name must be at least 1 character.',
    MAX: 'First name must be less than 50 characters.',
    INVALID: 'First name cannot contain numbers or special characters.',
  },
  LAST_NAME: {
    MIN: 'Last name must be at least 1',
    MAX: 'Last name must be less than 50 characters.',
    INVALID: 'Last name cannot contain numbers or special characters.',
  },
  INVALID_ACCOUNT: 'Email or password is incorrect',
};

export { ERROR_MESSAGES };
