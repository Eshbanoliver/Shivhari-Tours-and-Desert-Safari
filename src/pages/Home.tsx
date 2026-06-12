import { Link } from 'react-router-dom';
import { useState, useEffect, useRef } from 'react';
import { Shield, MapPin, Compass, ArrowRight, ChevronLeft, ChevronRight, CheckCircle, ChevronDown, Users, Award, ThumbsUp, Tent } from 'lucide-react';
import { FaCampground, FaTaxi, FaCarSide, FaQuoteLeft } from 'react-icons/fa';

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

      {/* About Us Summary (Who We Are) */}
      <section className="section container" style={{ position: 'relative' }}>
        {/* Ambient glow for the Who We Are section */}
        <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', width: '80%', height: '80%', borderRadius: '50%', background: 'radial-gradient(circle, rgba(240, 123, 63, 0.15) 0%, transparent 60%)', filter: 'blur(80px)', pointerEvents: 'none', zIndex: 0 }} />
        
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '60px', alignItems: 'center', position: 'relative', zIndex: 1 }}>
          
          {/* Left Column: Text & Features */}
          <div className="animate-fade-in glass-panel" style={{ padding: '45px', borderRadius: '24px', border: '1px solid rgba(240, 123, 63, 0.25)', boxShadow: '0 25px 50px rgba(0,0,0,0.3)', background: 'var(--card-bg)', backdropFilter: 'blur(20px)' }}>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '10px', padding: '8px 20px', borderRadius: '30px', background: 'linear-gradient(135deg, rgba(240, 123, 63, 0.15), rgba(255, 212, 96, 0.1))', border: '1px solid rgba(240, 123, 63, 0.4)', marginBottom: '25px', boxShadow: '0 5px 15px rgba(240, 123, 63, 0.1)' }}>
              <span style={{ width: '10px', height: '10px', borderRadius: '50%', background: 'var(--primary)', boxShadow: '0 0 12px var(--primary)' }} className="ping-dot"></span>
              <span style={{ color: 'var(--primary)', fontWeight: '800', textTransform: 'uppercase', letterSpacing: '2px', fontSize: '0.85rem' }}>Who We Are</span>
            </div>
            
            <h2 style={{ fontSize: 'var(--fs-h2)', marginTop: '0', marginBottom: '25px', textAlign: 'left', lineHeight: '1.2' }}>
              Crafting Legendary <br/><span style={{ background: 'linear-gradient(135deg, var(--primary) 0%, var(--secondary) 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', display: 'inline-block', filter: 'drop-shadow(0 4px 8px rgba(240, 123, 63, 0.3))' }}>Thar Desert</span> Experiences
            </h2>
            
            <p style={{ color: 'var(--text-muted)', fontSize: '1.1rem', marginBottom: '35px', lineHeight: '1.8' }}>
              Nestled in the Golden City of Jaisalmer, Shivhari Tours and Desert Safari is a premier destination management agency. We are a family of local guides passionate about sharing the vibrant hospitality, folklore, and adventure of Sam Sand Dunes.
            </p>

            {/* Icon list of features */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', marginBottom: '40px' }}>
              {[
                { title: "Genuine Local Guides", desc: "Native desert residents showing you hidden spots.", icon: <Shield size={24} color="var(--primary)" /> },
                { title: "Safe Dune Bashing", desc: "Experienced drivers and certified 4x4 vehicles.", icon: <Compass size={24} color="var(--secondary)" /> }
              ].map((feat, idx) => (
                <div key={idx} className="feature-item" style={{ display: 'flex', gap: '20px', alignItems: 'flex-start', padding: '16px', borderRadius: '16px', background: 'rgba(255,255,255,0.02)', border: '1px solid transparent', transition: 'var(--transition-smooth)' }}>
                  <div className="feature-icon" style={{ display: 'flex', padding: '14px', borderRadius: '50%', background: 'linear-gradient(135deg, rgba(240, 123, 63, 0.1), rgba(255, 212, 96, 0.05))', border: '1px solid rgba(240, 123, 63, 0.2)', flexShrink: 0, transition: 'var(--transition-smooth)', boxShadow: '0 8px 20px rgba(0,0,0,0.1)' }}>
                    {feat.icon}
                  </div>
                  <div>
                    <h4 style={{ fontSize: '1.15rem', color: 'var(--text-color)', fontWeight: '700', marginBottom: '6px' }}>{feat.title}</h4>
                    <p style={{ color: 'var(--text-muted)', fontSize: '0.98rem', margin: 0, lineHeight: '1.5' }}>{feat.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <Link to="/about" className="btn btn-primary" style={{ padding: '16px 36px', width: '100%', fontSize: '1.1rem', borderRadius: '16px', boxShadow: '0 10px 30px rgba(240, 123, 63, 0.4)' }}>
              Discover Our Story <ArrowRight size={20} />
            </Link>
          </div>
          
          {/* Right Column: Double Overlapping Image Stack */}
          <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '480px', position: 'relative' }} className="image-stack-container">
            {/* Background offset image (Jeep Safari) */}
            <div 
              className="stack-bg-img" 
              style={{ 
                overflow: 'hidden', 
                borderRadius: '30px', 
                width: '70%', 
                height: '320px',
                position: 'absolute',
                top: '0',
                left: '0',
                zIndex: 1,
                boxShadow: '0 20px 40px rgba(0,0,0,0.5)',
                border: '2px solid rgba(255,255,255,0.1)',
                transition: 'var(--transition-smooth)'
              }}
            >
              <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(135deg, rgba(240, 123, 63, 0.2), transparent)', zIndex: 1, pointerEvents: 'none' }} />
              <img src={jeepImg} alt="Dune Bashing Jaisalmer" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            </div>

            {/* Foreground image (Desert Camp) */}
            <div 
              className="stack-fg-img" 
              style={{ 
                overflow: 'hidden', 
                borderRadius: '30px', 
                width: '70%', 
                height: '320px',
                position: 'absolute',
                bottom: '0',
                right: '0',
                zIndex: 2,
                boxShadow: '0 25px 50px rgba(0,0,0,0.6)',
                border: '2px solid rgba(240, 123, 63, 0.4)',
                transition: 'var(--transition-smooth)'
              }}
            >
              <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(11, 15, 25, 0.4), transparent)', zIndex: 1, pointerEvents: 'none' }} />
              <img src={campImg} alt="Desert Camping Jaisalmer" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            </div>

            {/* Floating Trust Badge */}
            <div 
              className="trust-badge" 
              style={{ 
                position: 'absolute', 
                bottom: '10%', 
                left: '-5%', 
                padding: '20px 30px', 
                background: 'linear-gradient(135deg, rgba(240, 123, 63, 0.95), rgba(216, 98, 39, 0.95))', 
                color: 'white', 
                borderRadius: '20px', 
                border: '1px solid rgba(255, 255, 255, 0.2)',
                zIndex: 3,
                boxShadow: '0 15px 35px rgba(240, 123, 63, 0.5)',
                backdropFilter: 'blur(10px)',
                transition: 'var(--transition-smooth)',
                animation: 'float 4s ease-in-out infinite'
              }}
            >
              <h4 style={{ color: 'white', fontSize: '1.3rem', fontWeight: '800', marginBottom: '6px', textShadow: '0 2px 4px rgba(0,0,0,0.2)' }}>10+ Years</h4>
              <p style={{ fontSize: '0.9rem', opacity: '0.9', margin: 0, fontWeight: '500' }}>Desert Hospitality</p>
            </div>
          </div>

        </div>

        <style>{`
          .image-stack-container:hover .stack-bg-img {
            transform: translate(-15px, -15px) scale(1.03) rotate(-2deg);
            box-shadow: 0 30px 60px rgba(0,0,0,0.6);
          }
          .image-stack-container:hover .stack-fg-img {
            transform: translate(15px, 15px) scale(1.05) rotate(2deg);
            border-color: rgba(240, 123, 63, 0.7);
            box-shadow: 0 30px 60px rgba(240, 123, 63, 0.3);
          }
          .image-stack-container:hover .trust-badge {
            transform: scale(1.1) translateY(-10px) !important;
            box-shadow: 0 20px 40px rgba(240, 123, 63, 0.6);
          }
          .feature-item:hover {
            background: rgba(240, 123, 63, 0.05) !important;
            border-color: rgba(240, 123, 63, 0.2) !important;
            transform: translateX(10px);
          }
          .feature-item:hover .feature-icon {
            background: rgba(240, 123, 63, 0.2) !important;
            transform: scale(1.1) rotate(5deg);
            border-color: rgba(240, 123, 63, 0.5) !important;
          }
          .ping-dot {
            animation: pulse-ring 1.5s cubic-bezier(0.215, 0.610, 0.355, 1) infinite;
          }
          @keyframes pulse-ring {
            0% { transform: scale(0.95); opacity: 0.5; box-shadow: 0 0 0 0 rgba(240, 123, 63, 0.7); }
            70% { transform: scale(1); opacity: 1; box-shadow: 0 0 0 10px rgba(240, 123, 63, 0); }
            100% { transform: scale(0.95); opacity: 0.5; box-shadow: 0 0 0 0 rgba(240, 123, 63, 0); }
          }
          @keyframes float {
            0% { transform: translateY(0px); }
            50% { transform: translateY(-15px); }
            100% { transform: translateY(0px); }
          }
          @media(max-width: 576px) {
            .image-stack-container {
              height: 360px !important;
            }
            .stack-bg-img, .stack-fg-img {
              height: 240px !important;
            }
            .trust-badge {
              bottom: -10% !important;
              left: 10% !important;
            }
          }
        `}</style>
      </section>

      {/* Key Metrics Section */}
      <section className="section" style={{ 
        position: 'relative',
        overflow: 'hidden',
        padding: '120px 5%',
        background: 'linear-gradient(180deg, var(--bg-color) 0%, rgba(240, 123, 63, 0.05) 50%, var(--bg-color) 100%)'
      }}>
        {/* Animated background blobs */}
        <div className="metric-blob metric-blob-1"></div>
        <div className="metric-blob metric-blob-2"></div>

        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <div style={{ textAlign: 'center', marginBottom: '70px' }}>
            <span style={{ color: 'var(--primary)', fontWeight: '800', textTransform: 'uppercase', letterSpacing: '2px', fontSize: '0.9rem', display: 'inline-flex', alignItems: 'center', gap: '10px' }}>
              <span style={{ width: '30px', height: '2px', background: 'var(--primary)' }}></span>
              Our Impact
              <span style={{ width: '30px', height: '2px', background: 'var(--primary)' }}></span>
            </span>
            <h2 style={{ fontSize: 'var(--fs-h2)', marginTop: '15px', background: 'linear-gradient(135deg, var(--text-color) 0%, var(--primary) 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', textShadow: '0 10px 30px rgba(240, 123, 63, 0.15)' }}>
              The Desert Legacy in Numbers
            </h2>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '40px' }}>
            {[
              { value: 5000, label: 'Happy Explorers', suffix: '+', icon: <Users size={32} color="#fff" />, color: 'var(--primary)', glow: 'rgba(240, 123, 63, 0.6)' },
              { value: 12, label: 'Years Experience', suffix: '+', icon: <Award size={32} color="#fff" />, color: 'var(--secondary)', glow: 'rgba(255, 212, 96, 0.6)' },
              { value: 99, label: 'Positive Reviews', suffix: '%', icon: <ThumbsUp size={32} color="#fff" />, color: 'var(--primary)', glow: 'rgba(240, 123, 63, 0.6)' },
              { value: 15, label: 'Luxury Tents', suffix: '', icon: <Tent size={32} color="#fff" />, color: 'var(--secondary)', glow: 'rgba(255, 212, 96, 0.6)' }
            ].map((metric, i) => (
              <div 
                key={i} 
                className="metric-card animate-fade-in"
                style={{ 
                  '--glow-color': metric.glow,
                  animationDelay: `${i * 0.1}s` 
                } as React.CSSProperties}
              >
                <div className="metric-icon-wrapper" style={{ background: `linear-gradient(135deg, ${metric.color}, rgba(0,0,0,0.8))` }}>
                  {metric.icon}
                </div>
                <div className="metric-value-container">
                  <div className="metric-value">
                    <CountUp end={metric.value} suffix={metric.suffix} />
                  </div>
                </div>
                <p className="metric-label">{metric.label}</p>
                <div className="metric-border-glow"></div>
              </div>
            ))}
          </div>
        </div>

        <style>{`
          .metric-blob {
            position: absolute;
            border-radius: 50%;
            filter: blur(100px);
            opacity: 0.5;
            animation: move-blob 12s infinite alternate cubic-bezier(0.4, 0, 0.2, 1);
            z-index: 0;
            pointer-events: none;
          }
          .metric-blob-1 {
            top: -10%; left: -10%; width: 50vw; height: 50vw;
            max-width: 600px; max-height: 600px;
            background: rgba(240, 123, 63, 0.15);
          }
          .metric-blob-2 {
            bottom: -10%; right: -10%; width: 60vw; height: 60vw;
            max-width: 700px; max-height: 700px;
            background: rgba(255, 212, 96, 0.1);
            animation-delay: -6s;
          }
          @keyframes move-blob {
            0% { transform: translate(0, 0) scale(1); }
            100% { transform: translate(80px, 80px) scale(1.1); }
          }
          .metric-card {
            position: relative;
            background: var(--card-bg);
            backdrop-filter: blur(20px);
            border-radius: 30px;
            padding: 60px 30px;
            text-align: center;
            border: 1px solid rgba(255,255,255,0.05);
            transition: all 0.5s cubic-bezier(0.16, 1, 0.3, 1);
            overflow: hidden;
            box-shadow: 0 10px 30px rgba(0,0,0,0.1);
          }
          .metric-card:hover {
            transform: translateY(-20px) scale(1.02);
            box-shadow: 0 30px 60px rgba(0,0,0,0.3), 0 0 50px var(--glow-color);
            border-color: rgba(255,255,255,0.3);
            background: rgba(17, 24, 39, 0.7);
          }
          .metric-icon-wrapper {
            width: 80px;
            height: 80px;
            margin: 0 auto 30px auto;
            border-radius: 24px;
            display: flex;
            align-items: center;
            justify-content: center;
            box-shadow: 0 15px 30px rgba(0,0,0,0.3);
            transform: rotate(-10deg);
            transition: all 0.5s cubic-bezier(0.16, 1, 0.3, 1);
          }
          .metric-card:hover .metric-icon-wrapper {
            transform: rotate(0deg) scale(1.15) translateY(-5px);
            box-shadow: 0 20px 40px var(--glow-color);
          }
          .metric-value-container {
            margin-bottom: 12px;
          }
          .metric-value {
            font-size: 3.8rem;
            font-weight: 800;
            line-height: 1;
            background: linear-gradient(135deg, var(--text-color) 0%, var(--primary) 100%);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            font-variant-numeric: tabular-nums;
            transition: all 0.4s ease;
          }
          .metric-card:hover .metric-value {
            transform: scale(1.05);
            text-shadow: 0 10px 20px rgba(0,0,0,0.2);
          }
          .metric-label {
            color: var(--text-muted);
            font-size: 1.05rem;
            font-weight: 700;
            text-transform: uppercase;
            letter-spacing: 2px;
            margin: 0;
            transition: color 0.4s ease;
          }
          .metric-card:hover .metric-label {
            color: #fff;
          }
          .metric-border-glow {
            position: absolute;
            inset: 0;
            border-radius: 30px;
            padding: 2px;
            background: linear-gradient(135deg, var(--primary), var(--secondary));
            -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
            -webkit-mask-composite: xor;
            mask-composite: exclude;
            opacity: 0;
            transition: opacity 0.5s ease;
            pointer-events: none;
          }
          .metric-card:hover .metric-border-glow {
            opacity: 1;
          }
        `}</style>
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
              link: "/services",
              icon: <FaCarSide size={22} color="var(--primary)" />
            },
            {
              title: "Desert Camps",
              img: campImg,
              desc: "Indulge in luxurious Swiss cottage tents complete with modern amenities and local musical programs.",
              link: "/services",
              icon: <FaCampground size={22} color="var(--primary)" />
            },
            {
              title: "Taxi Services & Tours",
              img: taxiImg,
              desc: "Clean, comfortable vehicles with local drivers for smooth city sightseeing and station transfers.",
              link: "/services",
              icon: <FaTaxi size={22} color="var(--primary)" />
            }
          ].map((service, idx) => (
            <div key={idx} className="glass-panel hover-lift glow-card" style={{ overflow: 'hidden', display: 'flex', flexDirection: 'column' }}>
              <div style={{ height: '220px', overflow: 'hidden' }}>
                <img src={service.img} alt={service.title} style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'var(--transition-smooth)' }} />
              </div>
              <div style={{ padding: '30px', flexGrow: 1, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                <div>
                  <h3 style={{ fontSize: '1.5rem', marginBottom: '12px', display: 'flex', alignItems: 'center', gap: '10px' }}>
                    {service.icon} <span>{service.title}</span>
                  </h3>
                  <p style={{ color: 'var(--text-muted)', marginBottom: '24px', fontSize: '0.98rem' }}>{service.desc}</p>
                </div>
                <div style={{ display: 'flex', gap: '10px' }}>
                  <Link to={service.link} className="btn" style={{ flex: 1, justifyContent: 'center', padding: '12px 10px', fontSize: '0.9rem', color: 'var(--text-color)', border: '1px solid var(--glass-border)', background: 'var(--card-bg)' }}>
                    Explore Details
                  </Link>
                  <Link to="/contact" className="btn btn-primary" style={{ flex: 1, justifyContent: 'center', padding: '12px 10px', fontSize: '0.9rem' }}>
                    Contact Us
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="section" style={{ position: 'relative', overflow: 'hidden', padding: '100px 5%' }}>
        {/* Background elements */}
        <div style={{ position: 'absolute', top: '10%', right: '-5%', width: '400px', height: '400px', background: 'radial-gradient(circle, rgba(240, 123, 63, 0.15) 0%, transparent 70%)', filter: 'blur(60px)', zIndex: 0, pointerEvents: 'none' }} />
        
        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '60px', alignItems: 'center' }}>
            
            {/* Visual Side */}
            <div className="mission-visual animate-fade-in" style={{ position: 'relative', height: '450px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
              <div className="mission-center-orb glass-panel" style={{ width: '220px', height: '220px', borderRadius: '50%', display: 'flex', justifyContent: 'center', alignItems: 'center', background: 'rgba(240, 123, 63, 0.08)', border: '2px solid rgba(240, 123, 63, 0.3)', boxShadow: '0 0 40px rgba(240, 123, 63, 0.2)', zIndex: 2, position: 'relative', transition: 'all 0.5s ease' }}>
                <Compass size={90} color="var(--primary)" style={{ filter: 'drop-shadow(0 10px 15px rgba(240, 123, 63, 0.5))' }} />
              </div>
              {/* Orbiting rings */}
              <div className="orbit-ring" style={{ position: 'absolute', width: '320px', height: '320px', borderRadius: '50%', border: '1px dashed rgba(240, 123, 63, 0.4)', zIndex: 1 }}></div>
              <div className="orbit-ring orbit-ring-reverse" style={{ position: 'absolute', width: '420px', height: '420px', borderRadius: '50%', border: '1px dotted rgba(255, 212, 96, 0.4)', zIndex: 1 }}></div>
            </div>

            {/* Text Side */}
            <div className="mission-text animate-fade-in">
              <span style={{ display: 'inline-block', padding: '6px 16px', borderRadius: '30px', background: 'rgba(240, 123, 63, 0.1)', border: '1px solid rgba(240, 123, 63, 0.2)', color: 'var(--primary)', fontWeight: '800', textTransform: 'uppercase', letterSpacing: '2px', fontSize: '0.85rem', marginBottom: '20px' }}>
                Our Purpose
              </span>
              <h2 style={{ fontSize: 'var(--fs-h2)', marginTop: '0', marginBottom: '25px', lineHeight: '1.2' }}>
                Setting the Benchmark for <span style={{ background: 'linear-gradient(135deg, var(--primary), var(--secondary))', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', display: 'inline-block', filter: 'drop-shadow(0 2px 4px rgba(240, 123, 63, 0.3))' }}>Adventure Travel</span>
              </h2>
              <p style={{ color: 'var(--text-muted)', fontSize: '1.15rem', lineHeight: '1.8', marginBottom: '35px', position: 'relative', paddingLeft: '24px', borderLeft: '4px solid var(--primary)' }}>
                Our mission is to establish the benchmark for adventure travel in Rajasthan. We aim to bring travelers closer to the rich heritage and vibrant colors of Jaisalmer, ensuring safe, culturally respectful, and breathtaking excursions.
              </p>
              <div style={{ display: 'inline-flex', alignItems: 'center', gap: '15px', padding: '15px 25px', background: 'linear-gradient(135deg, rgba(255,255,255,0.03), rgba(255,255,255,0.01))', borderRadius: '16px', border: '1px solid rgba(255,255,255,0.08)', boxShadow: '0 10px 30px rgba(0,0,0,0.1)' }}>
                <div style={{ width: '45px', height: '45px', borderRadius: '50%', background: 'linear-gradient(135deg, rgba(240, 123, 63, 0.2), transparent)', display: 'flex', alignItems: 'center', justifyContent: 'center', border: '1px solid rgba(240, 123, 63, 0.3)' }}>
                  <Shield size={22} color="var(--primary)" />
                </div>
                <span style={{ fontWeight: '700', color: 'var(--text-color)', fontSize: '1.1rem' }}>Safety & Heritage</span>
              </div>
            </div>

          </div>
        </div>
        <style>{`
          .orbit-ring { animation: spin 20s linear infinite; pointer-events: none; }
          .orbit-ring-reverse { animation: spin 30s linear infinite reverse; pointer-events: none; }
          @keyframes spin { 100% { transform: rotate(360deg); } }
          .mission-visual:hover .mission-center-orb { transform: scale(1.1); box-shadow: 0 0 60px rgba(240, 123, 63, 0.4) !important; border-color: var(--primary) !important; }
        `}</style>
      </section>

      {/* Core Values Section */}
      <section className="section" style={{ background: 'linear-gradient(180deg, rgba(11, 15, 25, 0.2) 0%, rgba(11, 15, 25, 0.8) 100%)', position: 'relative', borderTop: '1px solid var(--glass-border)' }}>
        <div style={{ position: 'absolute', bottom: '0', left: '0', width: '100%', height: '50%', background: 'radial-gradient(ellipse at bottom, rgba(255, 212, 96, 0.05) 0%, transparent 60%)', pointerEvents: 'none', zIndex: 0 }} />
        
        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <div style={{ textAlign: 'center', marginBottom: '80px' }}>
            <span style={{ color: 'var(--secondary)', fontWeight: '800', textTransform: 'uppercase', letterSpacing: '2px', fontSize: '0.9rem', display: 'inline-block', marginBottom: '10px' }}>What Drives Us</span>
            <h2 className="section-title" style={{ marginTop: '0', marginBottom: '0' }}>Our Core Values</h2>
          </div>

          <div className="values-grid">
            {[
              { title: "Safety First", desc: "We utilize advanced backup services and trained drivers for every desert excursion.", icon: <Shield size={36} color="#fff" />, color: '#f07b3f' },
              { title: "True Hospitality", desc: "Experience the authentic warmth and tradition of true Rajasthani hospitality.", icon: <CheckCircle size={36} color="#fff" />, color: '#ffd460' },
              { title: "No Hidden Costs", desc: "Honest pricing with completely transparent inclusions. What you see is what you get.", icon: <Award size={36} color="#fff" />, color: '#2d4059' }
            ].map((value, idx) => (
              <div key={idx} className="value-card glass-panel" style={{ padding: '50px 30px', textAlign: 'center', position: 'relative', overflow: 'hidden', borderTop: `4px solid ${value.color}` }}>
                {/* Background colored glow for card */}
                <div style={{ position: 'absolute', top: 0, left: '50%', transform: 'translateX(-50%)', width: '100px', height: '100px', background: value.color, filter: 'blur(60px)', opacity: 0.15, zIndex: 0, pointerEvents: 'none' }}></div>
                
                <div className="value-icon-box" style={{ width: '80px', height: '80px', borderRadius: '24px', background: `linear-gradient(135deg, ${value.color}, rgba(0,0,0,0.6))`, display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 30px auto', boxShadow: `0 15px 30px ${value.color}40`, transition: 'all 0.5s cubic-bezier(0.16, 1, 0.3, 1)', position: 'relative', zIndex: 1 }}>
                  {value.icon}
                </div>
                <h3 style={{ fontSize: '1.5rem', marginBottom: '16px', position: 'relative', zIndex: 1 }}>{value.title}</h3>
                <p style={{ color: 'var(--text-muted)', lineHeight: '1.8', fontSize: '1.05rem', position: 'relative', zIndex: 1 }}>{value.desc}</p>
              </div>
            ))}
          </div>
        </div>

        <style>{`
          .values-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
            gap: 40px;
          }
          .value-card {
            transition: all 0.5s cubic-bezier(0.16, 1, 0.3, 1);
          }
          .value-card:hover {
            transform: translateY(-15px);
            box-shadow: 0 25px 50px rgba(0,0,0,0.3);
            border-color: rgba(255,255,255,0.3) !important;
            background: rgba(17, 24, 39, 0.8);
          }
          .value-card:hover .value-icon-box {
            transform: scale(1.15) rotate(5deg) translateY(-5px);
          }
          @media(min-width: 992px) {
            .values-grid > div:nth-child(1) { transform: translateY(0px); }
            .values-grid > div:nth-child(2) { transform: translateY(40px); }
            .values-grid > div:nth-child(3) { transform: translateY(0px); }
            
            .values-grid > div:nth-child(1):hover { transform: translateY(-15px); }
            .values-grid > div:nth-child(2):hover { transform: translateY(25px); }
            .values-grid > div:nth-child(3):hover { transform: translateY(-15px); }
          }
        `}</style>
      </section>

      {/* Why Choose Us */}
      <section className="section" style={{ position: 'relative', overflow: 'hidden', padding: '120px 5%', background: 'linear-gradient(135deg, var(--bg-color) 0%, rgba(240, 123, 63, 0.05) 100%)', borderTop: '1px solid var(--glass-border)' }}>
        {/* Creative Abstract Background Elements */}
        <div style={{ position: 'absolute', top: '-10%', left: '-5%', width: '40vw', height: '40vw', background: 'radial-gradient(circle, rgba(240, 123, 63, 0.08) 0%, transparent 60%)', filter: 'blur(80px)', pointerEvents: 'none' }}></div>
        <div style={{ position: 'absolute', bottom: '-10%', right: '-5%', width: '35vw', height: '35vw', background: 'radial-gradient(circle, rgba(255, 212, 96, 0.05) 0%, transparent 60%)', filter: 'blur(80px)', pointerEvents: 'none' }}></div>
        
        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <div style={{ textAlign: 'center', marginBottom: '80px' }}>
            <span style={{ display: 'inline-block', padding: '8px 24px', borderRadius: '30px', background: 'linear-gradient(135deg, rgba(240, 123, 63, 0.15), rgba(255, 212, 96, 0.1))', border: '1px solid rgba(240, 123, 63, 0.3)', color: 'var(--primary)', fontWeight: '800', textTransform: 'uppercase', letterSpacing: '3px', fontSize: '0.9rem', marginBottom: '20px', boxShadow: '0 10px 20px rgba(0,0,0,0.1)' }}>
              The Shivhari Difference
            </span>
            <h2 className="section-title" style={{ fontSize: '3.5rem', marginBottom: '0', background: 'var(--title-gradient)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', textShadow: '0 10px 30px rgba(240, 123, 63, 0.15)' }}>
              Why Choose Us
            </h2>
          </div>

          <div className="why-choose-grid">
            {[
              { id: "01", title: "Central Location", desc: "Located directly on Airforce Road, making it incredibly easy to drop in, consult our team, and plan your sunset safari.", icon: <MapPin size={28} color="var(--primary)" /> },
              { id: "02", title: "Expert Local Team", desc: "Our entire staff consists of local villagers and native guides who know the dunes like the back of their hand.", icon: <Users size={28} color="var(--secondary)" /> },
              { id: "03", title: "Luxury & Comfort", desc: "Well-sanitized vehicles, high-speed 4x4s, and deeply cozy bedding in all of our Swiss luxury tents.", icon: <Tent size={28} color="var(--primary)" /> }
            ].map((item, i) => (
              <div key={i} className="why-card glass-panel" style={{ padding: '50px 40px', position: 'relative', overflow: 'hidden', borderRadius: '30px', display: 'flex', flexDirection: 'column', gap: '20px', zIndex: 1 }}>
                
                {/* Giant background number watermark */}
                <div style={{ position: 'absolute', right: '-10px', top: '-20px', fontSize: '10rem', fontWeight: '900', color: 'rgba(240, 123, 63, 0.05)', lineHeight: 1, zIndex: 0, transition: 'all 0.5s ease', fontFamily: 'monospace' }} className="watermark-number">
                  {item.id}
                </div>

                <div className="why-icon-box" style={{ width: '70px', height: '70px', borderRadius: '20px', background: 'var(--card-bg)', border: '1px solid var(--glass-border)', display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 1, transition: 'all 0.4s ease', backdropFilter: 'blur(10px)' }}>
                  {item.icon}
                </div>
                
                <div style={{ zIndex: 1 }}>
                  <h4 style={{ fontSize: '1.6rem', marginBottom: '15px', color: 'var(--text-color)', fontWeight: '700' }}>{item.title}</h4>
                  <p style={{ color: 'var(--text-muted)', lineHeight: '1.8', fontSize: '1.05rem', margin: 0 }}>{item.desc}</p>
                </div>

                {/* Animated bottom border glow */}
                <div className="card-bottom-glow" style={{ position: 'absolute', bottom: 0, left: 0, width: '100%', height: '4px', background: 'linear-gradient(90deg, var(--primary), var(--secondary))', transform: 'scaleX(0)', transformOrigin: 'left', transition: 'transform 0.5s cubic-bezier(0.16, 1, 0.3, 1)' }}></div>
              </div>
            ))}
          </div>
        </div>

        <style>{`
          .why-choose-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
            gap: 40px;
            position: relative;
          }
          .why-card {
            transition: all 0.5s cubic-bezier(0.16, 1, 0.3, 1);
            border: 1px solid var(--glass-border);
            background: var(--card-bg);
          }
          .why-card:hover {
            transform: translateY(-20px);
            border-color: rgba(240, 123, 63, 0.3);
            box-shadow: 0 20px 50px rgba(0,0,0,0.1), 0 0 30px rgba(240, 123, 63, 0.1);
          }
          .why-card:hover .why-icon-box {
            background: linear-gradient(135deg, rgba(240, 123, 63, 0.2), transparent);
            border-color: rgba(240, 123, 63, 0.5);
            transform: scale(1.1) rotate(5deg);
            box-shadow: 0 15px 30px rgba(240, 123, 63, 0.2);
          }
          .why-card:hover .watermark-number {
            color: rgba(240, 123, 63, 0.15);
            transform: scale(1.1) translate(-10px, 10px);
          }
          .why-card:hover .card-bottom-glow {
            transform: scaleX(1);
          }
          
          /* Connecting dashed line for desktop */
          @media(min-width: 1024px) {
            .why-choose-grid::before {
              content: '';
              position: absolute;
              top: 85px;
              left: 5%;
              width: 90%;
              height: 2px;
              background: repeating-linear-gradient(90deg, rgba(240,123,63,0.2) 0, rgba(240,123,63,0.2) 10px, transparent 10px, transparent 20px);
              z-index: 0;
            }
          }
        `}</style>
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
      <section className="section" style={{ position: 'relative', overflow: 'hidden', padding: '120px 5%', background: 'linear-gradient(180deg, var(--bg-color) 0%, rgba(240, 123, 63, 0.03) 100%)' }}>
        
        {/* Decorative Background Quote */}
        <div style={{ position: 'absolute', top: '5%', left: '5%', fontSize: '35rem', color: 'rgba(240, 123, 63, 0.04)', fontFamily: 'serif', lineHeight: 1, pointerEvents: 'none', zIndex: 0, userSelect: 'none' }}>"</div>
        
        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <div style={{ textAlign: 'center', marginBottom: '60px' }}>
            <span style={{ color: 'var(--primary)', fontWeight: '800', textTransform: 'uppercase', letterSpacing: '2px', fontSize: '0.9rem', display: 'inline-block', marginBottom: '10px' }}>Guest Experiences</span>
            <h2 className="section-title" style={{ marginTop: '0' }}>What Our Guests Say</h2>
          </div>
          
          <div style={{ maxWidth: '900px', margin: '0 auto', position: 'relative' }} className="testimonial-wrapper">
            
            {/* The Active Card */}
            <div className="glass-panel testimonial-card animate-fade-in" key={activeTestimonial} style={{ padding: '60px', position: 'relative', overflow: 'hidden', borderRadius: '30px', border: '1px solid var(--glass-border)', background: 'var(--card-bg)', boxShadow: '0 25px 50px rgba(0,0,0,0.1)' }}>
              
              {/* Top Accent Line */}
              <div style={{ position: 'absolute', top: 0, left: '50%', transform: 'translateX(-50%)', width: '200px', height: '4px', background: 'linear-gradient(90deg, transparent, var(--primary), var(--secondary), transparent)' }}></div>

              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
                <div style={{ width: '80px', height: '80px', borderRadius: '50%', background: 'linear-gradient(135deg, rgba(240, 123, 63, 0.1), rgba(255, 212, 96, 0.05))', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '30px', boxShadow: '0 10px 20px rgba(0,0,0,0.05)', border: '1px solid rgba(240, 123, 63, 0.2)' }}>
                  <FaQuoteLeft size={36} color="var(--primary)" />
                </div>
                
                <p className="testimonial-quote" style={{ fontSize: '1.45rem', lineHeight: '1.8', color: 'var(--text-color)', marginBottom: '40px', fontStyle: 'italic', fontWeight: '300' }}>
                  "{testimonials[activeTestimonial].quote}"
                </p>
                
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                  <h4 className="testimonial-author" style={{ fontSize: '1.3rem', fontWeight: '800', color: 'var(--primary)', marginBottom: '5px' }}>{testimonials[activeTestimonial].author}</h4>
                  <span style={{ color: 'var(--text-muted)', fontSize: '0.95rem', textTransform: 'uppercase', letterSpacing: '1px', fontWeight: '600' }}>{testimonials[activeTestimonial].role}</span>
                </div>
              </div>
            </div>

            {/* Slider controls - Floating on sides */}
            <div className="slider-controls">
              <button onClick={prevTestimonial} className="slider-btn glass-panel left-btn">
                <ChevronLeft size={24} />
              </button>
              <button onClick={nextTestimonial} className="slider-btn glass-panel right-btn">
                <ChevronRight size={24} />
              </button>
            </div>

            {/* Progress Dots */}
            <div style={{ display: 'flex', justifyContent: 'center', gap: '10px', marginTop: '40px' }}>
              {testimonials.map((_, idx) => (
                <button 
                  key={idx} 
                  onClick={() => setActiveTestimonial(idx)}
                  style={{ 
                    width: activeTestimonial === idx ? '30px' : '10px', 
                    height: '10px', 
                    borderRadius: '5px', 
                    background: activeTestimonial === idx ? 'var(--primary)' : 'rgba(240, 123, 63, 0.2)', 
                    border: 'none', 
                    cursor: 'pointer',
                    transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)'
                  }} 
                  aria-label={`Go to testimonial ${idx + 1}`}
                />
              ))}
            </div>

          </div>

          <div style={{ textAlign: 'center', marginTop: '50px' }}>
            <Link to="/testimonials" className="btn btn-secondary" style={{ padding: '14px 32px', borderRadius: '30px', boxShadow: '0 10px 20px rgba(0,0,0,0.05)' }}>View All Experiences</Link>
          </div>
        </div>

        <style>{`
          .slider-controls {
            position: absolute;
            top: 50%;
            left: -30px;
            right: -30px;
            transform: translateY(-50%);
            display: flex;
            justify-content: space-between;
            pointer-events: none;
            z-index: 2;
          }
          .slider-btn {
            width: 60px;
            height: 60px;
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            cursor: pointer;
            border: 1px solid var(--glass-border);
            color: var(--text-color);
            transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
            background: var(--card-bg);
            pointer-events: auto;
          }
          .slider-btn:hover {
            transform: scale(1.1);
            background: var(--primary);
            color: white;
            border-color: var(--primary);
            box-shadow: 0 10px 25px rgba(240, 123, 63, 0.4);
          }
          .left-btn:hover { transform: scale(1.1) translateX(-5px); }
          .right-btn:hover { transform: scale(1.1) translateX(5px); }
          
          @media(max-width: 992px) {
            .slider-controls {
              position: static;
              transform: none;
              justify-content: center;
              gap: 20px;
              margin-top: 30px;
            }
          }
          @media(max-width: 768px) {
            .slider-btn {
              width: 50px; height: 50px;
            }
            .testimonial-card { padding: 40px 20px !important; }
            .testimonial-quote { font-size: 1.15rem !important; }
          }
        `}</style>
      </section>

      {/* FAQ Accordion Section */}
      <section className="section" style={{ padding: '120px 5%', position: 'relative' }}>
        {/* Background Blob */}
        <div style={{ position: 'absolute', top: '20%', right: '10%', width: '300px', height: '300px', background: 'radial-gradient(circle, rgba(240, 123, 63, 0.05) 0%, transparent 70%)', filter: 'blur(50px)', pointerEvents: 'none', zIndex: 0 }}></div>
        
        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <div className="faq-grid">
            
            {/* Left Side: Sticky Title & Visual */}
            <div className="faq-header" style={{ position: 'sticky', top: '120px', height: 'fit-content' }}>
              <span style={{ display: 'inline-block', padding: '6px 16px', borderRadius: '30px', background: 'rgba(240, 123, 63, 0.1)', border: '1px solid rgba(240, 123, 63, 0.2)', color: 'var(--primary)', fontWeight: '800', textTransform: 'uppercase', letterSpacing: '2px', fontSize: '0.85rem', marginBottom: '20px' }}>Support & Info</span>
              <h2 className="section-title" style={{ textAlign: 'left', marginBottom: '30px', fontSize: '3.2rem', lineHeight: '1.2' }}>
                Frequently Asked <br/><span style={{ background: 'linear-gradient(135deg, var(--primary), var(--secondary))', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>Questions</span>
              </h2>
              <p style={{ color: 'var(--text-muted)', fontSize: '1.1rem', lineHeight: '1.8', marginBottom: '40px', maxWidth: '400px' }}>
                Everything you need to know about our desert safaris, accommodations, and booking process. Can't find the answer you're looking for? 
              </p>
              <Link to="/contact" className="btn btn-primary" style={{ padding: '15px 35px', borderRadius: '30px', display: 'inline-flex', alignItems: 'center', gap: '10px' }}>
                Contact Support <ArrowRight size={18} />
              </Link>
            </div>

            {/* Right Side: Accordion Cards */}
            <div className="faq-list" style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
              {faqData.map((faq, idx) => (
                <div key={idx} className="glass-panel faq-card" style={{ padding: '0', overflow: 'hidden', border: openFaq === idx ? '1px solid var(--primary)' : '1px solid var(--glass-border)', transition: 'all 0.3s ease', borderRadius: '20px', background: openFaq === idx ? 'rgba(240, 123, 63, 0.02)' : 'var(--card-bg)' }}>
                  <button className="faq-question-btn" onClick={() => toggleFaq(idx)} style={{ width: '100%', display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '25px 30px', background: 'transparent', border: 'none', cursor: 'pointer', textAlign: 'left' }}>
                    <span style={{ fontWeight: '700', fontSize: '1.15rem', color: openFaq === idx ? 'var(--primary)' : 'var(--text-color)', transition: 'color 0.3s ease', paddingRight: '20px' }}>{faq.q}</span>
                    <div style={{ width: '40px', height: '40px', borderRadius: '50%', background: openFaq === idx ? 'var(--primary)' : 'var(--glass-border)', display: 'flex', alignItems: 'center', justifyContent: 'center', transition: 'all 0.3s ease', flexShrink: 0 }}>
                      <ChevronDown size={20} color={openFaq === idx ? '#fff' : 'var(--text-color)'} style={{ transform: openFaq === idx ? 'rotate(180deg)' : 'rotate(0deg)', transition: 'transform 0.4s cubic-bezier(0.16, 1, 0.3, 1)' }} />
                    </div>
                  </button>
                  <div className="faq-answer-wrapper" style={{ maxHeight: openFaq === idx ? '300px' : '0', overflow: 'hidden', transition: 'max-height 0.4s cubic-bezier(0.16, 1, 0.3, 1)' }}>
                    <div style={{ padding: '0 30px 30px 30px', color: 'var(--text-muted)', fontSize: '1.05rem', lineHeight: '1.7', borderTop: openFaq === idx ? '1px dashed rgba(240, 123, 63, 0.2)' : 'none', marginTop: openFaq === idx ? '10px' : '0', paddingTop: openFaq === idx ? '20px' : '0', transition: 'all 0.3s ease' }}>
                      {faq.a}
                    </div>
                  </div>
                </div>
              ))}
            </div>

          </div>
        </div>

        <style>{`
          .faq-grid {
            display: grid;
            grid-template-columns: 1fr 1.5fr;
            gap: 60px;
            align-items: start;
          }
          .faq-card:hover {
            border-color: rgba(240, 123, 63, 0.3);
            transform: translateY(-2px);
            box-shadow: 0 10px 20px rgba(0,0,0,0.05);
          }
          .faq-header .section-title::after {
            display: none;
          }
          @media(max-width: 992px) {
            .faq-grid {
              grid-template-columns: 1fr;
              gap: 40px;
            }
            .faq-header {
              position: static !important;
              text-align: center;
            }
            .faq-header .section-title {
              text-align: center !important;
            }
            .faq-header p {
              margin: 0 auto 30px auto;
            }
          }
        `}</style>
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
