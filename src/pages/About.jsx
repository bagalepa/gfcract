import "../styles/about-us.css";

export default function About() {
  return (
    <section className="about-page">
      {/* HERO */}
      <div className="about-hero">
        <h1>About Us</h1>
        <p>
          Manufacturers of premium polymer buckets and industrial containers
          built for strength, safety, and long-term performance.
        </p>
      </div>

      {/* STORY */}
      <div className="about-us-section">
        <h2>Our Story</h2>
        <p>
          Genuine Forever Containers was founded with a vision to deliver
          durable, high-quality polymer storage solutions for households and
          industries. With advanced manufacturing and strict quality control, we
          ensure every bucket meets strength and reliability standards.
        </p>
      </div>

      {/* FEATURES */}
      <div className="about-features">
        <div className="feature-box">
          🧱 Heavy Duty Strength
          <p>Designed for industrial and long-term use</p>
        </div>
        <div className="feature-box">
          ♻ Eco Friendly Polymer
          <p>Safe, reusable and recyclable materials</p>
        </div>
        <div className="feature-box">
          ⚙ Precision Manufacturing
          <p>Modern machines for consistent quality</p>
        </div>
        <div className="feature-box">
          📦 Wide Capacity Range
          <p>From 6L to 26L storage solutions</p>
        </div>
      </div>

      {/* STATS */}
      <div className="about-stats">
        <div>
          <h3>10+</h3>
          <span>Years Experience</span>
        </div>
        <div>
          <h3>50,000+</h3>
          <span>Buckets Produced</span>
        </div>
        <div>
          <h3>100+</h3>
          <span>Happy Clients</span>
        </div>
        <div>
          <h3>6L – 26L</h3>
          <span>Capacity Range</span>
        </div>
      </div>
    </section>
  );
}
