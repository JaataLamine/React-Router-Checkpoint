import { NavLink } from "react-router-dom";

// This component define the navigation bar
function NavBar() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <a className="navbar-brand mb-2" href="/">
            Movie App
          </a>
          <div
            className="collapse navbar-collapse"
            style={{ paddingLeft: 800 }}
          >
            <ul className="navbar-nav">
              <li className="nav-item">
                <NavLink className="nav-link" to="/">
                  Home
                </NavLink>
                <h4></h4>
              </li>
              <li className="nav-item" style={{ paddingLeft: 20 }}>
                <NavLink className="nav-link" to="/movieslist">
                  Movies
                </NavLink>
                <h4></h4>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default NavBar;
