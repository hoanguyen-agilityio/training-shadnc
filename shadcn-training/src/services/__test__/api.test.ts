import '@testing-library/jest-dom';
import { apiRequest } from '../api';

// Mock the fetch API
global.fetch = jest.fn();

describe('apiRequest', () => {
  const mockPath = '/api/test';
  const mockData = { key: 'value' };
  const mockResponse = { id: 1, name: 'Test' };

  beforeEach(() => {
    // Reset mocks before each test
    (fetch as jest.Mock).mockClear();
    (fetch as jest.Mock).mockResolvedValue({
      json: jest.fn().mockResolvedValue(mockResponse),
    });
  });

  test('should perform a GET request successfully', async () => {
    const result = await apiRequest<typeof mockResponse>(mockPath, 'GET');

    expect(fetch).toHaveBeenCalledWith(mockPath, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });
    expect(result).toEqual(mockResponse);
  });

  test('should perform a POST request with data successfully', async () => {
    const result = await apiRequest<typeof mockResponse, typeof mockData>(
      mockPath,
      'POST',
      mockData,
    );

    expect(fetch).toHaveBeenCalledWith(mockPath, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(mockData),
    });
    expect(result).toEqual(mockResponse);
  });

  test('should perform a PUT request with data successfully', async () => {
    const result = await apiRequest<typeof mockResponse, typeof mockData>(
      mockPath,
      'PUT',
      mockData,
    );

    expect(fetch).toHaveBeenCalledWith(mockPath, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(mockData),
    });
    expect(result).toEqual(mockResponse);
  });

  test('should perform a DELETE request successfully', async () => {
    const result = await apiRequest<typeof mockResponse>(mockPath, 'DELETE');

    expect(fetch).toHaveBeenCalledWith(mockPath, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
    });
    expect(result).toEqual(mockResponse);
  });

  test('should handle fetch errors', async () => {
    const errorMessage = 'Network error';
    (fetch as jest.Mock).mockRejectedValueOnce(new Error(errorMessage));

    await expect(apiRequest(mockPath, 'GET')).rejects.toThrow(errorMessage);
  });

  test('should handle JSON parsing errors', async () => {
    (fetch as jest.Mock).mockResolvedValue({
      json: jest.fn().mockRejectedValue(new Error('Invalid JSON')),
    });

    await expect(apiRequest(mockPath, 'GET')).rejects.toThrow('Invalid JSON');
  });
});
