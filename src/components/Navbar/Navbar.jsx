/* ── Navbar ── */
function Navbar({ scrollTo }) {
  return (
    <nav className="navbar">
      <div className="nav-links">
        <a href="#services" onClick={(e) => { e.preventDefault(); scrollTo('services'); }}>Services</a>
        <a href="#projects" onClick={(e) => { e.preventDefault(); scrollTo('projects'); }}>Projects</a>
        <a href="#contact" onClick={(e) => { e.preventDefault(); scrollTo('contact'); }}>Contact</a>
      </div>
    </nav>
  );
}

export default Navbar;
