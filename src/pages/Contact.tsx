import { Phone, MapPin, Send, MessageCircle } from 'lucide-react';
import { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: 'jeep',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate submit
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', email: '', phone: '', service: 'jeep', message: '' });
    }, 3000);
  };

  return (
    <div style={{ padding: '40px 0 100px 0' }}>
      
      {/* Header */}
      <section className="section" style={{ textAlign: 'center', padding: '80px 5% 40px 5%' }}>
        <div className="container">
          <span style={{ color: 'var(--primary)', fontWeight: '600', textTransform: 'uppercase', letterSpacing: '2px' }}>Plan Your Trip</span>
          <h1 className="section-title" style={{ marginTop: '10px' }}>Get In Touch With Us</h1>
        </div>
      </section>

      {/* Main Grid */}
      <section className="container" style={{ padding: '0 5%' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '40px' }}>
          
          {/* Info Card */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
            <div className="glass-panel" style={{ padding: '40px' }}>
              <h3 style={{ fontSize: '1.6rem', marginBottom: '24px', color: '#fff' }}>Booking Office</h3>
              
              <div style={{ display: 'flex', gap: '16px', marginBottom: '24px' }}>
                <MapPin size={24} color="var(--primary)" style={{ flexShrink: 0 }} />
                <div>
                  <h4 style={{ color: '#fff', fontSize: '1.1rem', marginBottom: '6px' }}>Address</h4>
                  <p style={{ color: 'var(--text-muted)', lineHeight: '1.6' }}>
                    Shop no 05, Airforce Road,<br />
                    Jaisalmer, Rajasthan - 345001
                  </p>
                </div>
              </div>

              <div style={{ display: 'flex', gap: '16px', marginBottom: '24px' }}>
                <Phone size={24} color="var(--primary)" style={{ flexShrink: 0 }} />
                <div>
                  <h4 style={{ color: '#fff', fontSize: '1.1rem', marginBottom: '6px' }}>Phone Numbers</h4>
                  <p style={{ color: 'var(--text-muted)', lineHeight: '1.6' }}>
                    <a href="tel:+919079037934" style={{ transition: 'color 0.3s' }} className="contact-link">+91 9079037934</a><br />
                    <a href="tel:+919166306846" style={{ transition: 'color 0.3s' }} className="contact-link">+91 9166306846</a>
                  </p>
                </div>
              </div>
            </div>

            {/* Quick Links / WhatsApp Help */}
            <div className="glass-panel" style={{ padding: '30px', textAlign: 'center', background: 'rgba(37, 211, 102, 0.05)', borderColor: 'rgba(37, 211, 102, 0.2)' }}>
              <h4 style={{ marginBottom: '12px' }}>Need Instant Booking?</h4>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', marginBottom: '20px' }}>Chat directly with our booking executive on WhatsApp for quick discounts.</p>
              <a href="https://wa.me/919079037934" target="_blank" rel="noopener noreferrer" className="btn" style={{ background: '#25D366', color: 'white', width: '100%', justifyContent: 'center' }}>
                <MessageCircle size={20} /> Chat on WhatsApp
              </a>
            </div>
          </div>

          {/* Contact Form */}
          <div className="glass-panel" style={{ padding: '40px' }}>
            <h3 style={{ fontSize: '1.6rem', marginBottom: '24px', color: '#fff' }}>Send Inquiry Message</h3>
            
            {submitted ? (
              <div style={{ padding: '20px', borderRadius: '12px', background: 'rgba(40, 167, 69, 0.15)', border: '1px solid #28a745', color: '#28a745', textAlign: 'center' }}>
                <h4 style={{ color: '#28a745', marginBottom: '8px' }}>Inquiry Sent Successfully!</h4>
                <p style={{ fontSize: '0.95rem' }}>We will get back to you shortly on your provided details.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                <div>
                  <label style={{ display: 'block', marginBottom: '8px', fontSize: '0.9rem', color: 'var(--text-muted)' }}>Full Name</label>
                  <input 
                    type="text" 
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    style={{ width: '100%', padding: '14px', borderRadius: '10px', border: '1px solid rgba(255,255,255,0.08)', background: 'rgba(255,255,255,0.03)', color: '#fff', outline: 'none', transition: 'var(--transition-smooth)' }} 
                    className="form-input"
                  />
                </div>
                
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '15px' }}>
                  <div>
                    <label style={{ display: 'block', marginBottom: '8px', fontSize: '0.9rem', color: 'var(--text-muted)' }}>Phone Number</label>
                    <input 
                      type="tel" 
                      name="phone"
                      required
                      value={formData.phone}
                      onChange={handleChange}
                      style={{ width: '100%', padding: '14px', borderRadius: '10px', border: '1px solid rgba(255,255,255,0.08)', background: 'rgba(255,255,255,0.03)', color: '#fff', outline: 'none' }} 
                      className="form-input"
                    />
                  </div>
                  <div>
                    <label style={{ display: 'block', marginBottom: '8px', fontSize: '0.9rem', color: 'var(--text-muted)' }}>Email Address</label>
                    <input 
                      type="email" 
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      style={{ width: '100%', padding: '14px', borderRadius: '10px', border: '1px solid rgba(255,255,255,0.08)', background: 'rgba(255,255,255,0.03)', color: '#fff', outline: 'none' }} 
                      className="form-input"
                    />
                  </div>
                </div>

                <div>
                  <label style={{ display: 'block', marginBottom: '8px', fontSize: '0.9rem', color: 'var(--text-muted)' }}>Interested Service</label>
                  <select 
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    style={{ width: '100%', padding: '14px', borderRadius: '10px', border: '1px solid rgba(255,255,255,0.08)', background: '#111827', color: '#fff', outline: 'none' }}
                  >
                    <option value="jeep">Jeep Safari (Dune Bashing)</option>
                    <option value="camp">Luxury Desert Camp</option>
                    <option value="taxi">Sightseeing Taxi Tours</option>
                    <option value="combo">Combo All-in-One Tour</option>
                  </select>
                </div>

                <div>
                  <label style={{ display: 'block', marginBottom: '8px', fontSize: '0.9rem', color: 'var(--text-muted)' }}>Message / Special Request</label>
                  <textarea 
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    style={{ width: '100%', padding: '14px', borderRadius: '10px', border: '1px solid rgba(255,255,255,0.08)', background: 'rgba(255,255,255,0.03)', color: '#fff', outline: 'none', resize: 'vertical' }} 
                  ></textarea>
                </div>

                <button type="submit" className="btn btn-primary" style={{ justifyContent: 'center' }}>
                  <Send size={18} /> Send Inquiry
                </button>
              </form>
            )}
          </div>

        </div>
      </section>

      <style>{`
        .contact-link:hover {
          color: var(--primary) !important;
        }
        .form-input:focus {
          border-color: rgba(240, 123, 63, 0.5) !important;
          background: rgba(255,255,255,0.05) !important;
        }
      `}</style>
    </div>
  );
};

export default Contact;
