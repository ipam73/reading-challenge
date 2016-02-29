var React = require('react');
var ReactDom = require('react-dom');

var StudentList = require('./StudentList')
var StudentAPI = require('../../../lib/students')

var Homepage = React.createClass({
  getInitialState() {
    return {
      students: []
    };
  },

  componentDidMount() {
    if (this.isMounted()) {
      this.setState({ students: StudentAPI.get_all_students() });
    }
  },

  render: function() {
    return <div>
      <StudentList students={this.state.students} />
      <NewStudent/>
    </div>;
  }
});

var NewStudent = React.createClass({
  render: function() {
    return <div>
      <a href="/addstudent">Add a student</a>
    </div>
  }
})

module.exports = Homepage;