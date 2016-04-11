var React = require('react');
var {Link} = require('react-router');
require("!style!css!less!./Header.less");

var Header = React.createClass({

	render: function() {
		return (
        <div>
          <nav className="HEADER--container navbar">

            <ul className="nav navbar-nav pull-left">
              <li className="dropdown">
                <button className="HEADER--button btn dropdown-toggle" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
                  &#9776; &nbsp; Reading Challenge
                </button>
                <ul className="dropdown-menu">
                  <li>
                    <Link to="/">Home</Link>
                  </li>
                  <li>
                    <Link to="/about">About</Link>
                  </li>
                  <li>
                    <Link to="/about">Support</Link>
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
});

module.exports = Header;
