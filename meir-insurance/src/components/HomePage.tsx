import "../styles/HomePage.css";

const HomePage: React.FC = () => {
  return (
    <div className="homepage">
      <section className="hero">
        <div className="container">
          <h1>Welcome to Insurance Company</h1>
          <p>Your trusted partner for all insurance needs.</p>
          <a href="/contact" className="btn">
            Get a Quote
          </a>
        </div>
      </section>

      <section className="services">
        <div className="container">
          <h2>Our Services</h2>
          <div className="service">
            <h3>Life Insurance</h3>
            <p>Protect your loved ones with our life insurance plans.</p>
          </div>
          <div className="service">
            <h3>Health Insurance</h3>
            <p>Stay healthy and covered with our health insurance options.</p>
          </div>
          {/* Add more services as needed */}
        </div>
      </section>

      <section className="testimonials">
        <div className="container">
          <h2>What Our Customers Say</h2>
          <div className="testimonial">
            <p>"Great service and competitive rates! Highly recommend."</p>
            <p>
              <strong>John Doe</strong>
            </p>
          </div>
          {/* Add more testimonials as needed */}
        </div>
      </section>
    </div>
  );
};

export default HomePage;
