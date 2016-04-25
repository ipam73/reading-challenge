import React from "react";
import {hashHistory} from "react-router";

// redux stuff
import {connect} from "react-redux";
import actions from "../../actions";

// components
import AddTimeForm from "./AddTimeForm";
import StudentAPI from "../../../../lib/students";

import toastr from "toastr";
import moment from "moment";

var AddTimePage = React.createClass({

  getInitialState: function() {
    // var dateObj = new Date();
    // var month = dateObj.getMonth() + 1; //months from 1-12
    // var day = dateObj.getDate();
    // var year = dateObj.getFullYear();

    return {
      readDate: moment(),
      maxDate: moment(),
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

    if (this.state.readMinutes.length < 1) {
      this.state.errors.minutes = "Value cannot be blank.";
      formIsValid = false;
    }

    var inputTimeIsNumber = !isNaN(this.state.readMinutes);

    if (inputTimeIsNumber == false) {
      this.state.errors.minutes = "Please input a valid number.";
      formIsValid = false;
    }

    this.setState({errors: this.state.errors});
    return formIsValid;
  },

  saveTime: function(event) {
    event.preventDefault();

    if (!this.timeFormIsValid()) {
      return;
    }

    //trigger add time action
    // newTime = {readDate: <date>, readMinutes: <minutes>}
    var newTime = {
      readDate: this.state.readDate.toDate(),
      readMinutes: this.state.readMinutes
    };
    console.log("new time is", newTime);
    this.props.setStudentTime( newTime );
    // StudentAPI.add_time(this.state.readTime);
    toastr.success('Time saved.');
    console.log("should say success");
    hashHistory.push('/');
  },

  cancelTime: function() {
    hashHistory.push('/');
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
        <h3>{"Log Time: " + this.state.student.name }</h3>
        <AddTimeForm
          readDate={this.state.readDate}
          maxDate={this.state.maxDate}
          onDateChange={this.setTimeState}
          readMinutes={this.state.readMinutes}
          onMinsChange={this.setMinsReadState}
          onSave={this.saveTime}
          onCancel={this.cancelTime}
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
    setStudentTime: function(newTime){ dispatch(actions.setStudentTime(newTime)); }
  }
};

module.exports = connect(mapStateToProps, mapDispatchToProps)(AddTimePage);
