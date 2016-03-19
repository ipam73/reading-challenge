var React = require('react');
var ReactDom = require('react-dom');
var Router = require('react-router');
var Link = Router.Link;

// student components
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


// new student button
// trigger clever login
var NewStudent = React.createClass({
  render: function() {
    return <div>
      <Link to="/addstudent" className="btn btn-default">Add a student</Link>
    </div>
  }
})

module.exports = Homepage;