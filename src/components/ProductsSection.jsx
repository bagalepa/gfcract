import "../styles/ProductsSection.css";
import { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { categories } from "../data/products";

export default function ProductsSection() {
  const cardsRef = useRef([]);
  const navigate = useNavigate();

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("show");
          }
        });
      },
      { threshold: 0.2 },
    );

    cardsRef.current.forEach((el) => observer.observe(el));
  }, []);
  return (
    <section className="products">
      <h2>Our Products</h2>
      <p className="subtitle">High-quality polymer lubricant containers</p>

      <div className="products-grid">
        {categories.map((item, i) => (
          <div
            className="product-card"
            ref={(el) => (cardsRef.current[i] = el)}
            key={i}
          >
            <div className="product-content">
              <img src={item.image} alt={item.name} />
              <h3>{item.title}</h3>
              <span>{item.capacity}</span>
              <button onClick={() => navigate(`/products/${item.categoryId}`)}>
                View Details
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
