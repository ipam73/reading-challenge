var React = require('react');
var Router = require('react-router');

var StudentAPI = require('../../../../lib/students');

// components
var AddTimeButton = require("../time/AddTimeButton");
var StudentProgress = require("./StudentProgress");
var StudentSummary = require("./StudentSummary");

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
      console.log("student is", StudentAPI.get_student(studentID));
      this.setState({
        student: StudentAPI.get_student(studentID)
      });
    }
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
