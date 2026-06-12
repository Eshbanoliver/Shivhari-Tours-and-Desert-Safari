import { MessageCircle, PhoneCall, ArrowUp } from 'lucide-react';
import { useState, useEffect } from 'react';

const FloatingButtons = () => {
  const [showScroll, setShowScroll] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScroll(window.scrollY > 300);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      {/* Left side: WhatsApp & Call */}
      <div style={{
        position: 'fixed',
        left: '20px',
        bottom: '30px',
        display: 'flex',
        flexDirection: 'column',
        gap: '15px',
        zIndex: 1000,
      }}>
        <a href="https://wa.me/919079037934" target="_blank" rel="noopener noreferrer" className="btn" style={{ borderRadius: '50%', width: '60px', height: '60px', padding: 0, background: '#25D366', boxShadow: '0 4px 15px rgba(37, 211, 102, 0.4)' }}>
          <MessageCircle size={28} color="white" />
        </a>
        <a href="tel:+919079037934" className="btn btn-primary" style={{ borderRadius: '50%', width: '60px', height: '60px', padding: 0 }}>
          <PhoneCall size={28} color="white" />
        </a>
      </div>

      {/* Right side: Scroll to Top */}
      {showScroll && (
        <div style={{
          position: 'fixed',
          right: '20px',
          bottom: '30px',
          zIndex: 1000,
        }} className="animate-fade-in">
          <button onClick={scrollToTop} className="glass-panel" style={{ borderRadius: '50%', width: '50px', height: '50px', padding: 0, cursor: 'pointer', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <ArrowUp size={24} color="var(--accent)" />
          </button>
        </div>
      )}
    </>
  );
};

export default FloatingButtons;
