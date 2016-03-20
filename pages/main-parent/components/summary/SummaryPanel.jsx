"use strict";

var $ = require("jquery");
var _ = require("underscore");
var React = require("react");
var ReactDOM = require("react-dom");
var Link = require('react-router').Link;

var AddTimeButton = require("../time/AddTimeButton");

require("!style!css!less!./SummaryPanel.less");

// redux stuff
var {connect} = require('react-redux');

var SummaryPanel = React.createClass({
  render: function() {
    return (
      <div className="application-panel">
        <div className="panel panel-default">
          <div className="panel-heading">
            <img src={this.props.icon} alt="Icon"></img>
            <h1 className="panel-title">{this.props.student.name}</h1>
          </div>
          <div className="panel-body">
            <p> {this.props.student.school} </p>
            <p> {this.props.student.total_mins + " total minutes read."} </p>
            <p> {"Grade " + this.props.student.grade} </p>
            <AddTimeButton
              studentID={this.props.student.id}
            />
          </div>
        </div>
      </div>
    );
  }
});

// -------------------------------------------------------------------------
// functions used to wrap react module with router functions

// since this is a new pilot, can map with empty state
function mapStateToProps(state) {
  return {};
}

function mapDispatchToProps (dispatch) {
  return {}
};

module.exports = connect(mapStateToProps, mapDispatchToProps)(SummaryPanel);
