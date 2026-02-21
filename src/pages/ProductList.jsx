import { useNavigate, useParams } from "react-router-dom";
import { products, categories } from "../data/products";
import "../styles/ProductList.css";

export default function ProductList() {
  const { categoryId } = useParams();
  const navigate = useNavigate();

  const category = categories.find((c) => c.categoryId === categoryId);
  const filtered = products.filter((p) => p.categoryId === categoryId);

  return (
    <section className="product-list">
      <button className="back-btn" onClick={() => navigate(-1)}>
        ← Back
      </button>
      <h2>{category ? category.title : "Products"}</h2>
      <p className="range">{category ? category.capacity : ""}</p>

      <div className="list-grid">
        {filtered.map((p) => (
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
    </section>
  );
}
