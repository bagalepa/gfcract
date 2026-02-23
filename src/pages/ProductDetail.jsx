import { useParams } from "react-router-dom";
import { products } from "../data/products";
import "../styles/ProductDetail.css";

export default function ProductDetail() {
  const { id } = useParams();
  const product = products.find((p) => p.id === Number(id));

  if (!product) return <p>Product not found</p>;

  const rows = (obj) =>
    Object.entries(obj).map(([k, v]) => (
      <tr key={k}>
        <td>{k}</td>
        <td>{v}</td>
      </tr>
    ));

  return (
    <section className="pdf-layout">
      <div className="pdf-header">LUBRICANTS BUCKET</div>

      <div className="pdf-title">{product.capacity} LITRE CONTAINER</div>

      <div className="pdf-body">
        {/* LEFT SIDE */}
        <div className="pdf-left">
          <div className="pdf-block">
            <h3>IDENTIFICATION SPECIFICATIONS</h3>
            <table>
              <tbody>{rows(product.identification)}</tbody>
            </table>
          </div>

          <div className="pdf-block">
            <h3>DIMENSIONS & VOLUME SPECIFICATIONS</h3>
            <table>
              <tbody>{rows(product.dimensions)}</tbody>
            </table>
          </div>

          <div className="pdf-block small-grid">
            <div>
              <h3>STACKING NORM</h3>
              <table>
                <tbody>{rows(product.stacking)}</tbody>
              </table>
            </div>

            <div>
              <h3>WEIGHT SPECIFICATIONS</h3>
              <table>
                <tbody>{rows(product.weight)}</tbody>
              </table>
            </div>
          </div>

          <div className="pdf-block small-grid">
            <div>
              <h3>ARTWORK SPECIFICATIONS</h3>
              <table>
                <tbody>
                  <tr>
                    <td>Silk screen print area</td>
                    <td>{product.artwork.silkScreenArea}</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div>
              <h3>COMPRESSION STRENGTH</h3>
              <div className="compression-box">
                {product.compressionStrengthKG} KG
              </div>
            </div>
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="pdf-right">
          <img src={product.image} alt={product.name} />
          <h4>{product.capacity} LITRE CONTAINER</h4>
          <p>
            The specifications of a "{product.capacity} Lubricant Container" can
            vary depending on the manufacturer and intended use, but generally
            it includes the details shown.
          </p>
        </div>
      </div>
    </section>
  );
}
