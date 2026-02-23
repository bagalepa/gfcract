import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useRef } from "react";
import { products, categories } from "../data/products";
import "../styles/ProductList.css";

export default function ProductList() {
  const { categoryId } = useParams();
  const navigate = useNavigate();
  const sectionRefs = useRef({});

  useEffect(() => {
    if (categoryId && sectionRefs.current[categoryId]) {
      sectionRefs.current[categoryId].scrollIntoView({
        behavior: "smooth",
        block: "center",
      });
    }
  }, [categoryId]);

  return (
    <section className="product-list">
      <button className="back-btn" onClick={() => navigate(-1)}>
        ← Back
      </button>
      <h2>Our Product Range</h2>

      {categories.map((cat) => {
        const categoryProducts = products.filter(
          (p) => p.categoryId === cat.categoryId,
        );

        return (
          <div
            key={cat.categoryId}
            ref={(el) => (sectionRefs.current[cat.categoryId] = el)}
            className="range-section"
          >
            <div className="range-header">
              <h3>{cat.title}</h3>
              <p>{cat.capacity}</p>
            </div>

            <div className="list-grid">
              {categoryProducts.map((p) => (
                <div className="list-card" key={p.id}>
                  <img src={p.image} alt={p.name} />
                  <h3>{p.name}</h3>
                  <span>{p.capacity}</span>
                  <button onClick={() => navigate(`/product/${p.id}`)}>
                    View Product
                  </button>
                </div>
              ))}
            </div>
          </div>
        );
      })}
    </section>
  );
}
