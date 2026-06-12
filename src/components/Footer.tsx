import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail } from 'lucide-react';
import logoImg from '../assets/logo.png';

const Footer = () => {
  return (
    <footer className="glass-panel-dark" style={{
      marginTop: '80px',
      padding: '60px 5% 40px 5%',
      borderRadius: '24px 24px 0 0',
      borderBottom: 'none',
      borderLeft: 'none',
      borderRight: 'none',
      color: '#e2e8f0',
    }}>
      <div className="container">
        {/* Footer Columns */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
          gap: '40px',
          marginBottom: '50px',
          textAlign: 'left'
        }}>
          {/* Col 1: About */}
          <div>
            <h3 style={{ fontSize: '1.5rem', fontWeight: '800', marginBottom: '20px', display: 'flex', alignItems: 'center', gap: '10px' }}>
              <img src={logoImg} alt="Shivhari Logo" style={{ height: '36px', width: 'auto', borderRadius: '4px', objectFit: 'contain' }} />
              <div><span style={{ color: 'var(--primary)' }}>Shivhari</span> Tours</div>
            </h3>
            <p style={{ fontSize: '0.95rem', color: '#cbd5e1', lineHeight: '1.7' }}>
              Your ultimate gateway to Jaisalmer's Thar Desert. Enjoy thrilling dune bashing, luxurious desert stays, and sightseeing tours with local guides.
            </p>
          </div>

          {/* Col 2: Quick Links */}
          <div>
            <h4 style={{ color: '#fff', fontSize: '1.1rem', marginBottom: '20px', fontWeight: '600' }}>Quick Links</h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', fontSize: '0.95rem' }}>
              <Link to="/" style={{ color: '#cbd5e1', transition: 'color 0.3s' }} className="footer-link">Home</Link>
              <Link to="/about" style={{ color: '#cbd5e1', transition: 'color 0.3s' }} className="footer-link">About Us</Link>
              <Link to="/services" style={{ color: '#cbd5e1', transition: 'color 0.3s' }} className="footer-link">Our Services</Link>
              <Link to="/testimonials" style={{ color: '#cbd5e1', transition: 'color 0.3s' }} className="footer-link">Testimonials</Link>
              <Link to="/contact" style={{ color: '#cbd5e1', transition: 'color 0.3s' }} className="footer-link">Contact Us</Link>
            </div>
          </div>

          {/* Col 3: Services */}
          <div>
            <h4 style={{ color: '#fff', fontSize: '1.1rem', marginBottom: '20px', fontWeight: '600' }}>Our Services</h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', fontSize: '0.95rem' }}>
              <Link to="/services" style={{ color: '#cbd5e1', transition: 'color 0.3s' }} className="footer-link">Jeep Safari</Link>
              <Link to="/services" style={{ color: '#cbd5e1', transition: 'color 0.3s' }} className="footer-link">Desert Camp Stay</Link>
              <Link to="/services" style={{ color: '#cbd5e1', transition: 'color 0.3s' }} className="footer-link">Taxi Sightseeing</Link>
              <Link to="/services" style={{ color: '#cbd5e1', transition: 'color 0.3s' }} className="footer-link">Camel Ride Safari</Link>
            </div>
          </div>

          {/* Col 4: Contact info */}
          <div>
            <h4 style={{ color: '#fff', fontSize: '1.1rem', marginBottom: '20px', fontWeight: '600' }}>Get In Touch</h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', fontSize: '0.95rem' }}>
              <div style={{ display: 'flex', gap: '10px', alignItems: 'flex-start' }}>
                <MapPin size={18} color="var(--primary)" style={{ flexShrink: 0, marginTop: '3px' }} />
                <span style={{ color: '#cbd5e1' }}>Shop no 05, Airforce Road, Jaisalmer - 345001</span>
              </div>
              <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
                <Phone size={18} color="var(--primary)" style={{ flexShrink: 0 }} />
                <span style={{ color: '#cbd5e1' }}>
                  <a href="tel:+919079037934" className="footer-link">+91 9079037934</a>, <br />
                  <a href="tel:+919166306846" className="footer-link">+91 9166306846</a>
                </span>
              </div>
              <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
                <Mail size={18} color="var(--primary)" style={{ flexShrink: 0 }} />
                <span style={{ color: '#cbd5e1' }}>
                  <a href="mailto:yashvyas7773@gmail.com" className="footer-link">yashvyas7773@gmail.com</a>
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div style={{ borderTop: '1px solid rgba(255,255,255,0.08)', marginBottom: '30px' }}></div>

        {/* Bottom copyright */}
        <p style={{ margin: 0, fontSize: '0.95rem', lineHeight: '1.6', color: '#e2e8f0', textAlign: 'center' }}>
          ©️ Copyright 2026 | <Link to="/" className="footer-link" style={{ color: '#e2e8f0', textDecoration: 'none', fontWeight: '600' }}>Shivhari Tours and Desert Safari</Link> | All Rights Reserved | Powered by <a href="https://www.futurexdigitalmarketing.com/" target="_blank" rel="noopener noreferrer" style={{ color: '#28a745', fontWeight: 'bold' }}>Future X Digital Marketing</a>
        </p>
      </div>

      <style>{`
        .footer-link:hover {
          color: var(--primary) !important;
        }
      `}</style>
    </footer>
  );
};

export default Footer;
