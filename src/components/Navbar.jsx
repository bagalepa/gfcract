import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import Sidebar from "./Sidebar";
import { categories, products } from "../data/products";
import "../styles/navbar.css";
import logo from "../assets/logo-1.png";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [showProducts, setShowProducts] = useState(false);
  const [openCategory, setOpenCategory] = useState(null);
  const dropdownRef = useRef(null);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "auto";
  }, [open]);

  // Close dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setShowProducts(false);
        setOpenCategory(null);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <>
      <nav className="navbar">
        <div className="nav-left">
          <Link to="/" className="logo-link">
            <img src={logo} alt="Company Logo" className="logo-img" />
          </Link>
        </div>

        <div className="nav-right">
          <Link to="/">Home</Link>

          {/* Accordion Products Dropdown */}
          <div className="products-wrapper" ref={dropdownRef}>
            <span
              className="products-link"
              onClick={() => setShowProducts(!showProducts)}
            >
              Products ▾
            </span>

            <div className={`stack-dropdown ${showProducts ? "show" : ""}`}>
              {/* ALL PRODUCTS */}
              <Link
                to="/products"
                className="all-products"
                onClick={() => setShowProducts(false)}
              >
                All Products
              </Link>

              {categories.map((cat) => {
                const categoryProducts = products.filter(
                  (p) => p.categoryId === cat.categoryId,
                );

                return (
                  <div key={cat.categoryId} className="stack-category">
                    <button
                      onClick={() =>
                        setOpenCategory(
                          openCategory === cat.categoryId
                            ? null
                            : cat.categoryId,
                        )
                      }
                      className="stack-category-btn"
                    >
                      {cat.title}
                      <small>{cat.capacity}</small>
                      <span>{openCategory === cat.categoryId ? "−" : "+"}</span>
                    </button>

                    <div
                      className={`stack-products ${
                        openCategory === cat.categoryId ? "open" : ""
                      }`}
                    >
                      {/* ALL FROM CATEGORY */}
                      <Link
                        to={`/products/${cat.categoryId}`}
                        className="all-category-link"
                        onClick={() => setShowProducts(false)}
                      >
                        All {cat.title}
                      </Link>

                      {categoryProducts.map((p) => (
                        <Link
                          key={p.id}
                          to={`/product/${p.id}`}
                          onClick={() => setShowProducts(false)}
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
          <Link to="/about">About</Link>
          <Link to="/contact" className="contact-btn">
            Contact
          </Link>
        </div>

        <button className="menu-btn" onClick={() => setOpen(true)}>
          ☰
        </button>
      </nav>

      <Sidebar open={open} onClose={() => setOpen(false)} />
    </>
  );
};

export default Navbar;
