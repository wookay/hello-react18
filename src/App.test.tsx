import ReactDOM from 'react-dom';
import { screen, act } from '@testing-library/react';
import App from './App';


test('renders learn react link', async () => {
  const container = document.createElement('div');
  document.body.appendChild(container);
  const root = ReactDOM.createRoot(container);
  await act(async () => {
    root.render(<App />);
  });
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
