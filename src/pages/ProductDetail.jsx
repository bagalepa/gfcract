import { useParams, useNavigate } from "react-router-dom";
import { products } from "../data/products";
import "../styles/ProductDetail.css";

export default function ProductDetail() {
  const { id } = useParams();
  const navigate = useNavigate();

  const product = products.find((p) => p.id === Number(id));

  if (!product) return <p>Product not found</p>;

  return (
    <section className="product-detail">
      <button className="back-btn" onClick={() => navigate(-1)}>
        ← Back
      </button>

      <div className="detail-wrapper">
        <img src={product.image} alt={product.name} />

        <div className="detail-info">
          <h1>{product.name}</h1>
          <p className="capacity">Capacity: {product.capacity}</p>

          <ul>
            <li>High-grade HDPE polymer</li>
            <li>Leak-proof lid design</li>
            <li>Stackable for transport</li>
            <li>Industrial durability</li>
          </ul>

          <button className="quote-btn">Get Quote</button>
        </div>
      </div>
    </section>
  );
}
