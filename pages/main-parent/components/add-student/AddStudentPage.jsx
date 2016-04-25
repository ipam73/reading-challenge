"use strict";

var React = require('react');
var ReactRouter = require('react-router');

var StudentForm = require('./StudentForm');
var StudentAPI = require('../../../../lib/students');

var toastr = require('toastr');

// redux stuff
var {connect} = require('react-redux');
var actions = require("../../actions");

var AddStudentPage = React.createClass({

  propTypes: {
    addStudent: ptypes.func.isRequired
  },

  getInitialState: function() {
      return {
        student: {id: '', firstName: '', grade: ''},
        errors: {}
      };
  },

  setStudentState: function(event) {
    var field = event.target.name;
    var value = event.target.value;
    this.state.student[field] = value;
    return this.setState({student: this.state.student});
  },

  studentFormIsValid: function() {
    var formIsValid = true;
    this.state.errors = {}; //clear any previous errors

    if (this.state.student.firstName.length < 3) {
      this.state.errors.firstName = "First name must be at least 3 characters.";
      formIsValid = false;
    }

    if (this.state.student.grade.length < 1) {
      this.state.errors.grade = "Grade is a required field";
      formIsValid = false;
    }

    this.setState({errors: this.state.errors});
    return formIsValid;
  },

  processStudent: function(event) {
    event.preventDefault();

    if (!this.studentFormIsValid()) {
      return;
    }


    // triggers add student action
    this.props.addStudent();

    toastr.success('Student saved.');
    ReactRouter.browserHistory.push('/');
  },

  render: function() {
    return (
      <div>
        <StudentForm
          student={this.state.student}
          onChange={this.setStudentState}
          onSave={this.processStudent}
          errors={this.state.errors}
        />
      </div>
    );
  }
});

// -------------------------------------------------------------------------
// -------------------------------------------------------------------------
// wraps summary page with state and actions

// sets current state to summary page as this.prop
function mapStateToProps(state) {
  return {};
}

// currently not used for anything, no actions triggered on this page
function mapDispatchToProps (dispatch) {
  return {
    addStudent: function(){ dispatch(actions.addStudent()); }
  }
};

module.exports = connect(mapStateToProps, mapDispatchToProps)(AddStudentPage);
