import { ArrowRight, MessageCircle, Compass, Bed, Car, Palmtree, Tent, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';

// Import assets
import heroImg from '../assets/hero.png';
import jeepImg from '../assets/jeep_safari.png';
import campImg from '../assets/desert_camp.png';
import taxiImg from '../assets/taxi.png';
import hotelImg from '../assets/hotel.png';
import resortImg from '../assets/resort.png';

const Services = () => {
  const servicesList = [
    {
      title: "Jeep Safari (Dune Bashing)",
      img: jeepImg,
      icon: <Compass size={32} color="#fff" />,
      desc: "Fast-paced, high-speed off-road ride across the Sam Sand Dunes. Experience the ultimate adrenaline rush in Jaisalmer under the guidance of our expert local drivers.",
      features: ["4x4 Specialized SUVs", "Sunset Photography", "Expert Dune Bashing"],
      badge: "Most Popular",
      color: "#f07b3f"
    },
    {
      title: "Luxury Desert Camping",
      img: campImg,
      icon: <Tent size={32} color="#fff" />,
      desc: "Stay in our premium Swiss Tents in Jaisalmer. Complete with ensuite bathrooms, comfortable bedding, and an evening filled with traditional Rajasthani folk music, dance, bonfire, and authentic buffet dinner.",
      features: ["Ensuite Bathrooms", "Folk & Cultural Show", "Traditional Buffet Dinner"],
      badge: "Best Experience",
      color: "#ffd460"
    },
    {
      title: "Premium Hotel Stays",
      img: hotelImg,
      icon: <Bed size={32} color="#fff" />,
      desc: "Experience royal luxury in the heart of the Golden City. We provide bookings for top-rated heritage hotels featuring authentic sandstone architecture, stunning rooftop views, and world-class amenities.",
      features: ["Heritage Architecture", "Rooftop Views", "Prime Locations"],
      badge: "Luxury",
      color: "#ea5455"
    },
    {
      title: "Exclusive Resort Escapes",
      img: resortImg,
      icon: <Palmtree size={32} color="#fff" />,
      desc: "Unwind at our spectacular desert resorts. Enjoy massive swimming pools, luxury lounge areas, and exquisite dining options perfectly situated amongst beautiful sand dunes.",
      features: ["Swimming Pools", "Lounge Areas", "Desert Views"],
      badge: "Relaxation",
      color: "#00b8a9"
    },
    {
      title: "Local Taxi & Outstation",
      img: taxiImg,
      icon: <Car size={32} color="#fff" />,
      desc: "Reliable city sightseeing cabs and airport/station pick-ups. Clean, sanitized vehicles with local, courteous drivers to make your local sightseeing safe and enjoyable.",
      features: ["Sanitized Vehicles", "Local Sightseeing", "Station Transfers"],
      badge: "Comfort Travel",
      color: "#2d4059"
    }
  ];

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
        backgroundImage: `linear-gradient(to bottom, rgba(11, 15, 25, 0.6), var(--bg-color)), url(${campImg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed',
        textAlign: 'center',
        marginTop: '-80px' // Pull up behind the transparent navbar
      }}>
        <div className="container animate-fade-in" style={{ position: 'relative', zIndex: 1, padding: '0 5%', paddingTop: '80px' }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '10px', padding: '8px 24px', borderRadius: '30px', background: 'rgba(255,255,255,0.1)', backdropFilter: 'blur(10px)', border: '1px solid rgba(255,255,255,0.2)', marginBottom: '20px' }}>
            <Sparkles size={18} color="var(--primary)" />
            <span style={{ color: '#fff', fontWeight: '600', textTransform: 'uppercase', letterSpacing: '2px', fontSize: '0.85rem' }}>What We Offer</span>
          </div>
          <h1 style={{ fontSize: 'clamp(3rem, 5vw, 4.5rem)', color: '#fff', textShadow: '0 10px 30px rgba(0,0,0,0.5)', marginBottom: '20px', lineHeight: 1.2, fontWeight: '800' }}>
            Unforgettable <span style={{ color: 'var(--primary)' }}>Experiences</span>
          </h1>
          <p style={{ color: 'rgba(255,255,255,0.9)', fontSize: '1.2rem', maxWidth: '600px', margin: '0 auto', textShadow: '0 4px 10px rgba(0,0,0,0.3)' }}>
            From thrilling desert adventures to luxurious heritage stays, curate your perfect Jaisalmer itinerary with us.
          </p>
        </div>
      </section>

      {/* Services List */}
      <section className="section" style={{ position: 'relative', padding: '100px 5%' }}>
        {/* Abstract Glows */}
        <div style={{ position: 'absolute', top: '20%', left: '-10%', width: '40vw', height: '40vw', background: 'radial-gradient(circle, rgba(240, 123, 63, 0.05) 0%, transparent 60%)', filter: 'blur(80px)', pointerEvents: 'none' }}></div>
        <div style={{ position: 'absolute', bottom: '20%', right: '-10%', width: '40vw', height: '40vw', background: 'radial-gradient(circle, rgba(255, 212, 96, 0.03) 0%, transparent 60%)', filter: 'blur(80px)', pointerEvents: 'none' }}></div>
        
        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '80px' }}>
            {servicesList.map((service, idx) => (
              <div 
                key={idx} 
                className="service-row"
                style={{ 
                  display: 'flex', 
                  flexDirection: idx % 2 === 0 ? 'row' : 'row-reverse', 
                  alignItems: 'center',
                  gap: '60px'
                }}
              >
                {/* Image Side */}
                <div className="service-img-container" style={{ flex: '1 1 500px', position: 'relative' }}>
                  <div className="glass-panel" style={{ padding: '15px', background: 'var(--card-bg)', borderRadius: '30px', position: 'relative', zIndex: 2, transform: idx % 2 === 0 ? 'rotate(-2deg)' : 'rotate(2deg)', transition: 'all 0.5s ease', boxShadow: '0 20px 50px rgba(0,0,0,0.15)' }}>
                    <div style={{ overflow: 'hidden', borderRadius: '20px', height: '450px' }}>
                      <img src={service.img} alt={service.title} style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.8s ease' }} className="service-img" />
                    </div>
                  </div>
                  
                  {/* Decorative Background Box */}
                  <div style={{ position: 'absolute', top: '30px', left: idx % 2 === 0 ? '30px' : '-30px', width: '100%', height: '100%', borderRadius: '30px', border: `2px dashed ${service.color}40`, zIndex: 1, pointerEvents: 'none' }}></div>
                  
                  {/* Floating Icon */}
                  <div className="floating-icon" style={{ position: 'absolute', top: '-20px', right: idx % 2 === 0 ? '-20px' : 'auto', left: idx % 2 !== 0 ? '-20px' : 'auto', width: '80px', height: '80px', borderRadius: '24px', background: `linear-gradient(135deg, ${service.color}, rgba(0,0,0,0.4))`, display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 3, boxShadow: `0 15px 30px ${service.color}50` }}>
                    {service.icon}
                  </div>
                </div>

                {/* Content Side */}
                <div className="service-content" style={{ flex: '1 1 400px' }}>
                  {service.badge && (
                    <span style={{ display: 'inline-block', background: `linear-gradient(135deg, ${service.color}20, transparent)`, color: service.color, border: `1px solid ${service.color}50`, padding: '6px 16px', borderRadius: '30px', fontWeight: '800', fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '20px' }}>
                      {service.badge}
                    </span>
                  )}
                  <h3 style={{ fontSize: '2.5rem', marginBottom: '20px', color: 'var(--text-color)', lineHeight: '1.2' }}>{service.title}</h3>
                  <p style={{ color: 'var(--text-muted)', marginBottom: '30px', lineHeight: '1.8', fontSize: '1.15rem' }}>{service.desc}</p>
                  
                  {/* Features Grid */}
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: '15px', marginBottom: '40px' }}>
                    {service.features.map((f, i) => (
                      <div key={i} className="glass-panel" style={{ padding: '15px', display: 'flex', alignItems: 'center', gap: '12px', background: 'rgba(255,255,255,0.02)', border: '1px solid var(--glass-border)', borderRadius: '15px' }}>
                        <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: service.color, boxShadow: `0 0 10px ${service.color}` }}></div>
                        <span style={{ color: 'var(--text-color)', fontWeight: '600', fontSize: '0.95rem' }}>{f}</span>
                      </div>
                    ))}
                  </div>

                  <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap' }}>
                    <a href="https://wa.me/919079037934" target="_blank" rel="noopener noreferrer" className="btn btn-primary" style={{ padding: '16px 30px', display: 'flex', alignItems: 'center', gap: '10px', fontSize: '1.05rem', background: `linear-gradient(135deg, ${service.color}, #000)`, border: 'none', boxShadow: `0 10px 20px ${service.color}40` }}>
                      <MessageCircle size={20} /> Book on WhatsApp
                    </a>
                    <Link to="/contact" className="btn" style={{ padding: '16px 30px', display: 'flex', alignItems: 'center', gap: '10px', fontSize: '1.05rem', color: 'var(--text-color)', border: '1px solid var(--glass-border)', background: 'var(--card-bg)' }}>
                      Inquire Rates <ArrowRight size={20} />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section 
        className="section" 
        style={{ 
          backgroundImage: `linear-gradient(rgba(240, 123, 63, 0.85), rgba(11, 15, 25, 0.95)), url(${heroImg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed',
          padding: '100px 5%',
          textAlign: 'center',
          color: 'white'
        }}
      >
        <div className="container">
          <h2 style={{ fontSize: 'var(--fs-h2)', color: '#ffffff', marginBottom: '20px', fontWeight: '800' }}>Ready to Plan Your Trip?</h2>
          <p style={{ fontSize: '1.2rem', color: '#e2e8f0', marginBottom: '40px', maxWidth: '600px', margin: '0 auto 40px auto' }}>
            Mix and match our services to create the ultimate Jaisalmer holiday package.
          </p>
          <div style={{ display: 'flex', gap: '20px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link to="/contact" className="btn btn-secondary" style={{ fontSize: '1.1rem', padding: '16px 36px' }}>Get a Custom Quote</Link>
          </div>
        </div>
      </section>

      <style>{`
        .service-img-container:hover .glass-panel {
          transform: rotate(0deg) scale(1.02) !important;
          border-color: rgba(240, 123, 63, 0.3);
        }
        .service-img-container:hover .service-img {
          transform: scale(1.1);
        }
        .floating-icon {
          animation: float-icon 4s ease-in-out infinite;
        }
        @keyframes float-icon {
          0% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
          100% { transform: translateY(0px); }
        }
        @media(max-width: 992px) {
          .service-row {
            flex-direction: column !important;
            gap: 40px !important;
          }
          .service-content {
            text-align: center;
          }
          .service-content > div:last-child {
            justify-content: center;
          }
          .floating-icon {
            right: -10px !important;
            left: auto !important;
          }
        }
      `}</style>
    </div>
  );
};

export default Services;
