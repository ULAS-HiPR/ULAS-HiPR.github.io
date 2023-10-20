import { render, screen } from '@testing-library/react';
import App from './App';

test('renders Team title', () => {
  render(<App />);
  const linkElement = screen.getByText(/ULAS HiPR/i);
  expect(linkElement).toBeInTheDocument();
});
