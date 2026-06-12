import { Link } from 'react-router-dom';
import { useState, useEffect, useRef } from 'react';
import { Shield, MapPin, Compass, ArrowRight, ChevronLeft, ChevronRight, CheckCircle, ChevronDown } from 'lucide-react';

// Import assets
import heroImg from '../assets/hero.png';
import jeepImg from '../assets/jeep_safari.png';
import campImg from '../assets/desert_camp.png';
import taxiImg from '../assets/taxi.png';

// Count-up helper component for key metrics
interface CountUpProps {
  end: number;
  duration?: number;
  suffix?: string;
}

const CountUp = ({ end, duration = 1500, suffix = "" }: CountUpProps) => {
  const [count, setCount] = useState(0);
  const elementRef = useRef<HTMLDivElement>(null);
  const [hasStarted, setHasStarted] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setHasStarted(true);
        }
      },
      { threshold: 0.1 }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => {
      if (elementRef.current) {
        observer.unobserve(elementRef.current);
      }
    };
  }, []);

  useEffect(() => {
    if (!hasStarted) return;
    let startTime: number | null = null;
    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = timestamp - startTime;
      const current = Math.min(Math.floor((progress / duration) * end), end);
      setCount(current);
      if (progress < duration) {
        requestAnimationFrame(animate);
      }
    };
    requestAnimationFrame(animate);
  }, [hasStarted, end, duration]);

  return <div ref={elementRef}>{count}{suffix}</div>;
};

const Home = () => {
  // FAQ accordion state
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  // Testimonial slider state
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const testimonials = [
    {
      quote: "The Jeep Safari was an absolute adrenaline rush! dune bashing with Shivhari Tours was the highlight of our Jaisalmer trip. Highly recommended!",
      author: "Aditya Verma",
      role: "Adventure Enthusiast"
    },
    {
      quote: "Staying at their luxury Desert Camp felt surreal. The folk dancers, bonfire, and traditional Rajasthani food under the starry night were majestic.",
      author: "Sneha Reddy",
      role: "Family Traveler"
    },
    {
      quote: "Prompt and extremely professional taxi service. The driver was knowledgeable and made our local sightseeing safe and enjoyable.",
      author: "Marcus Aurelius",
      role: "Solo Backpacker"
    }
  ];

  const nextTestimonial = () => {
    setActiveTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setActiveTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  // Auto-slide testimonials
  useEffect(() => {
    const timer = setInterval(nextTestimonial, 6000);
    return () => clearInterval(timer);
  }, []);

  const faqData = [
    {
      q: "What is included in the Desert Camp package?",
      a: "Our package includes a traditional welcome, camel ride at sunset, Rajasthani cultural folk dance program, buffet dinner (veg), luxury tent stay, and breakfast the next morning."
    },
    {
      q: "Is dune bashing safe during the Jeep Safari?",
      a: "Yes, absolutely. We use well-maintained 4x4 SUVs, and all our desert drivers have over 10 years of experience navigating the Sam sand dunes."
    },
    {
      q: "Can we customize our Jaisalmer tour packages?",
      a: "Yes! We specialize in custom tours. You can combine local Jaisalmer sightseeing taxis, desert camps, jeep safaris, and parasailing tailored to your timeline."
    },
    {
      q: "Where is your booking office located?",
      a: "Our office is centrally located at Shop no 05, Airforce Road, Jaisalmer, Rajasthan 345001. You are welcome to drop by for bookings."
    }
  ];

  return (
    <div style={{ overflowX: 'hidden' }}>
      
      {/* Hero Section */}
      <section 
        className="section" 
        style={{ 
          minHeight: '95vh', 
          display: 'flex', 
          alignItems: 'center', 
          justifyContent: 'center', 
          position: 'relative',
          backgroundImage: `linear-gradient(rgba(11, 15, 25, 0.6), rgba(11, 15, 25, 0.9)), url(${heroImg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed',
          padding: '120px 5% 80px 5%'
        }}
      >
        <div className="container animate-fade-in" style={{ textAlign: 'center', zIndex: 1 }}>
          <div className="glass-panel hero-box" style={{ maxWidth: '850px', margin: '0 auto', background: 'rgba(11, 15, 25, 0.55)', border: '1px solid rgba(255, 255, 255, 0.1)' }}>
            <span style={{ color: 'var(--primary)', fontWeight: '700', letterSpacing: '4px', fontSize: '0.9rem', textTransform: 'uppercase' }}>Unforgettable Adventures Await</span>
            <h1 style={{ fontSize: 'var(--fs-h1)', lineHeight: '1.2', margin: '20px 0', fontWeight: '800', color: '#ffffff' }}>
              Discover the Magic of <span style={{ color: 'var(--primary)' }}>Jaisalmer</span> Desert
            </h1>
            <p style={{ fontSize: '1.2rem', color: '#e2e8f0', marginBottom: '40px', maxWidth: '600px', margin: '0 auto 40px auto' }}>
              Experience thrilling dune bashing, luxurious desert camp stays, traditional Rajasthani culture, and custom taxi tours with the desert experts.
            </p>
            <div style={{ display: 'flex', gap: '20px', justifyContent: 'center', flexWrap: 'wrap' }}>
              <Link to="/services" className="btn btn-primary">Book Safari Package</Link>
              <Link to="/about" className="btn btn-glass">Learn More</Link>
            </div>
          </div>
        </div>
      </section>

      {/* About Us Summary */}
      <section className="section container">
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '50px', alignItems: 'center' }}>
          <div className="animate-fade-in">
            <span style={{ color: 'var(--primary)', fontWeight: '600', textTransform: 'uppercase', letterSpacing: '2px', fontSize: '0.9rem' }}>Who We Are</span>
            <h2 style={{ fontSize: 'var(--fs-h2)', marginTop: '10px', marginBottom: '20px', textAlign: 'left' }}>Shivhari Tours & Desert Safari</h2>
            <p style={{ color: 'var(--text-muted)', fontSize: '1.1rem', marginBottom: '25px', lineHeight: '1.8' }}>
              Nestled in the Golden City, we are Jaisalmer's top-rated destination management agency. We craft authentic, safe, and exhilarating Rajasthani adventures, specializing in high-speed Jeep Safaris, beautiful desert camps, and customized tour taxis.
            </p>
            <p style={{ color: 'var(--text-muted)', fontSize: '1.1rem', marginBottom: '35px', lineHeight: '1.8' }}>
              Visit us at our central office on Airforce Road to book a desert sunset experience you will cherish forever.
            </p>
            <Link to="/about" className="btn btn-primary">
              Discover Our Story <ArrowRight size={18} />
            </Link>
          </div>
          
          <div style={{ position: 'relative' }}>
            <div className="glass-panel" style={{ overflow: 'hidden', borderRadius: '24px', height: '400px' }}>
              <img src={campImg} alt="Desert camp Jaisalmer" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            </div>
            <div className="glass-panel desktop-only-box" style={{ position: 'absolute', bottom: '-20px', left: '-20px', padding: '20px', background: 'rgba(240, 123, 63, 0.9)', color: 'white', borderRadius: '16px', border: 'none' }}>
              <h4 style={{ color: 'white', fontSize: '1.2rem', marginBottom: '5px' }}>Trusted Local Guides</h4>
              <p style={{ fontSize: '0.9rem', opacity: '0.9' }}>100% Rajasthani hospitality</p>
            </div>
          </div>
        </div>
      </section>

      {/* Key Metrics Section */}
      <section className="section" style={{ background: 'rgba(17, 24, 39, 0.4)', borderTop: '1px solid rgba(255,255,255,0.05)', borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
        <div className="container" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '30px' }}>
          {[
            { value: 5000, label: 'Happy Explorers', suffix: '+' },
            { value: 12, label: 'Years of Experience', suffix: '+' },
            { value: 99, label: 'Positive Reviews', suffix: '%' },
            { value: 15, label: 'Luxury Tents', suffix: '' }
          ].map((metric, i) => (
            <div key={i} className="glass-panel glow-card" style={{ padding: '40px 20px', textAlign: 'center' }}>
              <div style={{ fontSize: '3rem', fontWeight: '800', color: 'var(--primary)', marginBottom: '10px' }}>
                <CountUp end={metric.value} suffix={metric.suffix} />
              </div>
              <p style={{ color: 'var(--text-muted)', fontSize: '1rem', fontWeight: '500', textTransform: 'uppercase', letterSpacing: '1px' }}>{metric.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Services Section */}
      <section className="section container">
        <h2 className="section-title">Our Signature Services</h2>
        <p style={{ textAlign: 'center', color: 'var(--text-muted)', maxWidth: '600px', margin: '-30px auto 50px auto', fontSize: '1.1rem' }}>
          From thrilling dune rides to relaxing stays under the desert stars, discover what makes us special.
        </p>

        <div className="grid-cols-3">
          {[
            {
              title: "Jeep Safari",
              img: jeepImg,
              desc: "Experience high-octane dune bashing on Sam dunes with our robust 4x4 offroad jeeps.",
              link: "/services"
            },
            {
              title: "Desert Camps",
              img: campImg,
              desc: "Indulge in luxurious Swiss cottage tents complete with modern amenities and local musical programs.",
              link: "/services"
            },
            {
              title: "Taxi Services & Tours",
              img: taxiImg,
              desc: "Clean, comfortable vehicles with local drivers for smooth city sightseeing and station transfers.",
              link: "/services"
            }
          ].map((service, idx) => (
            <div key={idx} className="glass-panel hover-lift glow-card" style={{ overflow: 'hidden', display: 'flex', flexDirection: 'column' }}>
              <div style={{ height: '220px', overflow: 'hidden' }}>
                <img src={service.img} alt={service.title} style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'var(--transition-smooth)' }} />
              </div>
              <div style={{ padding: '30px', flexGrow: 1, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                <div>
                  <h3 style={{ fontSize: '1.5rem', marginBottom: '12px' }}>{service.title}</h3>
                  <p style={{ color: 'var(--text-muted)', marginBottom: '24px', fontSize: '0.98rem' }}>{service.desc}</p>
                </div>
                <Link to={service.link} className="btn btn-glass" style={{ width: '100%', justifyContent: 'center' }}>
                  Explore Details <ArrowRight size={16} />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Mission, Vision & Core Values Section */}
      <section className="section" style={{ background: 'linear-gradient(180deg, rgba(11, 15, 25, 0) 0%, rgba(17, 24, 39, 0.6) 100%)' }}>
        <div className="container" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '40px' }}>
          
          <div className="glass-panel" style={{ padding: '40px' }}>
            <Compass size={40} color="var(--primary)" style={{ marginBottom: '20px' }} />
            <h3 style={{ fontSize: 'var(--fs-h3)', marginBottom: '15px' }}>Mission & Vision</h3>
            <p style={{ color: 'var(--text-muted)', lineHeight: '1.8' }}>
              Our mission is to establish the benchmark for adventure travel in Rajasthan. We aim to bring travelers closer to the rich heritage and vibrant colors of Jaisalmer, ensuring safe, culturally respectful, and breathtaking excursions.
            </p>
          </div>

          <div className="glass-panel" style={{ padding: '40px' }}>
            <Shield size={40} color="var(--secondary)" style={{ marginBottom: '20px' }} />
            <h3 style={{ fontSize: 'var(--fs-h3)', marginBottom: '15px' }}>Core Values</h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '15px', color: 'var(--text-muted)' }}>
              <div style={{ display: 'flex', gap: '10px' }}>
                <CheckCircle size={18} color="var(--primary)" style={{ flexShrink: 0, marginTop: '4px' }} />
                <span><strong>Safety First:</strong> We utilize advanced backup services and trained drivers.</span>
              </div>
              <div style={{ display: 'flex', gap: '10px' }}>
                <CheckCircle size={18} color="var(--primary)" style={{ flexShrink: 0, marginTop: '4px' }} />
                <span><strong>True Hospitality:</strong> Experience authentic Rajasthani hospitality.</span>
              </div>
              <div style={{ display: 'flex', gap: '10px' }}>
                <CheckCircle size={18} color="var(--primary)" style={{ flexShrink: 0, marginTop: '4px' }} />
                <span><strong>No Hidden Costs:</strong> Honest pricing with transparent inclusions.</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section container">
        <h2 className="section-title">Why Choose Shivhari Tours</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '30px' }}>
          {[
            { title: "Central Location", desc: "Located on Airforce Road, makes it super easy to drop in and plan your sunset safari." },
            { title: "Expert Local Team", desc: "Our staff consists of local villagers who know the dunes like the back of their hand." },
            { title: "Luxury & Comfort", desc: "Well-sanitized vehicles, high-speed 4x4s, and cozy bedding in all tents." }
          ].map((item, i) => (
            <div key={i} className="glass-panel" style={{ padding: '35px', textAlign: 'center' }}>
              <div style={{ width: '60px', height: '60px', borderRadius: '50%', background: 'rgba(240, 123, 63, 0.1)', display: 'flex', alignItems: 'center', justifySelf: 'center', justifyContent: 'center', marginBottom: '20px' }}>
                <MapPin size={24} color="var(--primary)" />
              </div>
              <h4 style={{ fontSize: '1.3rem', marginBottom: '12px' }}>{item.title}</h4>
              <p style={{ color: 'var(--text-muted)' }}>{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

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
            <Link to="/contact" className="btn btn-glass" style={{ fontSize: '1.1rem', padding: '16px 36px' }}>Contact Us</Link>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="section container">
        <h2 className="section-title">What Our Guests Say</h2>
        
        <div style={{ maxWidth: '800px', margin: '0 auto', position: 'relative' }}>
          <div className="glass-panel testimonial-card animate-fade-in" key={activeTestimonial}>
            <p className="testimonial-quote">"{testimonials[activeTestimonial].quote}"</p>
            <h4 className="testimonial-author">{testimonials[activeTestimonial].author}</h4>
            <span style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>{testimonials[activeTestimonial].role}</span>
          </div>

          {/* Slider controls */}
          <div style={{ display: 'flex', gap: '20px', justifyContent: 'center', marginTop: '30px' }}>
            <button onClick={prevTestimonial} className="glass-panel" style={{ width: '45px', height: '45px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', border: '1px solid rgba(255,255,255,0.1)', cursor: 'pointer' }}>
              <ChevronLeft size={20} color="#fff" />
            </button>
            <button onClick={nextTestimonial} className="glass-panel" style={{ width: '45px', height: '45px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', border: '1px solid rgba(255,255,255,0.1)', cursor: 'pointer' }}>
              <ChevronRight size={20} color="#fff" />
            </button>
          </div>
        </div>

        <div style={{ textAlign: 'center', marginTop: '40px' }}>
          <Link to="/testimonials" className="btn btn-glass">View All Testimonials</Link>
        </div>
      </section>

      {/* FAQ Accordion Section */}
      <section className="section container" style={{ paddingBottom: '120px' }}>
        <h2 className="section-title">Frequently Asked Questions</h2>
        
        <div className="glass-panel" style={{ maxWidth: '850px', margin: '0 auto', padding: '10px 0' }}>
          {faqData.map((faq, idx) => (
            <div key={idx} className="faq-item">
              <button className="faq-question" onClick={() => toggleFaq(idx)}>
                <span style={{ fontWeight: '600', fontSize: '1.1rem', color: '#f1f5f9' }}>{faq.q}</span>
                <ChevronDown 
                  size={20} 
                  color="var(--primary)" 
                  style={{ 
                    transform: openFaq === idx ? 'rotate(180deg)' : 'rotate(0deg)', 
                    transition: 'var(--transition-smooth)' 
                  }} 
                />
              </button>
              <div 
                className="faq-answer-container" 
                style={{ maxHeight: openFaq === idx ? '200px' : '0' }}
              >
                <div className="faq-answer">
                  {faq.a}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <style>{`
        .desktop-only-box {
          display: block;
        }
        @media(max-width: 768px) {
          .desktop-only-box {
            display: none !important;
          }
        }
      `}</style>
    </div>
  );
};

export default Home;
