import { FaStar, FaQuoteLeft, FaGoogle, FaTripadvisor } from 'react-icons/fa';
import { Star, MessageSquareQuote } from 'lucide-react';

import heroImg from '../assets/hero.png';

const Testimonials = () => {
  const reviews = [
    {
      name: "Rahul Sharma",
      rating: 5,
      date: "May 2026",
      text: "The evening jeep safari was phenomenal. The driver did some amazing dune bashing that had us screaming and laughing. Watching the sunset from the dunes was beautiful. Highly recommend Shivhari Tours!",
      location: "Delhi",
      color: "#f07b3f",
      platform: <FaGoogle color="#ea4335" size={18} />
    },
    {
      name: "Anita Desai",
      rating: 5,
      date: "April 2026",
      text: "We stayed in the luxury camp and it was perfect. The tents are clean and spacious. The cultural show with folk dance was brilliant and the food had that authentic Rajasthani taste. Excellent service.",
      location: "Mumbai",
      color: "#ffd460",
      platform: <FaTripadvisor color="#34e0a1" size={20} />
    },
    {
      name: "John Doe",
      rating: 5,
      date: "March 2026",
      text: "Very reliable taxi service. We booked a cab for 3 days to tour Jaisalmer Fort, Tanot Mata Temple, and Longewala. The vehicle was clean, and our driver was friendly and spoke good English.",
      location: "London",
      color: "#00b8a9",
      platform: <FaGoogle color="#ea4335" size={18} />
    },
    {
      name: "Priya Patel",
      rating: 5,
      date: "June 2026",
      text: "Had an amazing camel ride safari arranged on short notice. They are very friendly and the prices are transparent. No hidden charges or scams. Definitely trust Shivhari Tours.",
      location: "Gujarat",
      color: "#ea5455",
      platform: <FaTripadvisor color="#34e0a1" size={20} />
    },
    {
      name: "Robert Miller",
      rating: 4,
      date: "February 2026",
      text: "Superb management! The dune bashing was thrilling and the stargazing at night from the camp was a memory I will never forget. Staff was helpful and courteous.",
      location: "Germany",
      color: "#2d4059",
      platform: <FaGoogle color="#ea4335" size={18} />
    },
    {
      name: "Vikram Malhotra",
      rating: 5,
      date: "January 2026",
      text: "If you are in Jaisalmer, book your tours only with Shivhari. Great hospitality, authentic food, excellent vehicles, and affordable packages. Loved the experience!",
      location: "Bangalore",
      color: "#f07b3f",
      platform: <FaTripadvisor color="#34e0a1" size={20} />
    }
  ];

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
        backgroundImage: `linear-gradient(to bottom, rgba(11, 15, 25, 0.7), var(--bg-color)), url(${heroImg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed',
        textAlign: 'center',
        marginTop: '-80px'
      }}>
        <div className="container animate-fade-in" style={{ position: 'relative', zIndex: 1, padding: '0 5%', paddingTop: '80px' }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '10px', padding: '8px 24px', borderRadius: '30px', background: 'rgba(255,255,255,0.1)', backdropFilter: 'blur(10px)', border: '1px solid rgba(255,255,255,0.2)', marginBottom: '20px' }}>
            <MessageSquareQuote size={18} color="var(--primary)" />
            <span style={{ color: '#fff', fontWeight: '600', textTransform: 'uppercase', letterSpacing: '2px', fontSize: '0.85rem' }}>Guest Stories</span>
          </div>
          <h1 style={{ fontSize: 'clamp(3rem, 5vw, 4.5rem)', color: '#fff', textShadow: '0 10px 30px rgba(0,0,0,0.5)', marginBottom: '20px', lineHeight: 1.2, fontWeight: '800' }}>
            Words From Our <span style={{ color: 'var(--primary)' }}>Travelers</span>
          </h1>
          <p style={{ color: 'rgba(255,255,255,0.9)', fontSize: '1.2rem', maxWidth: '600px', margin: '0 auto', textShadow: '0 4px 10px rgba(0,0,0,0.3)' }}>
            We've hosted thousands of happy guests from around the globe. Read what they have to say about their desert adventures.
          </p>
        </div>
      </section>

      {/* Aggregate Stats Section */}
      <section className="container" style={{ marginTop: '-40px', position: 'relative', zIndex: 5, padding: '0 5%', marginBottom: '60px' }}>
        <div className="glass-panel" style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '40px', padding: '30px', borderRadius: '20px', background: 'var(--card-bg)', boxShadow: '0 20px 40px rgba(0,0,0,0.08)' }}>
          <div style={{ textAlign: 'center', padding: '0 20px' }}>
            <h2 style={{ fontSize: '2.5rem', fontWeight: '800', color: 'var(--text-color)', marginBottom: '5px' }}>4.9/5</h2>
            <div style={{ display: 'flex', gap: '5px', justifyContent: 'center', marginBottom: '5px' }}>
              {[...Array(5)].map((_, i) => <Star key={i} size={16} fill="var(--secondary)" color="var(--secondary)" />)}
            </div>
            <span style={{ color: 'var(--text-muted)', fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '1px' }}>Overall Rating</span>
          </div>
          <div style={{ width: '1px', background: 'var(--glass-border)' }}></div>
          <div style={{ textAlign: 'center', padding: '0 20px' }}>
            <h2 style={{ fontSize: '2.5rem', fontWeight: '800', color: 'var(--text-color)', marginBottom: '5px' }}>1,200+</h2>
            <span style={{ color: 'var(--text-muted)', fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '1px', display: 'block', marginTop: '27px' }}>Verified Reviews</span>
          </div>
          <div style={{ width: '1px', background: 'var(--glass-border)' }}></div>
          <div style={{ textAlign: 'center', padding: '0 20px' }}>
            <h2 style={{ fontSize: '2.5rem', fontWeight: '800', color: 'var(--text-color)', marginBottom: '5px' }}>Top 10</h2>
            <span style={{ color: 'var(--text-muted)', fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '1px', display: 'block', marginTop: '27px' }}>Jaisalmer Tours</span>
          </div>
        </div>
      </section>

      {/* Reviews Grid */}
      <section className="section" style={{ position: 'relative', paddingBottom: '120px' }}>
        {/* Massive Background Quote Mark */}
        <div style={{ position: 'absolute', top: '10%', left: '5%', fontSize: '40rem', color: 'rgba(240, 123, 63, 0.02)', fontFamily: 'serif', lineHeight: 1, pointerEvents: 'none', zIndex: 0, userSelect: 'none' }}>"</div>

        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <div className="masonry-grid">
            {reviews.map((r, idx) => (
              <div key={idx} className="glass-panel review-card" style={{ padding: '40px 30px', position: 'relative', overflow: 'hidden', background: 'var(--card-bg)' }}>
                {/* Accent Top Border */}
                <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '4px', background: r.color }}></div>
                
                {/* Quote Icon */}
                <FaQuoteLeft size={24} color={`${r.color}20`} style={{ position: 'absolute', top: '30px', right: '30px' }} />

                {/* Rating */}
                <div style={{ display: 'flex', gap: '4px', marginBottom: '20px' }}>
                  {[...Array(5)].map((_, i) => (
                    <FaStar 
                      key={i} 
                      size={16} 
                      color={i < r.rating ? "var(--secondary)" : "var(--glass-border)"} 
                    />
                  ))}
                </div>
                
                {/* Text */}
                <p style={{ color: 'var(--text-color)', fontStyle: 'italic', lineHeight: '1.8', marginBottom: '30px', fontSize: '1.05rem' }}>
                  "{r.text}"
                </p>

                {/* User Info */}
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', borderTop: '1px solid var(--glass-border)', paddingTop: '20px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
                    {/* Avatar Initial */}
                    <div style={{ width: '45px', height: '45px', borderRadius: '50%', background: `${r.color}20`, color: r.color, display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 'bold', fontSize: '1.2rem', flexShrink: 0 }}>
                      {r.name.charAt(0)}
                    </div>
                    <div>
                      <h4 style={{ fontSize: '1.1rem', color: 'var(--text-color)', marginBottom: '3px' }}>{r.name}</h4>
                      <span style={{ color: 'var(--text-muted)', fontSize: '0.85rem' }}>{r.location} • {r.date}</span>
                    </div>
                  </div>
                  
                  {/* Platform Icon */}
                  <div style={{ padding: '8px', background: 'rgba(255,255,255,0.05)', borderRadius: '50%' }}>
                    {r.platform}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section" style={{ background: 'linear-gradient(135deg, rgba(240, 123, 63, 0.1), rgba(255, 212, 96, 0.05))', textAlign: 'center', borderTop: '1px solid var(--glass-border)', padding: '80px 5%' }}>
        <div className="container">
          <h2 style={{ fontSize: '2.5rem', marginBottom: '20px', color: 'var(--text-color)' }}>Have You Traveled With Us?</h2>
          <p style={{ color: 'var(--text-muted)', fontSize: '1.1rem', marginBottom: '40px', maxWidth: '500px', margin: '0 auto 40px auto' }}>
            We would love to hear about your desert adventure. Your feedback helps us create better experiences!
          </p>
          <div style={{ display: 'flex', gap: '20px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <a href="#" className="btn btn-primary" style={{ display: 'flex', alignItems: 'center', gap: '10px' }}><FaGoogle size={18} /> Review on Google</a>
            <a href="#" className="btn" style={{ display: 'flex', alignItems: 'center', gap: '10px', background: 'var(--card-bg)', border: '1px solid var(--glass-border)', color: 'var(--text-color)' }}><FaTripadvisor size={18} color="#34e0a1" /> Review on TripAdvisor</a>
          </div>
        </div>
      </section>

      <style>{`
        .masonry-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
          gap: 30px;
          align-items: start;
        }
        
        .review-card {
          transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
          border: 1px solid var(--glass-border);
        }
        
        .review-card:hover {
          transform: translateY(-10px);
          box-shadow: 0 25px 50px rgba(0,0,0,0.1);
          border-color: rgba(240, 123, 63, 0.3);
        }

        /* Stagger effect for masonry-like look on desktop */
        @media(min-width: 768px) {
          .masonry-grid > div:nth-child(even) {
            transform: translateY(40px);
          }
          .masonry-grid > div:nth-child(even):hover {
            transform: translateY(30px);
          }
        }
        
        @media(max-width: 768px) {
          .masonry-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>

    </div>
  );
};

export default Testimonials;
