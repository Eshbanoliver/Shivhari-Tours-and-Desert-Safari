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
        left: '24px',
        bottom: '30px',
        display: 'flex',
        flexDirection: 'column',
        gap: '16px',
        zIndex: 1000,
      }}>
        {/* WhatsApp Button */}
        <a 
          href="https://wa.me/919079037934" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="floating-btn wa-btn"
          style={{ 
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: '50px', 
            width: '60px', 
            height: '60px', 
            background: '#25D366', 
            boxShadow: '0 8px 24px rgba(37, 211, 102, 0.4)',
            transition: 'var(--transition-smooth)',
            overflow: 'hidden',
            cursor: 'pointer',
            border: 'none',
          }}
        >
          <MessageCircle size={28} color="white" />
        </a>

        {/* Call Button */}
        <a 
          href="tel:+919079037934" 
          className="floating-btn call-btn"
          style={{ 
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: '50px', 
            width: '60px', 
            height: '60px', 
            background: 'linear-gradient(135deg, var(--primary), #d86227)', 
            boxShadow: '0 8px 24px rgba(240, 123, 63, 0.4)',
            transition: 'var(--transition-smooth)',
            cursor: 'pointer',
            border: 'none',
          }}
        >
          <PhoneCall size={26} color="white" />
        </a>
      </div>

      {/* Right side: Scroll to Top */}
      {showScroll && (
        <div style={{
          position: 'fixed',
          right: '24px',
          bottom: '30px',
          zIndex: 1000,
        }} className="animate-fade-in">
          <button 
            onClick={scrollToTop} 
            className="glass-panel hover-lift" 
            style={{ 
              borderRadius: '50%', 
              width: '56px', 
              height: '56px', 
              padding: 0, 
              cursor: 'pointer', 
              display: 'flex', 
              justifyContent: 'center', 
              alignItems: 'center',
              border: '1px solid rgba(255, 255, 255, 0.15)',
              background: 'rgba(11, 15, 25, 0.8)',
              boxShadow: '0 8px 24px rgba(0, 0, 0, 0.3)',
            }}
          >
            <ArrowUp size={24} color="var(--primary)" />
          </button>
        </div>
      )}

      <style>{`
        .floating-btn:hover {
          transform: translateY(-5px) scale(1.05);
          box-shadow: 0 12px 30px rgba(0, 0, 0, 0.25) !important;
        }
      `}</style>
    </>
  );
};

export default FloatingButtons;
