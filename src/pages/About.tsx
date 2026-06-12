import { Shield, Compass, Calendar, Award, MapPin, Users, Sun } from 'lucide-react';
import campImg from '../assets/desert_camp.png';
import { Link } from 'react-router-dom';
import heroImg from '../assets/hero.png';
import jeepImg from '../assets/jeep_safari.png';

const About = () => {
  return (
    <div style={{ paddingBottom: '0' }}>
      
      {/* Immersive Page Banner */}
      <section style={{ 
        position: 'relative', 
        height: '60vh', 
        minHeight: '400px',
        display: 'flex', 
        alignItems: 'center', 
        justifyContent: 'center',
        backgroundImage: `linear-gradient(to bottom, rgba(11, 15, 25, 0.4), var(--bg-color)), url(${heroImg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed',
        textAlign: 'center',
        marginTop: '-80px' // Pull up behind the transparent navbar
      }}>
        <div className="container animate-fade-in" style={{ position: 'relative', zIndex: 1, padding: '0 5%', paddingTop: '80px' }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '10px', padding: '8px 24px', borderRadius: '30px', background: 'rgba(255,255,255,0.1)', backdropFilter: 'blur(10px)', border: '1px solid rgba(255,255,255,0.2)', marginBottom: '20px' }}>
            <Sun size={18} color="var(--primary)" />
            <span style={{ color: '#fff', fontWeight: '600', textTransform: 'uppercase', letterSpacing: '2px', fontSize: '0.85rem' }}>Our History & Values</span>
          </div>
          <h1 style={{ fontSize: 'clamp(3rem, 5vw, 4.5rem)', color: '#fff', textShadow: '0 10px 30px rgba(0,0,0,0.5)', marginBottom: '20px', lineHeight: 1.2, fontWeight: '800' }}>
            The Spirit of the <span style={{ color: 'var(--primary)' }}>Thar Desert</span>
          </h1>
          <p style={{ color: 'rgba(255,255,255,0.9)', fontSize: '1.2rem', maxWidth: '600px', margin: '0 auto', textShadow: '0 4px 10px rgba(0,0,0,0.3)' }}>
            Discover the story behind Jaisalmer's most trusted desert safari and luxury camp experience.
          </p>
        </div>
      </section>

      {/* Main Intro with 3D Image Layout */}
      <section className="section" style={{ position: 'relative', padding: '120px 5%' }}>
        {/* Abstract Glow */}
        <div style={{ position: 'absolute', top: '10%', left: '-10%', width: '40vw', height: '40vw', background: 'radial-gradient(circle, rgba(240, 123, 63, 0.05) 0%, transparent 60%)', filter: 'blur(80px)', zIndex: 0 }}></div>
        
        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <div className="about-grid">
            
            {/* Left: Interactive Image Collage */}
            <div className="about-images" style={{ position: 'relative', height: '500px' }}>
              <div className="glass-panel main-img" style={{ position: 'absolute', top: 0, left: 0, width: '80%', height: '80%', padding: '10px', zIndex: 2, transform: 'rotate(-3deg)', transition: 'transform 0.5s ease', background: 'var(--card-bg)' }}>
                <img src={campImg} alt="Jaisalmer Sam Sand Dunes" style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '10px' }} />
              </div>
              <div className="glass-panel shadow-img" style={{ position: 'absolute', bottom: 0, right: 0, width: '60%', height: '60%', padding: '10px', zIndex: 1, transform: 'rotate(5deg)', transition: 'transform 0.5s ease', background: 'var(--card-bg)' }}>
                <img src={heroImg} alt="Camel Safari" style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '10px', filter: 'brightness(0.7)' }} />
              </div>
              
              {/* Floating Stat Badge */}
              <div className="floating-badge glass-panel" style={{ position: 'absolute', top: '40%', right: '-5%', zIndex: 3, padding: '20px', borderRadius: '20px', textAlign: 'center', background: 'var(--card-bg)', border: '1px solid var(--primary)', boxShadow: '0 20px 40px rgba(240,123,63,0.2)', animation: 'float 6s ease-in-out infinite' }}>
                <div style={{ fontSize: '2.5rem', fontWeight: '800', background: 'var(--title-gradient)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>10+</div>
                <div style={{ fontSize: '0.9rem', color: 'var(--text-color)', fontWeight: '600', textTransform: 'uppercase' }}>Years Experience</div>
              </div>
            </div>
            
            {/* Right: Text Content */}
            <div className="about-text" style={{ padding: '20px 0' }}>
              <h2 className="section-title" style={{ textAlign: 'left', fontSize: '2.8rem', marginBottom: '30px' }}>Crafting Desert Dreams Since 2014</h2>
              <p style={{ color: 'var(--text-muted)', fontSize: '1.15rem', lineHeight: '1.8', marginBottom: '25px', position: 'relative', paddingLeft: '20px', borderLeft: '4px solid var(--primary)' }}>
                Shivhari Tours and Desert Safari was established with a singular vision: to connect adventure seekers with the deep cultural heart of the Thar Desert. Based out of our central booking office on Airforce Road in Jaisalmer, we help thousands of guests experience the true desert lifestyle every year.
              </p>
              <p style={{ color: 'var(--text-muted)', fontSize: '1.1rem', lineHeight: '1.8', marginBottom: '40px' }}>
                We take pride in our 100% safety record across all dune bashing jeep rides and camel safaris. Our luxury camps are curated to offer high comfort while showcasing spectacular Rajasthani folk dances, music, and local gourmet cuisine under open skies.
              </p>
              
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
                <div className="glass-panel stat-card" style={{ padding: '20px', display: 'flex', alignItems: 'center', gap: '15px' }}>
                  <div style={{ width: '50px', height: '50px', borderRadius: '50%', background: 'rgba(240,123,63,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <Users size={24} color="var(--primary)" />
                  </div>
                  <div>
                    <h4 style={{ fontSize: '1.2rem', marginBottom: '5px' }}>5,000+</h4>
                    <span style={{ fontSize: '0.85rem', color: 'var(--text-muted)', textTransform: 'uppercase' }}>Happy Guests</span>
                  </div>
                </div>
                <div className="glass-panel stat-card" style={{ padding: '20px', display: 'flex', alignItems: 'center', gap: '15px' }}>
                  <div style={{ width: '50px', height: '50px', borderRadius: '50%', background: 'rgba(255,212,96,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <MapPin size={24} color="var(--secondary)" />
                  </div>
                  <div>
                    <h4 style={{ fontSize: '1.2rem', marginBottom: '5px' }}>Top Rated</h4>
                    <span style={{ fontSize: '0.85rem', color: 'var(--text-muted)', textTransform: 'uppercase' }}>In Jaisalmer</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Features Grid */}
      <section className="section" style={{ padding: '120px 5%', background: 'linear-gradient(180deg, var(--bg-color) 0%, rgba(240,123,63,0.03) 100%)', borderTop: '1px solid var(--glass-border)' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '60px' }}>
            <span style={{ color: 'var(--primary)', fontWeight: '800', textTransform: 'uppercase', letterSpacing: '2px', fontSize: '0.9rem' }}>The Shivhari Standard</span>
            <h2 className="section-title" style={{ marginTop: '10px' }}>What Defines Our Tours</h2>
          </div>
          
          <div className="features-grid">
            {[
              { icon: <Shield size={36} color="#fff" />, title: "Safety Assured", desc: "All desert safaris are accompanied by experienced drivers and support vehicles with first-aid kits.", color: '#f07b3f' },
              { icon: <Compass size={36} color="#fff" />, title: "Authentic Experience", desc: "Local Rajasthani artists, local food cooks, and guides native to the Sam dunes area.", color: '#ffd460' },
              { icon: <Calendar size={36} color="#fff" />, title: "Flexible Bookings", desc: "Easily modify your travel itineraries or timings by contacting our friendly booking desk.", color: '#2d4059' },
              { icon: <Award size={36} color="#fff" />, title: "Award Winning", desc: "Consistently rated 5 stars by Jaisalmer tourists for hospitality, hygiene, and reliability.", color: '#ea5455' }
            ].map((item, i) => (
              <div key={i} className="glass-panel feature-card" style={{ padding: '40px 30px', textAlign: 'center', position: 'relative', overflow: 'hidden', background: 'var(--card-bg)' }}>
                <div className="feature-bg-glow" style={{ position: 'absolute', top: '0', left: '0', width: '100%', height: '100%', background: `radial-gradient(circle at center, ${item.color}20 0%, transparent 70%)`, opacity: 0, transition: 'opacity 0.5s ease', pointerEvents: 'none' }}></div>
                
                <div className="feature-icon" style={{ width: '80px', height: '80px', borderRadius: '24px', background: `linear-gradient(135deg, ${item.color}, rgba(0,0,0,0.4))`, display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 25px auto', transition: 'all 0.5s cubic-bezier(0.16, 1, 0.3, 1)', position: 'relative', zIndex: 1, boxShadow: `0 10px 20px ${item.color}40` }}>
                  {item.icon}
                </div>
                
                <h4 style={{ fontSize: '1.4rem', marginBottom: '15px', position: 'relative', zIndex: 1 }}>{item.title}</h4>
                <p style={{ color: 'var(--text-muted)', fontSize: '1.05rem', lineHeight: '1.7', position: 'relative', zIndex: 1 }}>{item.desc}</p>
                
                <div style={{ position: 'absolute', bottom: 0, left: '50%', transform: 'translateX(-50%)', width: '0%', height: '3px', background: item.color, transition: 'width 0.4s ease' }} className="feature-border"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <style>{`
        .about-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 60px;
          align-items: center;
        }
        .about-images:hover .main-img { transform: rotate(0deg) scale(1.05); z-index: 3; }
        .about-images:hover .shadow-img { transform: rotate(0deg) translate(20px, 20px); filter: brightness(0.5); }
        
        .stat-card {
          transition: transform 0.3s ease, border-color 0.3s ease;
        }
        .stat-card:hover {
          transform: translateY(-5px);
          border-color: var(--primary);
        }

        .features-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 30px;
        }
        .feature-card {
          transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
          border: 1px solid var(--glass-border);
        }
        .feature-card:hover {
          transform: translateY(-15px);
          border-color: rgba(255,255,255,0.2);
          box-shadow: 0 20px 40px rgba(0,0,0,0.1);
        }
        .feature-card:hover .feature-icon {
          transform: scale(1.1) rotate(-5deg);
        }
        .feature-card:hover .feature-bg-glow {
          opacity: 1;
        }
        .feature-card:hover .feature-border {
          width: 100%;
        }
        
        @keyframes float {
          0% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
          100% { transform: translateY(0px); }
        }
        
        @media(max-width: 992px) {
          .about-grid { grid-template-columns: 1fr; gap: 40px; }
          .about-images { height: 400px; max-width: 500px; margin: 0 auto; }
          .floating-badge { right: 5%; }
          .about-text .section-title { text-align: center !important; }
        }
      `}</style>
      {/* CTA Section */}
      <section 
        className="section" 
        style={{ 
          backgroundImage: `linear-gradient(rgba(240, 123, 63, 0.85), rgba(11, 15, 25, 0.95)), url(${jeepImg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed',
          padding: '100px 5%',
          textAlign: 'center',
          color: 'white'
        }}
      >
        <div className="container">
          <h2 style={{ fontSize: 'var(--fs-h2)', color: '#ffffff', marginBottom: '20px', fontWeight: '800' }}>Ready for a Sunset Desert Adventure?</h2>
          <p style={{ fontSize: '1.2rem', color: '#e2e8f0', marginBottom: '40px', maxWidth: '600px', margin: '0 auto 40px auto' }}>
            Book now and witness Jaisalmer's breathtaking golden sunset with customized safari rides.
          </p>
          <div style={{ display: 'flex', gap: '20px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <a href="https://wa.me/919079037934" target="_blank" rel="noopener noreferrer" className="btn btn-secondary" style={{ fontSize: '1.1rem', padding: '16px 36px' }}>Book via WhatsApp</a>
            <Link to="/contact" className="btn" style={{ fontSize: '1.1rem', padding: '16px 36px', background: 'rgba(255, 255, 255, 0.1)', backdropFilter: 'blur(8px)', border: '1px solid rgba(255, 255, 255, 0.2)', color: '#fff' }}>Contact Us</Link>
          </div>
        </div>
      </section>

    </div>
  );
};

export default About;
