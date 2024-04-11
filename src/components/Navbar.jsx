import "../stylesheets/navbar.css";
function Navbar() {
  return (
    <header>
      <nav className="navbar">
        <button className="navbar-buttons">Timeline</button>
        <button className="navbar-buttons">Achievements</button>
        <button className="navbar-buttons">SpaceCrafts</button>
      </nav>
    </header>
  );
}
export default Navbar;
