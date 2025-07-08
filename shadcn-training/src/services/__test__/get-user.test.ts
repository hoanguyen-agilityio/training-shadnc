import { User } from '@/types';
import { apiRequest } from '../api';
import { getUsers } from '../get-users';

// Mock the apiRequest function
jest.mock('../api');

describe('getUsers', () => {
  const mockUsers: User[] = [
    { email: 'user1@example.com', password: '@Abc123456', firstName: 'John', lastName: 'Doe' },
    { email: 'user2@example.com', password: '@Abc123456', firstName: 'Jane', lastName: 'Smith' },
  ];

  beforeEach(() => {
    // Reset mocks before each test
    jest.clearAllMocks();
    // Set default environment variable
    process.env.VITE_ACCOUNT_URL = 'https://api.example.com/users';
  });

  test('should fetch and reverse users successfully', async () => {
    (apiRequest as jest.Mock).mockResolvedValue(mockUsers);

    const result = await getUsers();

    expect(apiRequest).toHaveBeenCalledWith('https://api.example.com/users', 'GET');
    expect(result).toEqual(mockUsers.reverse());
  });

  test('should throw an error when VITE_ACCOUNT_URL is missing', async () => {
    delete process.env.VITE_ACCOUNT_URL;

    await expect(getUsers()).rejects.toThrow('Missing VITE_ACCOUNT_URL in environment variables');
    expect(apiRequest).not.toHaveBeenCalled();
  });

  test('should log error and return undefined when apiRequest fails', async () => {
    const errorMessage = 'API error';
    const consoleErrorSpy = jest.spyOn(console, 'error').mockImplementation();
    (apiRequest as jest.Mock).mockRejectedValue(new Error(errorMessage));

    const result = await getUsers();

    expect(apiRequest).toHaveBeenCalledWith('https://api.example.com/users', 'GET');
    expect(consoleErrorSpy).toHaveBeenCalledWith(
      `An error occurred while getting users: Error: ${errorMessage}`,
    );
    expect(result).toBeUndefined();
    consoleErrorSpy.mockRestore();
  });
});
