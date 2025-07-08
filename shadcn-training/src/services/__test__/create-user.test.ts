import { User } from '@/types';
import { apiRequest } from '../api';
import { createUser } from '../create-user';

// Mock the apiRequest function
jest.mock('../api');

describe('createUser', () => {
  const mockUser: User = {
    email: 'test@example.com',
    password: 'password123',
    firstName: 'John',
    lastName: 'Doe',
  };
  const mockResponse = { user: mockUser };

  beforeEach(() => {
    // Reset mocks before each test
    jest.clearAllMocks();
    // Set default environment variable
    process.env.VITE_ACCOUNT_URL = 'https://api.example.com/users';
  });

  test('should create a user successfully', async () => {
    (apiRequest as jest.Mock).mockResolvedValue(mockResponse);

    const result = await createUser(mockUser);

    expect(apiRequest).toHaveBeenCalledWith('https://api.example.com/users', 'POST', {
      email: mockUser.email,
      password: mockUser.password,
      firstName: mockUser.firstName,
      lastName: mockUser.lastName,
    });
    expect(result).toEqual(mockResponse);
  });

  test('should throw an error when VITE_ACCOUNT_URL is missing', async () => {
    delete process.env.VITE_ACCOUNT_URL;

    await expect(createUser(mockUser)).rejects.toThrow(
      'Missing VITE_ACCOUNT_URL in environment variables',
    );
    expect(apiRequest).not.toHaveBeenCalled();
  });

  test('should return null when apiRequest throws an error', async () => {
    const errorMessage = 'API error';
    (apiRequest as jest.Mock).mockRejectedValue(new Error(errorMessage));

    const result = await createUser(mockUser);

    expect(apiRequest).toHaveBeenCalledWith('https://api.example.com/users', 'POST', {
      email: mockUser.email,
      password: mockUser.password,
      firstName: mockUser.firstName,
      lastName: mockUser.lastName,
    });
    expect(result).toBeNull();
  });

  test('should log success message on successful user creation', async () => {
    const consoleLogSpy = jest.spyOn(console, 'log').mockImplementation();
    (apiRequest as jest.Mock).mockResolvedValue(mockResponse);

    await createUser(mockUser);

    expect(consoleLogSpy).toHaveBeenCalledWith('User created successfully!');
    consoleLogSpy.mockRestore();
  });

  test('should log error message when apiRequest fails', async () => {
    const errorMessage = 'API error';
    const consoleErrorSpy = jest.spyOn(console, 'error').mockImplementation();
    (apiRequest as jest.Mock).mockRejectedValue(new Error(errorMessage));

    await createUser(mockUser);

    expect(consoleErrorSpy).toHaveBeenCalledWith(`Create user error: ${errorMessage}`);
    consoleErrorSpy.mockRestore();
  });
});
