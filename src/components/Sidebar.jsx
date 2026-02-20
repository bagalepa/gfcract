import "../styles/sidebar.css";

const Sidebar = ({ open, onClose }) => {
  return (
    <>
      <div className={`overlay ${open ? "show" : ""}`} onClick={onClose} />

      <aside className={`sidebar ${open ? "open" : ""}`}>
        <div className="sidebar-header">
          <h3>Menu</h3>
          <button onClick={onClose}>✕</button>
        </div>

        <div className="sidebar-links">
          <a href="/">Home</a>
          <a href="/products">Products</a>
          <a href="/about">About</a>
          <a href="/contact">Contact</a>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;
