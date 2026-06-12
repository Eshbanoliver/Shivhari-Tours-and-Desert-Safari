import { Link, NavLink } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Testimonials', path: '/testimonials' },
    { name: 'Contact Us', path: '/contact' },
  ];

  return (
    <header className="glass-panel" style={{
      position: 'fixed',
      top: '10px',
      left: '5%',
      right: '5%',
      zIndex: 1000,
      padding: '15px 30px',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
    }}>
      <div className="logo" style={{ fontSize: '1.5rem', fontWeight: '800', color: 'var(--accent)' }}>
        <Link to="/">Shivhari Tours</Link>
      </div>

      {/* Desktop Nav */}
      <nav style={{ display: 'flex', gap: '30px' }} className="desktop-nav">
        {navLinks.map((link) => (
          <NavLink
            key={link.name}
            to={link.path}
            style={({ isActive }) => ({
              fontWeight: 600,
              color: isActive ? 'var(--primary)' : 'var(--text-dark)',
              transition: 'color 0.3s',
            })}
          >
            {link.name}
          </NavLink>
        ))}
      </nav>

      {/* Mobile Menu Button */}
      <div className="mobile-menu-btn" onClick={toggleMenu} style={{ display: 'none', cursor: 'pointer' }}>
        {isOpen ? <X /> : <Menu />}
      </div>

      {/* Basic inline style for mobile nav hiding - in a real app would use CSS media queries */}
      <style>{`
        @media (max-width: 768px) {
          .desktop-nav { display: none !important; }
          .mobile-menu-btn { display: block !important; }
          .mobile-nav { display: flex !important; }
        }
      `}</style>

      {/* Mobile Nav */}
      {isOpen && (
        <nav className="mobile-nav glass-panel" style={{
          display: 'none',
          position: 'absolute',
          top: '100%',
          left: 0,
          right: 0,
          flexDirection: 'column',
          padding: '20px',
          gap: '15px',
          marginTop: '10px',
        }}>
          {navLinks.map((link) => (
            <NavLink
              key={link.name}
              to={link.path}
              onClick={() => setIsOpen(false)}
              style={({ isActive }) => ({
                fontWeight: 600,
                color: isActive ? 'var(--primary)' : 'var(--text-dark)',
              })}
            >
              {link.name}
            </NavLink>
          ))}
        </nav>
      )}
    </header>
  );
};

export default Header;
