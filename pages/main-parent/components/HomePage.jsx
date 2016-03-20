var React = require("react");
var _ = require("underscore");
var ReactDOM = require("react-dom");
var ReactRouter = require('react-router');
var Link = ReactRouter.Link;

// redux stuff
var {connect} = require('react-redux');
var actions = require("../actions");

// student components
var StudentList = require('./summary/StudentList')

var Homepage = React.createClass({
  getInitialState() {
    return {
      students: []
    };
  },

  render: function() {
    return <div>
      <StudentList students={this.props.students} />
      <NewStudent/>
    </div>;
  }
});


// new student button
// trigger clever login
var NewStudent = React.createClass({
  render: function() {
    return <div>
      <Link to="/addstudent" className="btn btn-default">Add a student</Link>
    </div>
  }
})

// -------------------------------------------------------------------------
// -------------------------------------------------------------------------
// wraps summary page with state and actions

// sets current state to summary page as this.prop
function mapStateToProps(state) {
  return {
    students: state.reducers.studentList
  };
}

// currently not used for anything, no actions triggered on this page
function mapDispatchToProps (dispatch) {
  return {
    getPilotsForDistrict: function(){ dispatch(actions.getPilotsForDistrict()); }
  }
};

module.exports = connect(mapStateToProps, mapDispatchToProps)(Homepage);
