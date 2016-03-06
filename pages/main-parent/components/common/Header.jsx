var React = require('react');
var Router = require('react-router');
var Link = Router.Link;

var Header = React.createClass({
  // glyphicon from: http://glyphicons.com/
	render: function() {
		return (
        <div>
          <nav className="navbar navbar-default">
            <div className="container-fluid">
              <div className="collapse navbar-collapse">
                <ul className="nav navbar-nav">
                  <li className="dropdown">
                    <button className="btn btn-default dropdown-toggle" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
                      <span className="glyphicon glyphicon-menu-hamburger" aria-hidden="true"></span>
                    </button>
                    <ul className="dropdown-menu">
                      <li>
                        <Link to="/">Home</Link>
                      </li>
                      <li>
                        <Link to="/about">About</Link>
                      </li>
                    </ul>
                  </li>
                  <li> Reading Challenge</li>
                </ul>
              </div>
            </div>
          </nav>
        </div>
		);
	}
});

module.exports = Header;
