import { render, screen } from '@testing-library/react';

//import MyComponent from '~/components/MyComponent';
import MyComponent from '../../app/components/MyComponent';

test('renders the correct text', () => {
  render(<MyComponent />);
  expect(screen.getByText(/hello world/i)).toBeInTheDocument();
});
