import React from "react";
import { Link } from "react-router-dom";
import "./NavBar.css";

function NavBar() {
  return (
    <nav>
      <Link to="/" className="Home-link">
        Home
      </Link>

      <Link to="/catalog" className="Catalog-link">
        Catalog
      </Link>

      <h2 className="navbar-reflix">REFLIX</h2>
    </nav>
  );
}

export default NavBar;
