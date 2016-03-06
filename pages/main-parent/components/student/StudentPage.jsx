var React = require('react');
var Router = require('react-router');

var StudentAPI = require('../../../../lib/students');

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
        <h3>Grade: {this.state.student.grade}</h3>
        <h3>Total Mins: {this.state.student.total_mins}</h3>
        <h3>Weekly Goal: {this.state.student.goal}</h3>
      </div>
    );
  }
});

module.exports = StudentPage;
