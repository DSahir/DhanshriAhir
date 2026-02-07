import { useState } from 'react';
import './Header.css';

const navItems = ['About', 'Education', 'Experience', 'Projects', 'Contact'];

function Header({ activeSection, onNavigate }) {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleClick = (section) => {
    onNavigate(section);
    setMenuOpen(false);
  };

  return (
    <header className="header">
      <div className="header-container">
        <a className="header-logo" href="#about" onClick={() => handleClick('About')}>
          Dhanshri Ahir
        </a>
        <button
          className={`hamburger ${menuOpen ? 'open' : ''}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle navigation"
        >
          <span />
          <span />
          <span />
        </button>
        <nav className={`header-nav ${menuOpen ? 'open' : ''}`}>
          {navItems.map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className={`nav-link ${activeSection === item ? 'active' : ''}`}
              onClick={(e) => {
                e.preventDefault();
                handleClick(item);
              }}
            >
              {item}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}

export default Header;
