import React from "react";
import {Link} from "react-router";
require("!style!css!less!./Header.less");

function Header() {
  return (
    <div>
      <nav className="HEADER--container navbar">

        <ul className="nav navbar-nav pull-left">
          <li className="dropdown">
            <button className="HEADER--button btn dropdown-toggle" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
              &#9776; &nbsp; Charm City Readers
            </button>
            <ul className="dropdown-menu">
              <li>
                <h5>Pamela Martinez</h5>
              </li>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/about">About the Challenge</Link>
              </li>
              <li>
                <Link to="/support">Support</Link>
              </li>
              <li>
                <Link to="/about">Logout</Link>
              </li>
            </ul>
          </li>
        </ul>
      </nav>
    </div>
  );
}

module.exports = Header;
