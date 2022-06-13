import React from "react";
import { Link } from "react-router-dom"


const Navbar = () => {
  return (
    <div data-cy="navbar">
      <div>
        <Link  to="/">Home</Link>
        <Link to="/login">Login</Link>
        
        {/* <a data-cy="navbar-home-link"></a> */}
      </div>
      <div>
        <div data-cy="navbar-cart-items-count"></div>
        <button data-cy="navbar-login-logout-button"></button>
      </div>
    </div>
  );
};

export default Navbar;
