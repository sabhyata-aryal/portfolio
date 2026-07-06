import { navLinks } from '../data/content';

export default function Nav({ onToggleTheme }) {
  return (
    <nav>
      <a href="#hero" className="nav-logo" data-cursor="link">
        <span className="logo-mark">SA</span>
        <span className="logo-word">Sabhyata Aryal</span>
      </a>
      <div className="nav-right">
        <ul className="nav-links">
          {navLinks.map(({ href, label }) => (
            <li key={href}>
              <a href={href} data-cursor="link">
                {label}
              </a>
            </li>
          ))}
        </ul>
        <button
          type="button"
          id="themeToggle"
          className="theme-toggle"
          data-cursor="link"
          aria-label="Toggle dark mode"
          onClick={onToggleTheme}
        >
          <span className="theme-icon theme-icon-sun">☀</span>
          <span className="theme-icon theme-icon-moon">☾</span>
        </button>
      </div>
    </nav>
  );
}
