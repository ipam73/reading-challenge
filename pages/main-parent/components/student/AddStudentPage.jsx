"use strict";

var React = require('react');
var ReactRouter = require('react-router');

var StudentForm = require('./StudentForm');
var StudentAPI = require('../../../../lib/students');

var toastr = require('toastr');

var AddStudentPage = React.createClass({

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

  saveStudent: function(event) {
    event.preventDefault();

    if (!this.studentFormIsValid()) {
      return;
    }

    StudentAPI.save_student(this.state.student);
    toastr.success('Student saved.');
    console.log("should say success");
    ReactRouter.browserHistory.push('/');
  },

  render: function() {
    return (
      <div>
        <StudentForm
          student={this.state.student}
          onChange={this.setStudentState}
          onSave={this.saveStudent}
          errors={this.state.errors}
        />
      </div>
    );
  }
});

module.exports = AddStudentPage;

