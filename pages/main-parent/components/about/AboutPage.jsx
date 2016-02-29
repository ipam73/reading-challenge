"use strict";

var React = require('react');

var About = React.createClass({
	render: function () {
		return (
			<div>
				<h1>About</h1>
				<p>
					Reading Challenge is about a lot of things.
				</p>

				<ul>
					<li>Log read hours</li>
					<li>Etc.</li>
				</ul>
			</div>
		); 
	}
});

module.exports = About;
