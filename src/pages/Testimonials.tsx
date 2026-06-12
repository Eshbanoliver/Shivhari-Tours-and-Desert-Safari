import { Star } from 'lucide-react';

const Testimonials = () => {
  const reviews = [
    {
      name: "Rahul Sharma",
      rating: 5,
      date: "May 2026",
      text: "The evening jeep safari was phenomenal. The driver did some amazing dune bashing that had us screaming and laughing. Watching the sunset from the dunes was beautiful. Highly recommend Shivhari Tours!",
      location: "Delhi"
    },
    {
      name: "Anita Desai",
      rating: 5,
      date: "April 2026",
      text: "We stayed in the luxury camp and it was perfect. The tents are clean and spacious. The cultural show with folk dance was brilliant and the food had that authentic Rajasthani taste. Excellent service.",
      location: "Mumbai"
    },
    {
      name: "John Doe",
      rating: 5,
      date: "March 2026",
      text: "Very reliable taxi service. We booked a cab for 3 days to tour Jaisalmer Fort, Tanot Mata Temple, and Longewala. The vehicle was clean, and our driver was friendly and spoke good English.",
      location: "London"
    },
    {
      name: "Priya Patel",
      rating: 5,
      date: "June 2026",
      text: "Had an amazing camel ride safari arranged on short notice. They are very friendly and the prices are transparent. No hidden charges or scams. Definitely trust Shivhari Tours.",
      location: "Gujarat"
    },
    {
      name: "Robert Miller",
      rating: 4,
      date: "February 2026",
      text: "Superb management! The dune bashing was thrilling and the stargazing at night from the camp was a memory I will never forget. Staff was helpful and courteous.",
      location: "Germany"
    },
    {
      name: "Vikram Malhotra",
      rating: 5,
      date: "January 2026",
      text: "If you are in Jaisalmer, book your tours only with Shivhari. Great hospitality, authentic food, excellent vehicles, and affordable packages. Loved the experience!",
      location: "Bangalore"
    }
  ];

  return (
    <div style={{ padding: '40px 0 100px 0' }}>
      
      {/* Header */}
      <section className="section" style={{ textAlign: 'center', padding: '80px 5% 40px 5%' }}>
        <div className="container">
          <span style={{ color: 'var(--primary)', fontWeight: '600', textTransform: 'uppercase', letterSpacing: '2px' }}>Guest Stories</span>
          <h1 className="section-title" style={{ marginTop: '10px' }}>What Our Guests Say About Us</h1>
        </div>
      </section>

      {/* Grid */}
      <section className="container" style={{ padding: '0 5%' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '30px' }}>
          {reviews.map((r, idx) => (
            <div key={idx} className="glass-panel glow-card" style={{ padding: '30px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
              <div>
                {/* Rating stars */}
                <div style={{ display: 'flex', gap: '4px', marginBottom: '15px' }}>
                  {[...Array(5)].map((_, i) => (
                    <Star 
                      key={i} 
                      size={18} 
                      color={i < r.rating ? "var(--secondary)" : "rgba(255,255,255,0.1)"} 
                      fill={i < r.rating ? "var(--secondary)" : "none"} 
                    />
                  ))}
                </div>
                
                <p style={{ color: 'var(--text-muted)', fontStyle: 'italic', lineHeight: '1.7', marginBottom: '25px', fontSize: '0.98rem' }}>
                  "{r.text}"
                </p>
              </div>

              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderTop: '1px solid rgba(255,255,255,0.05)', paddingTop: '15px' }}>
                <div>
                  <h4 style={{ fontSize: '1.05rem', color: '#fff' }}>{r.name}</h4>
                  <span style={{ color: 'var(--text-muted)', fontSize: '0.85rem' }}>{r.location}</span>
                </div>
                <span style={{ color: 'var(--primary)', fontSize: '0.85rem', fontWeight: '500' }}>{r.date}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

    </div>
  );
};

export default Testimonials;
