import { Phone, MapPin, Send, MessageCircle, Mail, Clock, Compass } from 'lucide-react';
import { useState } from 'react';
import taxiImg from '../assets/taxi.png';

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
    <div style={{ paddingBottom: '0' }}>
      
      {/* Immersive Page Banner */}
      <section style={{ 
        position: 'relative', 
        height: '50vh', 
        minHeight: '400px',
        display: 'flex', 
        alignItems: 'center', 
        justifyContent: 'center',
        backgroundImage: `linear-gradient(to bottom, rgba(11, 15, 25, 0.7), var(--bg-color)), url(${taxiImg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed',
        textAlign: 'center',
        marginTop: '-80px'
      }}>
        <div className="container animate-fade-in" style={{ position: 'relative', zIndex: 1, padding: '0 5%', paddingTop: '80px' }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '10px', padding: '8px 24px', borderRadius: '30px', background: 'rgba(255,255,255,0.1)', backdropFilter: 'blur(10px)', border: '1px solid rgba(255,255,255,0.2)', marginBottom: '20px' }}>
            <Compass size={18} color="var(--primary)" />
            <span style={{ color: '#fff', fontWeight: '600', textTransform: 'uppercase', letterSpacing: '2px', fontSize: '0.85rem' }}>We Are Here To Help</span>
          </div>
          <h1 style={{ fontSize: 'clamp(3rem, 5vw, 4.5rem)', color: '#fff', textShadow: '0 10px 30px rgba(0,0,0,0.5)', marginBottom: '20px', lineHeight: 1.2, fontWeight: '800' }}>
            Let's Plan Your <span style={{ color: 'var(--primary)' }}>Journey</span>
          </h1>
          <p style={{ color: 'rgba(255,255,255,0.9)', fontSize: '1.2rem', maxWidth: '600px', margin: '0 auto', textShadow: '0 4px 10px rgba(0,0,0,0.3)' }}>
            Reach out to our local experts in Jaisalmer to customize your desert safari or book your stay.
          </p>
        </div>
      </section>

      {/* Main Grid */}
      <section className="section" style={{ position: 'relative', padding: '80px 5%' }}>
        {/* Background Glow */}
        <div style={{ position: 'absolute', top: '10%', right: '-10%', width: '40vw', height: '40vw', background: 'radial-gradient(circle, rgba(240, 123, 63, 0.05) 0%, transparent 60%)', filter: 'blur(80px)', pointerEvents: 'none', zIndex: 0 }}></div>

        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <div className="contact-grid">
            
            {/* Left: Contact Info */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '30px' }}>
              
              <div className="glass-panel info-card" style={{ padding: '40px', background: 'var(--card-bg)', position: 'relative', overflow: 'hidden' }}>
                {/* Accent Line */}
                <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '4px', background: 'linear-gradient(90deg, var(--primary), var(--secondary))' }}></div>
                
                <h3 style={{ fontSize: '1.8rem', marginBottom: '30px', color: 'var(--text-color)' }}>Booking Office</h3>
                
                <div className="info-row">
                  <div className="info-icon">
                    <MapPin size={22} color="var(--primary)" />
                  </div>
                  <div>
                    <h4 style={{ color: 'var(--text-color)', fontSize: '1.1rem', marginBottom: '5px' }}>Visit Us</h4>
                    <p style={{ color: 'var(--text-muted)', lineHeight: '1.6' }}>Shop no 05, Airforce Road,<br />Jaisalmer, Rajasthan - 345001</p>
                  </div>
                </div>

                <div className="info-row">
                  <div className="info-icon">
                    <Phone size={22} color="var(--primary)" />
                  </div>
                  <div>
                    <h4 style={{ color: 'var(--text-color)', fontSize: '1.1rem', marginBottom: '5px' }}>Call Us</h4>
                    <p style={{ color: 'var(--text-muted)', lineHeight: '1.6' }}>
                      <a href="tel:+919079037934" className="contact-link">+91 9079037934</a><br />
                      <a href="tel:+919166306846" className="contact-link">+91 9166306846</a>
                    </p>
                  </div>
                </div>

                <div className="info-row">
                  <div className="info-icon">
                    <Mail size={22} color="var(--primary)" />
                  </div>
                  <div>
                    <h4 style={{ color: 'var(--text-color)', fontSize: '1.1rem', marginBottom: '5px' }}>Email Us</h4>
                    <p style={{ color: 'var(--text-muted)', lineHeight: '1.6' }}>
                      <a href="mailto:booking@shivharitours.com" className="contact-link">booking@shivharitours.com</a>
                    </p>
                  </div>
                </div>
                
                <div className="info-row">
                  <div className="info-icon">
                    <Clock size={22} color="var(--primary)" />
                  </div>
                  <div>
                    <h4 style={{ color: 'var(--text-color)', fontSize: '1.1rem', marginBottom: '5px' }}>Working Hours</h4>
                    <p style={{ color: 'var(--text-muted)', lineHeight: '1.6' }}>24/7 Support Available for in-trip guests. Office open 9 AM - 9 PM.</p>
                  </div>
                </div>
              </div>

              {/* Quick WhatsApp Help */}
              <div className="glass-panel wa-card" style={{ padding: '35px', textAlign: 'center', background: 'rgba(37, 211, 102, 0.05)', border: '1px solid rgba(37, 211, 102, 0.2)' }}>
                <div style={{ width: '60px', height: '60px', borderRadius: '50%', background: '#25D366', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 20px auto', boxShadow: '0 10px 20px rgba(37,211,102,0.3)' }}>
                  <MessageCircle size={30} color="#fff" />
                </div>
                <h4 style={{ fontSize: '1.4rem', marginBottom: '12px', color: 'var(--text-color)' }}>Need Instant Booking?</h4>
                <p style={{ color: 'var(--text-muted)', fontSize: '1.05rem', marginBottom: '25px', lineHeight: '1.6' }}>Skip the form! Chat directly with our booking executive on WhatsApp for rapid assistance.</p>
                <a href="https://wa.me/919079037934" target="_blank" rel="noopener noreferrer" className="btn" style={{ background: '#25D366', color: 'white', width: '100%', justifyContent: 'center', fontSize: '1.1rem', padding: '15px' }}>
                  Chat on WhatsApp
                </a>
              </div>
            </div>

            {/* Right: Contact Form */}
            <div className="glass-panel form-card" style={{ padding: '50px 40px', background: 'var(--card-bg)' }}>
              <h3 style={{ fontSize: '2.2rem', marginBottom: '10px', color: 'var(--text-color)' }}>Send Inquiry</h3>
              <p style={{ color: 'var(--text-muted)', marginBottom: '30px', fontSize: '1.05rem' }}>Fill out the form below and we'll get back to you with a customized itinerary.</p>
              
              {submitted ? (
                <div className="animate-fade-in" style={{ padding: '40px 20px', borderRadius: '20px', background: 'rgba(40, 167, 69, 0.1)', border: '1px solid #28a745', textAlign: 'center' }}>
                  <div style={{ width: '80px', height: '80px', borderRadius: '50%', background: '#28a745', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 20px auto' }}>
                    <Send size={40} color="#fff" />
                  </div>
                  <h4 style={{ color: '#28a745', fontSize: '1.8rem', marginBottom: '15px' }}>Message Sent!</h4>
                  <p style={{ color: 'var(--text-color)', fontSize: '1.1rem', lineHeight: '1.6' }}>Thank you for choosing Shivhari Tours. Our team will contact you shortly.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '25px' }}>
                  <div>
                    <label style={{ display: 'block', marginBottom: '10px', fontSize: '0.95rem', color: 'var(--text-color)', fontWeight: '600' }}>Full Name</label>
                    <input 
                      type="text" 
                      name="name"
                      required
                      placeholder="John Doe"
                      value={formData.name}
                      onChange={handleChange}
                      className="styled-input"
                    />
                  </div>
                  
                  <div className="form-grid-2">
                    <div>
                      <label style={{ display: 'block', marginBottom: '10px', fontSize: '0.95rem', color: 'var(--text-color)', fontWeight: '600' }}>Phone Number</label>
                      <input 
                        type="tel" 
                        name="phone"
                        required
                        placeholder="+91 98765 43210"
                        value={formData.phone}
                        onChange={handleChange}
                        className="styled-input"
                      />
                    </div>
                    <div>
                      <label style={{ display: 'block', marginBottom: '10px', fontSize: '0.95rem', color: 'var(--text-color)', fontWeight: '600' }}>Email Address</label>
                      <input 
                        type="email" 
                        name="email"
                        placeholder="john@example.com"
                        value={formData.email}
                        onChange={handleChange}
                        className="styled-input"
                      />
                    </div>
                  </div>

                  <div>
                    <label style={{ display: 'block', marginBottom: '10px', fontSize: '0.95rem', color: 'var(--text-color)', fontWeight: '600' }}>Interested Service</label>
                    <div className="select-wrapper">
                      <select 
                        name="service"
                        value={formData.service}
                        onChange={handleChange}
                        className="styled-input"
                        style={{ cursor: 'pointer', appearance: 'none' }}
                      >
                        <option value="jeep">Jeep Safari (Dune Bashing)</option>
                        <option value="camp">Luxury Desert Camp</option>
                        <option value="hotel">Heritage Hotel Stay</option>
                        <option value="resort">Desert Resort Experience</option>
                        <option value="taxi">Sightseeing Taxi Tours</option>
                        <option value="combo">Combo All-in-One Tour</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label style={{ display: 'block', marginBottom: '10px', fontSize: '0.95rem', color: 'var(--text-color)', fontWeight: '600' }}>Message / Special Request</label>
                    <textarea 
                      name="message"
                      rows={5}
                      placeholder="Tell us about your trip dates, number of people, and any special requirements..."
                      value={formData.message}
                      onChange={handleChange}
                      className="styled-input"
                      style={{ resize: 'vertical' }} 
                    ></textarea>
                  </div>

                  <button type="submit" className="btn btn-primary submit-btn">
                    <Send size={20} /> Send Inquiry Now
                  </button>
                </form>
              )}
            </div>

          </div>
        </div>
      </section>

      {/* Embedded Map Visual placeholder */}
      <section style={{ height: '400px', width: '100%', background: 'linear-gradient(rgba(11,15,25,0.8), rgba(11,15,25,0.9)), url(https://images.unsplash.com/photo-1524661135-423995f22d0b?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80)', backgroundPosition: 'center', backgroundSize: 'cover', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <div style={{ textAlign: 'center', padding: '20px' }}>
          <div style={{ width: '60px', height: '60px', borderRadius: '50%', background: 'var(--primary)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 20px auto', boxShadow: '0 0 30px rgba(240, 123, 63, 0.5)' }}>
            <MapPin size={30} color="#fff" />
          </div>
          <h3 style={{ color: '#fff', fontSize: '2rem', marginBottom: '10px' }}>Visit Our Office</h3>
          <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '1.1rem' }}>We are located in the heart of Jaisalmer city.</p>
        </div>
      </section>

      <style>{`
        .contact-grid {
          display: grid;
          grid-template-columns: 1fr 1.5fr;
          gap: 50px;
          align-items: start;
        }

        .info-row {
          display: flex;
          gap: 20px;
          margin-bottom: 30px;
          align-items: flex-start;
        }
        .info-row:last-child {
          margin-bottom: 0;
        }

        .info-icon {
          width: 50px;
          height: 50px;
          border-radius: 15px;
          background: rgba(240, 123, 63, 0.1);
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          transition: all 0.3s ease;
        }

        .info-row:hover .info-icon {
          background: var(--primary);
        }
        .info-row:hover .info-icon svg {
          stroke: #fff;
        }

        .contact-link {
          color: var(--text-muted);
          text-decoration: none;
          transition: color 0.3s ease;
        }
        .contact-link:hover {
          color: var(--primary) !important;
        }

        .styled-input {
          width: 100%;
          padding: 16px 20px;
          border-radius: 12px;
          border: 1px solid var(--glass-border);
          background: rgba(128, 128, 128, 0.05);
          color: var(--text-color);
          font-family: inherit;
          font-size: 1rem;
          outline: none;
          transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
        }
        
        .styled-input::placeholder {
          color: var(--text-muted);
          opacity: 0.6;
        }

        .styled-input:focus {
          border-color: var(--primary);
          background: rgba(128, 128, 128, 0.1);
          box-shadow: 0 0 0 4px rgba(240, 123, 63, 0.1);
        }

        .submit-btn {
          margin-top: 10px;
          padding: 18px;
          justify-content: center;
          font-size: 1.1rem;
          box-shadow: 0 10px 25px rgba(240, 123, 63, 0.3);
        }

        .info-card, .wa-card, .form-card {
          transition: transform 0.4s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.4s cubic-bezier(0.16, 1, 0.3, 1);
        }
        
        .form-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 20px 40px rgba(0,0,0,0.08);
        }

        /* Custom Dropdown Arrow */
        .select-wrapper {
          position: relative;
        }
        .select-wrapper::after {
          content: "▼";
          font-size: 0.8rem;
          color: var(--primary);
          position: absolute;
          right: 20px;
          top: 50%;
          transform: translateY(-50%);
          pointer-events: none;
        }

        @media(max-width: 992px) {
          .contact-grid {
            grid-template-columns: 1fr;
          }
          .form-card {
            padding: 30px 20px;
          }
        }
      `}</style>
    </div>
  );
};

export default Contact;
