export interface UserRepository {
  forks: number;
  license: { name: string };
  updated_at: string;
  html_url: string;
  name: string;
  description: string;
  watchers: number;
  id: string;
}
