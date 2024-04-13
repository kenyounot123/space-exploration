import "../stylesheets/navbar.css";
function Navbar() {
  return (
    <header className="navbar-container">
      <nav className="navbar">
        <button className="navbar-buttons">Timeline</button>
        <button className="navbar-buttons">Achievements</button>
        <button className="navbar-buttons">SpaceCrafts</button>
      </nav>
    </header>
  );
}
export default Navbar;
