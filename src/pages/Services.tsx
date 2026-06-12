const Services = () => {
  return (
    <div className="section container animate-fade-in">
      <h1 className="section-title">Our Services</h1>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '30px' }}>
        {[
          { title: 'Jeep Safari', desc: 'Experience the thrill of dune bashing in our 4x4 jeeps with experienced drivers.' },
          { title: 'Taxi Service', desc: 'Reliable and comfortable taxi services for sightseeing in and around Jaisalmer.' },
          { title: 'Desert Camp', desc: 'Stay in luxury Swiss tents, enjoy cultural programs, and sleep under the stars.' },
          { title: 'Camel Safari', desc: 'Explore the quiet beauty of the Thar desert on a traditional camel ride.' }
        ].map((service, i) => (
          <div key={i} className="glass-panel" style={{ padding: '30px' }}>
            <h3 style={{ color: 'var(--primary)', marginBottom: '15px' }}>{service.title}</h3>
            <p>{service.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
export default Services;
