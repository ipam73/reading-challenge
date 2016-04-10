"use strict";

var React = require('react');
var Router = require('react-router');
var Link = Router.Link;

var AddTimeButton = React.createClass({
  render: function() {
    return <div>
      <Link to={`/addtime/${this.props.studentID}`} className="btn btn-default">Add Time</Link>
    </div>
  }
});

module.exports = AddTimeButton;