import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Sidebar from "./Sidebar";
import "../styles/navbar.css";
import logo from "../assets/logo.jpg";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "auto";
  }, [open]);

  return (
    <>
      <nav className="navbar">
        <div className="nav-left">
          <button className="menu-btn" onClick={() => setOpen(true)}>
            ☰
          </button>
          <Link to="/" className="logo-link">
            <img src={logo} alt="Company Logo" className="logo-img" />
          </Link>
        </div>
      </nav>

      <Sidebar open={open} onClose={() => setOpen(false)} />
    </>
  );
};

export default Navbar;
