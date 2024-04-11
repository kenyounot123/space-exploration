import "../stylesheets/navbar.css";
function Navbar() {
  return (
    <div className="container">
      <ul className="navbar">
        <button className="navbar-buttons">Timeline</button>
        <button className="navbar-buttons">Achievements</button>
        <button className="navbar-buttons">SpaceCrafts</button>
      </ul>
    </div>
  );
}
export default Navbar;
