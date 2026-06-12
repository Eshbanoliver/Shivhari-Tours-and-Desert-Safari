import { ArrowRight, MessageCircle } from 'lucide-react';

// Import assets
import jeepImg from '../assets/jeep_safari.png';
import campImg from '../assets/desert_camp.png';
import taxiImg from '../assets/taxi.png';

const Services = () => {
  const servicesList = [
    {
      title: "Jeep Safari (Dune Bashing)",
      img: jeepImg,
      desc: "Fast-paced, high-speed off-road ride across the Sam Sand Dunes. Experience the ultimate adrenaline rush in Jaisalmer under the guidance of our expert local drivers.",
      features: ["4x4 Specialized SUVs", "Sunset Photography Stops", "Dune Bashing with Experienced Drivers"],
      badge: "Most Popular"
    },
    {
      title: "Luxury Desert Camping",
      img: campImg,
      desc: "Stay in our premium Swiss Tents in Jaisalmer. Complete with ensuite bathrooms, comfortable bedding, and an evening filled with traditional Rajasthani folk music, dance, bonfire, and authentic buffet dinner.",
      features: ["Luxurious Tents with Attached Baths", "Rajasthani Folk & Cultural Show", "Traditional Welcome & Rajasthani Buffet Dinner"],
      badge: "Best Experience"
    },
    {
      title: "Local Taxi & Outstation Tours",
      img: taxiImg,
      desc: "Reliable city sightseeing cabs and airport/station pick-ups. Clean, sanitized vehicles with local, courteous drivers to make your local sightseeing safe and enjoyable.",
      features: ["Clean & Sanitized Vehicles", "Local Sightseeing & Outstation Tours", "Airport / Railway Station Transfers"],
      badge: "Comfort Travel"
    }
  ];

  return (
    <div style={{ padding: '40px 0 100px 0' }}>
      
      {/* Header */}
      <section className="section" style={{ textAlign: 'center', padding: '80px 5% 40px 5%' }}>
        <div className="container">
          <span style={{ color: 'var(--primary)', fontWeight: '600', textTransform: 'uppercase', letterSpacing: '2px' }}>What We Offer</span>
          <h1 className="section-title" style={{ marginTop: '10px' }}>Our Desert & Travel Services</h1>
        </div>
      </section>

      {/* Services List */}
      <section className="container" style={{ padding: '0 5%' }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '60px' }}>
          {servicesList.map((service, idx) => (
            <div 
              key={idx} 
              className="glass-panel" 
              style={{ 
                display: 'flex', 
                flexDirection: idx % 2 === 0 ? 'row' : 'row-reverse', 
                overflow: 'hidden',
                flexWrap: 'wrap'
              }}
            >
              {/* Image Column */}
              <div style={{ flex: '1 1 400px', height: '350px', position: 'relative' }}>
                <img src={service.img} alt={service.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                {service.badge && (
                  <span style={{ position: 'absolute', top: '20px', left: '20px', background: 'var(--primary)', color: 'white', padding: '6px 14px', borderRadius: '30px', fontWeight: 'bold', fontSize: '0.85rem' }}>
                    {service.badge}
                  </span>
                )}
              </div>

              {/* Info Column */}
              <div style={{ flex: '1.2 1 400px', padding: '40px', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                <h3 style={{ fontSize: '1.8rem', marginBottom: '15px', color: '#fff' }}>{service.title}</h3>
                <p style={{ color: '#cbd5e1', marginBottom: '24px', lineHeight: '1.7' }}>{service.desc}</p>
                
                <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', marginBottom: '30px' }}>
                  {service.features.map((f, i) => (
                    <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '10px', color: '#94a3b8' }}>
                      <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: 'var(--primary)' }}></span>
                      <span>{f}</span>
                    </div>
                  ))}
                </div>

                <div style={{ display: 'flex', gap: '15px', flexWrap: 'wrap' }}>
                  <a href="https://wa.me/919079037934" target="_blank" rel="noopener noreferrer" className="btn btn-primary">
                    <MessageCircle size={18} /> Book on WhatsApp
                  </a>
                  <a href="tel:+919079037934" className="btn btn-glass">
                    Inquire Rates <ArrowRight size={16} />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

    </div>
  );
};

export default Services;
