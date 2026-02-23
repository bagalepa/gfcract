import "../styles/Contact.css";

export default function Contact() {
  return (
    <section className="contact-page">
      <div className="contact-container">
        <div className="contact-info">
          <h2>Get In Touch</h2>
          <p>
            Looking for durable polymer buckets or custom container solutions?
            Contact us today — we’ll respond quickly.
          </p>

          <div className="info-item">
            <span>📍</span> Ahmedabad, Gujarat, India
          </div>
          <div className="info-item">
            <span>📞</span> +91 98765 43210
          </div>
          <div className="info-item">
            <span>✉</span> info@genuinecontainers.com
          </div>
          <div className="info-item">
            <a
              href="https://wa.me/919876543210"
              target="_blank"
              rel="noopener noreferrer"
              className="whatsapp-btn"
            >
              Chat on WhatsApp
            </a>
          </div>
        </div>

        <form className="contact-form">
          <h3>Send Inquiry</h3>

          <input type="text" placeholder="Your Name" required />
          <input type="email" placeholder="Your Email" required />
          <input type="tel" placeholder="Phone Number" required />

          <textarea placeholder="Your Message" rows="5" required />

          <button type="submit">Send Message</button>
        </form>
      </div>
    </section>
  );
}
