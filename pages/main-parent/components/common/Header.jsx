var React = require('react');
var Router = require('react-router');
var Link = Router.Link;
require("!style!css!less!./Header.less");

var Header = React.createClass({
  // glyphicon from: http://glyphicons.com/
	render: function() {
		return (
        <div>
          <nav className="HEADER--container navbar navbar-default">
            <div className="container-fluid">
              <div className="collapse navbar-collapse">
                <ul className="nav navbar-nav">
                  <li className="dropdown">
                    <button className="HEADER--button btn dropdown-toggle" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
                      <span className="glyphicon glyphicon-menu-hamburger" aria-hidden="true" style={{color: "white"}}></span>
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
                        <Link to="/about">Switch Language</Link>
                      </li>
                      <li>
                        <Link to="/about">Logout</Link>
                      </li>
                    </ul>
                  </li>
                  <li> <h3 className="HEADER--title">Reading Challenge</h3></li>
                </ul>
              </div>
            </div>
          </nav>
        </div>
		);
	}
});

module.exports = Header;
