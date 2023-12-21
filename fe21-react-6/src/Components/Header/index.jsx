import React from "react";
import { Link, NavLink } from "react-router-dom";
import myRoutes from "../../Routes";

const Header = () => {
  return (
    <div className="header">
      <div className="logo">
        <Link to="/">
          <img src="../logo.png" alt="Logo" />
        </Link>
      </div>
      <nav>
        {myRoutes.map(({ id, title, path }) => {
          return (
            title && (
              <NavLink key={id} to={path}>
                {title}
              </NavLink>
            )
          );
        })}
      </nav>
    </div>
  );
};

export default Header;
