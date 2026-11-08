import { render, screen } from '@testing-library/react';
import App from './App';

test('displays the lab details and student information', () => {
  render(<App />);

  expect(screen.getByRole('img', { name: 'React logo' })).toBeInTheDocument();
  expect(screen.getByRole('heading', {
    level: 1,
    name: 'Welcome to Fullstack Development - I',
  })).toBeInTheDocument();
  expect(screen.getByRole('heading', {
    level: 2,
    name: 'React JS Programming Week09 Lab exercise',
  })).toBeInTheDocument();
  expect(screen.getByText('101574906')).toBeInTheDocument();
  expect(screen.getByText('Alikhan Zhilkibayev')).toBeInTheDocument();
  expect(screen.getByText('George Brown College, Toronto')).toBeInTheDocument();
});
