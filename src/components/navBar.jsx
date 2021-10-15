import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <nav className="main-nav mb-2 col-md-6 offset-md-3">
      <ul className="nav">
        <li className="nav-item">
          <Link className="nav-link active px-0" to="/">
            Главная
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/edit">
            Редактировать
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
