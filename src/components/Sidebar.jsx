import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { categories, products } from "../data/products";
import "../styles/sidebar.css";

const Sidebar = ({ open, onClose }) => {
  const [productsOpen, setProductsOpen] = useState(false);
  const [openCategory, setOpenCategory] = useState(null);
  useEffect(() => {
    if (!open) {
      setProductsOpen(false);
      setOpenCategory(null);
    }
  }, [open]);

  return (
    <>
      <div className={`overlay ${open ? "show" : ""}`} onClick={onClose} />

      <aside className={`sidebar ${open ? "open" : ""}`}>
        <div className="sidebar-header">
          <h3>Menu</h3>
          <button onClick={onClose}>✕</button>
        </div>

        <div className="sidebar-links">
          <Link to="/" onClick={onClose}>
            Home
          </Link>

          <div className="dropdown">
            <button
              className="dropdown-btn"
              onClick={() => setProductsOpen(!productsOpen)}
            >
              Products <span>{productsOpen ? "−" : "+"}</span>
            </button>

            <div className={`dropdown-menu ${productsOpen ? "open" : ""}`}>
              {/* All Products */}
              <Link to="/products" onClick={onClose} className="all-link">
                All Products
              </Link>

              {categories.map((cat) => {
                const categoryProducts = products.filter(
                  (p) => p.categoryId === cat.categoryId,
                );

                return (
                  <div key={cat.categoryId} className="sub-dropdown">
                    <button
                      className="sub-dropdown-btn"
                      onClick={() =>
                        setOpenCategory(
                          openCategory === cat.categoryId
                            ? null
                            : cat.categoryId,
                        )
                      }
                    >
                      {cat.title}
                      <span>{openCategory === cat.categoryId ? "−" : "+"}</span>
                    </button>

                    <div
                      className={`sub-dropdown-menu ${
                        openCategory === cat.categoryId ? "open" : ""
                      }`}
                    >
                      {/* All of this category */}
                      <Link
                        to={`/products/${cat.categoryId}`}
                        onClick={onClose}
                        className="all-category"
                      >
                        All {cat.title}
                      </Link>

                      {categoryProducts.map((p) => (
                        <Link
                          key={p.id}
                          to={`/product/${p.id}`}
                          onClick={onClose}
                        >
                          {p.capacity}
                        </Link>
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          <Link to="/about" onClick={onClose}>
            About
          </Link>
          <Link to="/contact" onClick={onClose}>
            Contact
          </Link>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;
