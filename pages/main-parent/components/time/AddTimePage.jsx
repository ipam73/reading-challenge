"use strict";

var React = require("react");
var _ = require("underscore");
var ReactDOM = require("react-dom");
var ReactRouter = require('react-router');
var Link = ReactRouter.Link;

// redux stuff
var {connect} = require('react-redux');
var actions = require("../../actions");

// components
var AddTimeForm = require('./AddTimeForm');
var StudentAPI = require('../../../../lib/students');

var toastr = require('toastr');
var moment = require('moment');

var AddTimePage = React.createClass({

  getInitialState: function() {
    // var dateObj = new Date();
    // var month = dateObj.getMonth() + 1; //months from 1-12
    // var day = dateObj.getDate();
    // var year = dateObj.getFullYear();

    return {
      readDate: moment(),
      readMinutes: '',
      student: {id: '', name: ''},
      errors: {}
    };
  },

  setTimeState: function(date) {
    return this.setState({
      readDate: date
    });
  },

  setMinsReadState: function(event) {
    var field = event.target.name;
    var value = event.target.value;
    this.state.readMinutes = value;
    return this.setState({readMinutes: this.state.readMinutes});
  },

  timeFormIsValid: function() {
    var formIsValid = true;
    this.state.errors = {}; //clear any previous errors

    // if (this.state.readTime.firstName.length < 3) {
    //   this.state.errors.firstName = "First name must be at least 3 characters.";
    //   formIsValid = false;
    // }

    // if (this.state.readTime.grade.length < 1) {
    //   this.state.errors.grade = "Grade is a required field";
    //   formIsValid = false;
    // }

    this.setState({errors: this.state.errors});
    return formIsValid;
  },

  saveTime: function(event) {
    event.preventDefault();

    if (!this.timeFormIsValid()) {
      return;
    }

    //trigger add time action
    this.props.setStudentTime(this.state.readTime);
    // StudentAPI.add_time(this.state.readTime);
    toastr.success('Time saved.');
    console.log("should say success");
    ReactRouter.browserHistory.push('/');
  },

  componentWillMount() {
    var studentID = this.props.params.id; //from path '/student/:id'
    if (studentID) {
      this.setState({
        student: StudentAPI.get_student(studentID)
      });
    }
  },

  render: function() {
    return (
      <div>
        <h2>{this.state.student.name}</h2>
        <AddTimeForm
          readDate={this.state.readDate}
          onDateChange={this.setTimeState}
          readMinutes={this.state.readMinutes}
          onMinsChange={this.setMinsReadState}
          onSave={this.saveTime}
          errors={this.state.errors}
        />
      </div>
    );
  }
});

// -------------------------------------------------------------------------
// -------------------------------------------------------------------------
// wraps summary page with state and actions

function mapStateToProps(state) {
  return {};
}

function mapDispatchToProps (dispatch) {
  return {
    setStudentTime: function(){ dispatch(actions.setStudentTime()); }
  }
};

module.exports = connect(mapStateToProps, mapDispatchToProps)(AddTimePage);
