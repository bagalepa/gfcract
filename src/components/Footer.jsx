import "../styles/Footer.css";
import { categories } from "../data/products";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-brand">
          <h2>Genuine Forever Containers</h2>
          <p>
            Premium polymer buckets engineered for durability, strength, and
            industrial-grade performance.
          </p>
        </div>

        <div className="footer-col">
          <h4>Quick Links</h4>
          <Link to="/">Home</Link>
          <Link to="/products">Products</Link>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
        </div>

        <div className="footer-col">
          <h4>Bucket Categories</h4>

          {categories.map((cat) => (
            <Link
              key={cat.categoryId}
              to={`/products/${cat.categoryId}`}
              className="footer-category"
            >
              <span className="cat-title">{cat.title}</span>
              <small className="cat-capacity">{cat.capacity}</small>
            </Link>
          ))}
        </div>

        <div className="footer-col">
          <h4>Contact</h4>
          <span>📍 Ahmedabad, Gujarat</span>
          <span>📞 +91 98765 43210</span>
          <span>✉ info@genuinecontainers.com</span>
        </div>
      </div>

      <div className="footer-bottom">
        © {new Date().getFullYear()} Genuine Forever Containers — Built Strong.
      </div>
    </footer>
  );
}
