import React from "react";

var StudentSummary = React.createClass({
  propTypes: {
    totalRead: React.PropTypes.number.isRequired,
    weeksLeft: React.PropTypes.number.isRequired
  },

  render: function() {

    return <div>
      <div className="panel panel-default">
        <div className="panel-heading">
          <h3 className="panel-title">Summary</h3>
        </div>
        <div className="panel-body">
          <p>{this.props.totalRead} Minutes Read</p>
          <p>{this.props.weeksLeft} Weeks left</p>
        </div>
      </div>
    </div>
  }
});

module.exports = StudentSummary;
