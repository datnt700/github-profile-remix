import { it, describe, expect } from 'vitest';
import { render, screen } from '@testing-library/react';

import { Repository } from '../../app/components/layout/Repository';

import { UserRepository } from '~/helpers/user-interface';

describe('Repository Component', () => {
  it('should render correction', () => {
    const mockDataRepository: UserRepository[] = [
      {
        forks: 123,
        license: { name: 'MIT' },
        updated_at: '2023-09-01T12:34:56Z',
        html_url: 'https://github.com/user/repo1',
        name: 'repo1',
        description: 'First mock repository',
        watchers: 150,
        id: '1',
      },
      {
        forks: 456,
        license: { name: 'Apache-2.0' },
        updated_at: '2023-09-05T10:20:30Z',
        html_url: 'https://github.com/user/repo2',
        name: 'repo2',
        description: 'Second mock repository',
        watchers: 300,
        id: '2',
      },
    ];
    render(<Repository dataRepository={mockDataRepository} />);

    mockDataRepository.map((repo) => {
      const repoName = screen.getByText(repo.name);
      expect(repoName).toBeInTheDocument();

      const repoDescription = screen.getByText(repo.description);
      expect(repoDescription).toBeInTheDocument();

      const forks = screen.getByText(repo.forks.toString());
      expect(forks).toBeInTheDocument();

      const watchers = screen.getByText(repo.watchers.toString());
      expect(watchers).toBeInTheDocument();

      const license = screen.getByText(repo.license.name);
      expect(license).toBeInTheDocument();

      const elements = screen.getAllByText(/days ago/);
      expect(elements[0]).toBeInTheDocument();
      expect(elements[1]).toBeInTheDocument();
    });
  });
});
