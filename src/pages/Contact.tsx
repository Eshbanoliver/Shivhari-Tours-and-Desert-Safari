const Contact = () => {
  return (
    <div className="section container animate-fade-in">
      <h1 className="section-title">Contact Us</h1>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '40px' }}>
        <div className="glass-panel" style={{ padding: '40px' }}>
          <h3 style={{ marginBottom: '20px', color: 'var(--primary)' }}>Get In Touch</h3>
          <p style={{ marginBottom: '15px' }}><strong>Phone:</strong> <br/> +91 9079037934 <br/> +91 9166306846</p>
          <p style={{ marginBottom: '15px' }}><strong>Address:</strong> <br/> Shop no 05, Airforce Road,<br/> Jaisalmer 345001, Rajasthan</p>
        </div>
        <div className="glass-panel" style={{ padding: '40px' }}>
          <h3 style={{ marginBottom: '20px', color: 'var(--primary)' }}>Send a Message</h3>
          <form style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
            <input type="text" placeholder="Your Name" style={{ padding: '12px', borderRadius: '8px', border: '1px solid var(--glass-border)', background: 'rgba(255,255,255,0.5)', outline: 'none' }} />
            <input type="email" placeholder="Your Email" style={{ padding: '12px', borderRadius: '8px', border: '1px solid var(--glass-border)', background: 'rgba(255,255,255,0.5)', outline: 'none' }} />
            <textarea placeholder="Your Message" rows={4} style={{ padding: '12px', borderRadius: '8px', border: '1px solid var(--glass-border)', background: 'rgba(255,255,255,0.5)', resize: 'vertical', outline: 'none' }}></textarea>
            <button type="button" className="btn btn-primary" style={{ marginTop: '10px' }}>Submit</button>
          </form>
        </div>
      </div>
    </div>
  );
};
export default Contact;
