import { it, describe, expect } from 'vitest';
import { render, screen } from '@testing-library/react';

import { Profile } from '../../app/components/layout/Profile';

describe('Profile Component', () => {
  it('should render correction', () => {
    const mockLocation = 'USA';
    const mockFollower = 1000;
    const mockFollowing = 500;
    render(
      <Profile
        follower={mockFollower}
        following={mockFollowing}
        location={mockLocation}
      />
    );

    const image = screen.getByAltText('avatar');
    expect(image).toBeInTheDocument();

    const follower = screen.getByText(mockFollower);
    const following = screen.getByText(mockFollowing);
    const location = screen.getByText(mockLocation);
    expect(follower).toBeInTheDocument();
    expect(following).toBeInTheDocument();
    expect(location).toBeInTheDocument();
  });
});
