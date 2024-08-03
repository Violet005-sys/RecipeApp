// eslint-disable-next-line no-unused-vars
import React from "react";
import Cookies from 'js-cookie'


const Navbar = () => {
  const logOut = () => {
    Cookies.remove('token');
    window.location.reload();
  };
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container">
        <a className="navbar-brand" href="/">
          Recipe App
        </a>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <a className="nav-link" href="/create-recipe">
                Create A Recipe
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Contact Us
              </a>
            </li>
            <li className="nav-item">
              <button className="btn btn-light mx-2" href="#" onClick={() => logOut()}>
                LogOut
              </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
