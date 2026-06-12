import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="home-page">
      {/* Hero Section */}
      <section className="section" style={{ minHeight: '80vh', display: 'flex', alignItems: 'center', justifyContent: 'center', textAlign: 'center', padding: '120px 5%' }}>
        <div className="glass-panel animate-fade-in" style={{ padding: '60px', maxWidth: '800px' }}>
          <h1 style={{ fontSize: '4rem', marginBottom: '20px', color: 'var(--primary)' }}>Shivhari Tours and Desert Safari</h1>
          <p style={{ fontSize: '1.2rem', marginBottom: '40px', color: 'var(--text-dark)' }}>Experience the ultimate desert adventure in Jaisalmer.</p>
          <div style={{ display: 'flex', gap: '20px', justifyContent: 'center' }}>
            <Link to="/services" className="btn btn-primary">Explore Services</Link>
            <Link to="/contact" className="btn btn-secondary">Contact Us</Link>
          </div>
        </div>
      </section>

      {/* About Us Summary */}
      <section className="section container">
        <h2 className="section-title">About Us</h2>
        <div className="glass-panel" style={{ padding: '40px', textAlign: 'center' }}>
          <p style={{ marginBottom: '20px', fontSize: '1.1rem', lineHeight: '1.8' }}>
            Located at Shop no 05, Airforce Road, Jaisalmer, we are your premier partner for exploring the golden sands. We provide unforgettable desert experiences with safety and comfort as our top priorities.
          </p>
          <Link to="/about" className="btn btn-primary">Read More About Us</Link>
        </div>
      </section>

      {/* Key Metrics */}
      <section className="section">
        <div className="container" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '30px' }}>
          {[
            { value: '5000+', label: 'Happy Customers' },
            { value: '10+', label: 'Years Experience' },
            { value: '100%', label: 'Safety Record' },
            { value: '50+', label: 'Tour Options' },
          ].map((metric, i) => (
            <div key={i} className="glass-panel" style={{ padding: '40px 20px', textAlign: 'center' }}>
              <h3 style={{ fontSize: '2.5rem', color: 'var(--primary)', marginBottom: '10px' }}>{metric.value}</h3>
              <p style={{ fontWeight: '600', color: 'var(--accent)' }}>{metric.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Services Overview */}
      <section className="section container">
        <h2 className="section-title">Our Services</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '30px', marginBottom: '40px' }}>
          {['Jeep Safari', 'Taxi Service', 'Desert Camp'].map((service, i) => (
            <div key={i} className="glass-panel" style={{ padding: '30px', textAlign: 'center' }}>
              <h3 style={{ marginBottom: '15px' }}>{service}</h3>
              <p style={{ marginBottom: '20px' }}>Experience the best {service.toLowerCase()} in Jaisalmer.</p>
            </div>
          ))}
        </div>
        <div style={{ textAlign: 'center' }}>
          <Link to="/services" className="btn btn-primary">View All Services</Link>
        </div>
      </section>

      {/* Mission & Vision & Core Values */}
      <section className="section glass-panel-dark">
        <div className="container" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '40px' }}>
          <div>
            <h3 style={{ fontSize: '2rem', marginBottom: '20px', color: 'var(--secondary)' }}>Mission & Vision</h3>
            <p style={{ lineHeight: '1.8' }}>Our mission is to offer premium desert safari experiences that connect travelers with the rich culture of Rajasthan. We envision being the top choice for desert tourism in Jaisalmer.</p>
          </div>
          <div>
            <h3 style={{ fontSize: '2rem', marginBottom: '20px', color: 'var(--secondary)' }}>Core Values</h3>
            <ul style={{ lineHeight: '2', paddingLeft: '20px' }}>
              <li>Customer Satisfaction</li>
              <li>Authenticity</li>
              <li>Safety First</li>
              <li>Environmental Responsibility</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section container">
        <h2 className="section-title">Why Choose Us</h2>
        <div style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto' }}>
          <p className="glass-panel" style={{ padding: '30px', lineHeight: '1.8', fontSize: '1.1rem' }}>
            We provide local expertise, well-maintained vehicles, luxurious campsites, and highly trained guides to ensure your Jaisalmer trip is memorable and hassle-free.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="section" style={{ background: 'var(--primary)', margin: '40px 0' }}>
        <div className="container" style={{ textAlign: 'center', color: 'white' }}>
          <h2 style={{ fontSize: '3rem', color: 'white', marginBottom: '20px' }}>Ready for an Adventure?</h2>
          <p style={{ fontSize: '1.2rem', marginBottom: '30px' }}>Book your desert safari today and create memories of a lifetime.</p>
          <Link to="/contact" className="btn btn-secondary" style={{ fontSize: '1.2rem', padding: '15px 40px' }}>Book Now</Link>
        </div>
      </section>

      {/* Testimonials Summary */}
      <section className="section container">
        <h2 className="section-title">What Our Clients Say</h2>
        <div className="glass-panel" style={{ padding: '40px', textAlign: 'center', fontStyle: 'italic', marginBottom: '30px' }}>
          <p>"The Jeep Safari was incredible! The drivers were highly skilled and the sunset view was breathtaking."</p>
          <p style={{ marginTop: '20px', fontWeight: 'bold' }}>- Happy Traveler</p>
        </div>
        <div style={{ textAlign: 'center' }}>
          <Link to="/testimonials" className="btn btn-primary">Read More Reviews</Link>
        </div>
      </section>

      {/* FAQ */}
      <section className="section container">
        <h2 className="section-title">Frequently Asked Questions</h2>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
          {[
            { q: 'What is the best time for a desert safari?', a: 'Evening time before sunset is ideal for pleasant weather and beautiful views.' },
            { q: 'Is the Jeep Safari safe for kids?', a: 'Yes, our drivers are experienced and prioritize safety for all age groups.' }
          ].map((faq, i) => (
            <div key={i} className="glass-panel" style={{ padding: '25px' }}>
              <h4 style={{ fontSize: '1.2rem', marginBottom: '10px' }}>{faq.q}</h4>
              <p>{faq.a}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;
