var Firebase = require('firebase');
import React from "react";
import StudentAPI from "../../../../lib/students";

// components
import AddTimeButton from "../time/AddTimeButton";
import StudentProgress from "./StudentProgress";
import StudentSummary from "./StudentSummary";

var StudentPage = React.createClass({
  getInitialState: function() {
      return {
        student: {id: '', goal: '', readingSummary: ''},
        errors: {}
      };
  },

  componentWillMount() {
    var studentID = this.props.params.id; //from path '/student/:id'
    if (studentID) {
      this.setState({
        student: StudentAPI.get_student(studentID)
      });
    }

    //this.firebaseRef = new Firebase("https://reading-challenge.firebaseio.com/parent/1/students/" + studentID);
    //this.firebaseRef.on('c

  },

  render: function() {
    return (
      <div>
        <h2>{this.state.student.name}</h2>
        <StudentSummary
          weeksLeft={12}
          totalRead={this.state.student.total_mins}
        />
        <StudentProgress
          progress={this.state.student.progress}
        />
        <AddTimeButton
          studentID={this.state.student.id}
        />
      </div>
    );
  }
});

module.exports = StudentPage;
