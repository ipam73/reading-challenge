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
      <div className="panel application-panel container-fluid">
        <div className="SUMMARYPANEL--panel-default">
          <div className="SUMMARYPANEL--panel-heading">
            <img src="/images/BuddyPlaceholder.png" alt="Icon"></img>
            <div className="SUMMARYPANEL--heading-text">
              <h1 className="SUMMARYPANEL--panel-title">{this.props.student.name}</h1>
              <p> {this.props.student.school} </p>
              <p> {"Grade " + this.props.student.grade} </p>
            </div>
          </div>
          <div className="SUMMARYPANEL--panel-body">
            <div className="content-left">
              <p className="content-large"> {this.props.student.total_mins} </p>
              <p> Minutes Read </p>
            </div>
            <div className="content-right">
              <p className="content-large"> 12 </p>
              <p> Weeks Left </p>
            </div>
          </div>
          <div className="SUMMARYPANEL--panel-footer">
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
