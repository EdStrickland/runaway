import { render, screen } from '@testing-library/react';
import Process from './Process';

test('renders learn react link', () => {
  render(<Process />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
