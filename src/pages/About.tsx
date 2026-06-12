import { Shield, Compass, Calendar, Award } from 'lucide-react';
import campImg from '../assets/desert_camp.png';

const About = () => {
  return (
    <div style={{ padding: '40px 0 100px 0' }}>
      
      {/* Page Header */}
      <section className="section" style={{ textAlign: 'center', padding: '80px 5% 40px 5%' }}>
        <div className="container">
          <span style={{ color: 'var(--primary)', fontWeight: '600', textTransform: 'uppercase', letterSpacing: '2px' }}>Our History & Values</span>
          <h1 className="section-title" style={{ marginTop: '10px' }}>About Shivhari Tours</h1>
        </div>
      </section>

      {/* Main Intro */}
      <section className="container" style={{ padding: '0 5% 60px 5%' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '50px', alignItems: 'center' }}>
          <div className="glass-panel" style={{ overflow: 'hidden', height: '400px' }}>
            <img src={campImg} alt="Jaisalmer Sam Sand Dunes" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
          </div>
          <div>
            <h3 style={{ fontSize: '2rem', marginBottom: '20px', color: 'var(--primary)' }}>Crafting Desert Dreams Since 2014</h3>
            <p style={{ color: '#cbd5e1', lineHeight: '1.8', marginBottom: '20px' }}>
              Shivhari Tours and Desert Safari was established with a singular vision: to connect adventure seekers with the deep cultural heart of the Thar Desert. Based out of our central booking office on Airforce Road in Jaisalmer, we help thousands of guests experience the true desert lifestyle every year.
            </p>
            <p style={{ color: '#cbd5e1', lineHeight: '1.8' }}>
              We take pride in our 100% safety record across all dune bashing jeep rides and camel safaris. Our luxury camps are curated to offer high comfort while showcasing spectacular Rajasthani folk dances, music, and local gourmet cuisine under open skies.
            </p>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="container" style={{ padding: '60px 5%' }}>
        <h3 style={{ textAlign: 'center', fontSize: '2.2rem', marginBottom: '40px' }}>What Defines Our Tours</h3>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '30px' }}>
          {[
            { icon: <Shield size={32} color="var(--primary)" />, title: "Safety Assured", desc: "All desert safaris are accompanied by experienced drivers and support vehicles with first-aid kits." },
            { icon: <Compass size={32} color="var(--primary)" />, title: "Authentic Experience", desc: "Local Rajasthani artists, local food cooks, and guides native to the Sam dunes area." },
            { icon: <Calendar size={32} color="var(--primary)" />, title: "Flexible Bookings", desc: "Easily modify your travel itineraries or timings by contacting our friendly booking desk." },
            { icon: <Award size={32} color="var(--primary)" />, title: "Award Winning Service", desc: "Consistently rated 5 stars by Jaisalmer tourists for hospitality and reliability." }
          ].map((item, i) => (
            <div key={i} className="glass-panel glow-card" style={{ padding: '30px', textAlign: 'center' }}>
              <div style={{ display: 'inline-flex', marginBottom: '20px', padding: '15px', borderRadius: '50%', background: 'rgba(240, 123, 63, 0.1)' }}>
                {item.icon}
              </div>
              <h4 style={{ fontSize: '1.2rem', marginBottom: '12px' }}>{item.title}</h4>
              <p style={{ color: '#94a3b8', fontSize: '0.95rem' }}>{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

    </div>
  );
};

export default About;
