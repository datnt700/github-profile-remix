import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';

import HomeComponent from '../../app/components/HomeComponent';

// Mock fetch response for user data and repositories
const mockUserData = {
  avatar_url: 'https://avatar.example.com/user.jpg',
  bio: 'This is a bio',
  blog: 'https://example.com',
  name: 'Test User',
  follower: 100,
  following: 50,
  location: 'Test City',
};

const mockReposData = [
  {
    id: '1',
    name: 'repo1',
    description: 'Description 1',
    forks: 10,
    watchers: 20,
    license: { name: 'MIT' },
    html_url: 'https://github.com/repo1',
    updated_at: '2024-01-01T00:00:00Z',
  },
  {
    id: '2',
    name: 'repo2',
    description: 'Description 2',
    forks: 5,
    watchers: 15,
    license: { name: 'GPL' },
    html_url: 'https://github.com/repo2',
    updated_at: '2024-01-02T00:00:00Z',
  },
];

// Mock the fetch function
global.fetch = vi.fn();

describe('HomeComponent', () => {
  beforeEach(() => {
    fetch.mockClear(); // Reset the mock for each test
  });

  it('should render the input and profile components', () => {
    render(<HomeComponent />);

    const input = screen.getByPlaceholderText('username');
    expect(input).toBeInTheDocument();
  });

  it('should call the user API and display profile data on input', async () => {
    fetch.mockResolvedValueOnce({
      json: async () => mockUserData,
    });

    render(<HomeComponent />);

    // Simulate typing in the input
    const input = screen.getByPlaceholderText('username');
    fireEvent.change(input, { target: { value: 'testuser' } });

    // Wait for the API call to complete
    await waitFor(() => expect(fetch).toHaveBeenCalledTimes(1));

    // Check if profile data is displayed
    const profileImage = screen.getByAltText('image');
    expect(profileImage).toBeInTheDocument();

    const profileNames = screen.getAllByText(mockUserData.name);
    expect(profileNames[0]).toBeInTheDocument();

    const profileBio = screen.getAllByText(mockUserData.bio);
    expect(profileBio[0]).toBeInTheDocument();
  });

  it('should call the repositories API and display repository data on showProfile', async () => {
    fetch
      .mockResolvedValueOnce({
        json: async () => mockUserData, // Mock the user data
      })
      .mockResolvedValueOnce({
        json: async () => mockReposData, // Mock the repositories data
      });

    render(<HomeComponent />);

    // Simulate typing in the input
    const input = screen.getByPlaceholderText('username');
    fireEvent.change(input, { target: { value: 'testuser' } });

    // Wait for user data to load
    await waitFor(() => expect(fetch).toHaveBeenCalledTimes(1));

    // Simulate clicking the profile to load repositories
    const profileDiv = screen.getByAltText('image');
    fireEvent.click(profileDiv);

    // Wait for the repositories API call
    await waitFor(() => expect(fetch).toHaveBeenCalledTimes(2));

    // Check if repositories are displayed
    const repo1 = screen.getByText(mockReposData[0].name);
    const repo2 = screen.getByText(mockReposData[1].name);
    expect(repo1).toBeInTheDocument();
    expect(repo2).toBeInTheDocument();
  });
});
