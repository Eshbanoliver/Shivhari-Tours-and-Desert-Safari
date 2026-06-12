const Footer = () => {
  return (
    <footer className="glass-panel-dark" style={{
      marginTop: '80px',
      padding: '40px 20px',
      textAlign: 'center',
      borderRadius: '16px 16px 0 0',
      borderBottom: 'none',
      borderLeft: 'none',
      borderRight: 'none',
    }}>
      <div className="container">
        <p style={{ margin: 0, fontSize: '1rem', lineHeight: '1.6' }}>
          ©️ Copyright 2026 | Shivhari Tours and Desert Safari | All Rights Reserved | Powered by <a href="https://www.futurexdigitalmarketing.com/" target="_blank" rel="noopener noreferrer" style={{ color: '#28a745', fontWeight: 'bold' }}>Future X Digital Marketing</a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
