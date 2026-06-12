import { Link, NavLink } from 'react-router-dom';
import { Menu, X, Phone } from 'lucide-react';
import { useState, useEffect } from 'react';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setIsOpen(!isOpen);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Testimonials', path: '/testimonials' },
    { name: 'Contact Us', path: '/contact' },
  ];

  return (
    <header 
      className="glass-panel" 
      style={{
        position: 'fixed',
        top: scrolled ? '15px' : '25px',
        left: '5%',
        right: '5%',
        zIndex: 1000,
        padding: scrolled ? '12px 30px' : '20px 40px',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        background: scrolled ? 'rgba(11, 15, 25, 0.85)' : 'rgba(11, 15, 25, 0.4)',
        borderColor: scrolled ? 'rgba(240, 123, 63, 0.25)' : 'rgba(255, 255, 255, 0.08)',
        transition: 'var(--transition-smooth)',
        borderRadius: '50px',
      }}
    >
      <div className="logo" style={{ display: 'flex', alignItems: 'center' }}>
        <Link to="/" style={{ fontSize: '1.5rem', fontWeight: '800', display: 'flex', gap: '8px', alignItems: 'center' }}>
          <span style={{ color: 'var(--primary)' }}>Shivhari</span>
          <span style={{ color: '#fff', fontWeight: '300', fontSize: '1.1rem', letterSpacing: '2px', borderLeft: '1px solid rgba(255,255,255,0.2)', paddingLeft: '8px' }}>TOURS</span>
        </Link>
      </div>

      {/* Desktop Nav */}
      <nav style={{ display: 'flex', gap: '35px', alignItems: 'center' }} className="desktop-nav">
        {navLinks.map((link) => (
          <NavLink
            key={link.name}
            to={link.path}
            style={({ isActive }) => ({
              fontWeight: 500,
              fontSize: '0.95rem',
              color: isActive ? 'var(--primary)' : '#cbd5e1',
              transition: 'color 0.3s',
              position: 'relative',
              padding: '6px 0',
            })}
          >
            {link.name}
          </NavLink>
        ))}
        <a href="tel:+919079037934" className="btn btn-primary" style={{ padding: '8px 20px', borderRadius: '30px', fontSize: '0.85rem' }}>
          <Phone size={14} /> Call Now
        </a>
      </nav>

      {/* Mobile Menu Button */}
      <div className="mobile-menu-btn" onClick={toggleMenu} style={{ display: 'none', cursor: 'pointer', color: '#fff' }}>
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </div>

      <style>{`
        @media (max-width: 992px) {
          .desktop-nav { display: none !important; }
          .mobile-menu-btn { display: block !important; }
        }
      `}</style>

      {/* Mobile Nav */}
      {isOpen && (
        <nav className="glass-panel" style={{
          position: 'absolute',
          top: '120%',
          left: '0',
          right: '0',
          display: 'flex',
          flexDirection: 'column',
          padding: '24px',
          gap: '20px',
          borderRadius: '24px',
          background: 'rgba(11, 15, 25, 0.95)',
          border: '1px solid rgba(240, 123, 63, 0.25)',
        }}>
          {navLinks.map((link) => (
            <NavLink
              key={link.name}
              to={link.path}
              onClick={() => setIsOpen(false)}
              style={({ isActive }) => ({
                fontWeight: 600,
                fontSize: '1.1rem',
                color: isActive ? 'var(--primary)' : '#f1f5f9',
                paddingBottom: '8px',
                borderBottom: '1px solid rgba(255,255,255,0.05)',
              })}
            >
              {link.name}
            </NavLink>
          ))}
          <a href="tel:+919079037934" className="btn btn-primary" style={{ borderRadius: '12px', width: '100%' }} onClick={() => setIsOpen(false)}>
            <Phone size={18} /> Call Now
          </a>
        </nav>
      )}
    </header>
  );
};

export default Header;
