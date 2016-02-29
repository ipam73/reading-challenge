var React = require('react');
var Router = require('react-router');
var Link = Router.Link;

var Header = React.createClass({
	render: function() {
		return (
        <div>
          <nav className="navbar navbar-default">
            <div className="container-fluid">
              <ul className="nav navbar-nav">
                <li>
                  <Link to="parent">Home</Link>
                </li>
                <li>
                  <Link to="about">About</Link>
                </li>
              </ul>
            </div>
          </nav>
          <div class="container">
            <div class="jumbotron">
              <h1>Reading Challenge</h1>
            </div>
          </div>
        </div>
		);
	}
});

module.exports = Header;
