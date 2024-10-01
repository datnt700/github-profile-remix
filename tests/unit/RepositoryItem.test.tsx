import { it, describe, expect } from 'vitest';
import { render, screen } from '@testing-library/react';

import { RepositoryItem } from '../../app/components/common/RepositoryItem';

describe('Repository Item Component', () => {
  it('should render correction', () => {
    const mockName = 'hello';
    const mockDescription = 'github never die';
    const mockWatchers = 100;
    const mockForks = 0;
    const mockUpdateAt = '2023-09-05T10:20:30Z';
    const mockLicense = { name: 'MIT' };
    const mockHtmlUrl = 'https://github.com/datnt700/repo';
    render(
      <RepositoryItem
        name={mockName}
        description={mockDescription}
        forks={mockForks}
        watchers={mockWatchers}
        license={mockLicense}
        htmlUrl={mockHtmlUrl}
        updateAt={mockUpdateAt}
      />
    );

    const nameElement = screen.getByText(mockName);
    expect(nameElement).toBeInTheDocument();

    const descriptionElement = screen.getByText(mockDescription);
    expect(descriptionElement).toBeInTheDocument();

    const forksElement = screen.getByText(mockForks.toString());
    expect(forksElement).toBeInTheDocument();

    const watchersElement = screen.getByText(mockWatchers.toString());
    expect(watchersElement).toBeInTheDocument();

    const licenseElement = screen.getByText(mockLicense.name);
    expect(licenseElement).toBeInTheDocument();

    const linkElement = screen.getByRole('link');
    expect(linkElement).toHaveAttribute('href', mockHtmlUrl);

    const updateAtElement = screen.getByTestId('updateAt');
    expect(updateAtElement).toBeInTheDocument();
  });

  it('should render correctly with null and undefied', () => {
    const mockName = 'hello';
    const mockDescription = 'github never die';
    const mockWatchers = 100;
    const mockForks = 100;

    // Render component without htmlUrl
    render(
      <RepositoryItem
        name={mockName}
        description={mockDescription}
        forks={mockForks}
        watchers={mockWatchers}
        license={{ name: null }}
        htmlUrl={undefined}
        updateAt={''}
      />
    );
    const licenseField = screen.queryByText('MIT');
    expect(licenseField).not.toBeInTheDocument();

    const linkElement = screen.queryByRole('link');
    expect(linkElement).not.toBeInTheDocument();

    const updateAtElement = screen.queryByText(/5 days ago/);
    expect(updateAtElement).not.toBeInTheDocument();
  });
});
