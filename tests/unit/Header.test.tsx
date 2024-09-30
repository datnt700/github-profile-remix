import { it, describe, expect, vi } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';

import { Header } from '../../app/components/layout/Header';

describe('Header Component', () => {
  // Mock các props
  const mockSetText = vi.fn();
  const mockShowProfile = vi.fn();

  const mockProps = {
    setText: mockSetText,
    avatarUrl: 'https://example.com/avatar.jpg',
    bio: 'A sample bio',
    name: 'John Doe',
    profileActive: true,
    showProfile: mockShowProfile,
  };

  it('should render avatar, bio, and name correctly', () => {
    render(<Header {...mockProps} />);

    // Kiểm tra avatar hiển thị đúng
    const avatar = screen.getByAltText('image');
    expect(avatar).toBeInTheDocument();
    expect(avatar).toHaveAttribute('src', mockProps.avatarUrl);

    // Kiểm tra name hiển thị đúng
    const name = screen.getByText(mockProps.name);
    expect(name).toBeInTheDocument();

    // Kiểm tra bio hiển thị đúng
    const bio = screen.getByText(mockProps.bio);
    expect(bio).toBeInTheDocument();
  });

  it('should call showProfile on click', () => {
    render(<Header {...mockProps} />);

    const repoItem = screen.getByTestId('repository-item');
    fireEvent.click(repoItem);

    expect(mockShowProfile).toHaveBeenCalledTimes(1);
  });
});
