import "./Navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">AI School</div>

      <ul className="nav-links">
        <li>Products</li>
        <li>Solutions</li>
        <li>About</li>
        <li>Contact</li>
      </ul>

      <button className="cta-btn">Book Demo</button>
    </nav>
  );
}

export default Navbar;