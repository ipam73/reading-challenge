"use strict";

var React = require('react');
var ReactRouter = require('react-router');
var Router = require('react-router');
var Link = Router.Link;

require("!style!css!less!./AddStudent.less");

// new student button
// trigger clever login
var AddStudent = React.createClass({
  render: function() {
    return <div>
      <div className="panel application-panel container-fluid">
        <div className="SUMMARYPANEL--panel-default">
          <div className="SUMMARYPANEL--panel-body">
            <h3 className="SUMMARYPANEL--panel-title">Add another student</h3>

            <Link to="/addstudent" className="btn btn-default">Log in with Clever</Link>
            <p>
              Click the button to add a student using their Clever login credentials.
              If you need help finding the right credentials please contact the school.
            </p>

          </div>
        </div>
      </div>



    </div>
  }
});

module.exports = AddStudent;
