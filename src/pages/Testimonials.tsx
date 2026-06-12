const Testimonials = () => {
  return (
    <div className="section container animate-fade-in">
      <h1 className="section-title">Testimonials</h1>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '30px' }}>
        {[
          { name: 'Rahul Sharma', review: 'Amazing experience! The jeep safari was thrilling and the desert camp was very comfortable.' },
          { name: 'Anita Desai', review: 'Highly recommend Shivhari Tours. The cultural program at night was beautiful.' },
          { name: 'John Doe', review: 'Great service. The taxi was on time and the driver was very knowledgeable about Jaisalmer.' }
        ].map((t, i) => (
          <div key={i} className="glass-panel" style={{ padding: '30px', fontStyle: 'italic' }}>
            <p style={{ marginBottom: '20px' }}>"{t.review}"</p>
            <p style={{ fontWeight: 'bold', color: 'var(--primary)' }}>- {t.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
export default Testimonials;
