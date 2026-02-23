import "../styles/CTASection.css";

export default function CTASection() {
  return (
    <section className="cta-section">
      <div className="cta-overlay">
        <h2>Need High-Quality Polymer Buckets?</h2>
        <p>
          From compact storage to heavy-duty industrial use — we manufacture
          durable containers built to last.
        </p>

        <div className="cta-buttons">
          <a href="/products" className="cta-btn primary">
            View Products
          </a>
          <a href="/contact" className="cta-btn secondary">
            Get Quote
          </a>
        </div>
      </div>
    </section>
  );
}
