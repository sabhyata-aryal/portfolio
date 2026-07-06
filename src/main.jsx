import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import './style.css';

const savedTheme = (() => {
  try {
    return localStorage.getItem('sa-portfolio-theme');
  } catch {
    return null;
  }
})();

const prefersDark =
  !savedTheme &&
  window.matchMedia &&
  window.matchMedia('(prefers-color-scheme: dark)').matches;

if (savedTheme === 'dark' || prefersDark) {
  document.body.classList.add('theme-dark');
}

document.documentElement.classList.remove('theme-dark-init');

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
