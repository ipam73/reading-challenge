var React = require('react');
var Router = require('react-router');
var Link = Router.Link;

var StudentList = React.createClass({
  propTypes: {
    students: React.PropTypes.array.isRequired
  },

  render: function() {
    var createStudentRow = function(student) {
      return (
        <tr key={student.id}>
          <td><Link to={`/student/${student.id}`}>{student.name}</Link></td>
          <td>{student.school}</td>
          <td>{student.total_mins}</td>
          <td>12</td>
        </tr>
      )
    };

    return <div>
      <h2>Students</h2>
      <table className="table">
        <thead>
          <tr>
            <th>Name</th>
            <th>School</th>
            <th>Minutes Read</th>
            <th>Weeks Left</th>
          </tr>
        </thead>
        <tbody>
          {this.props.students.map(createStudentRow, this)}
        </tbody>
      </table>
    </div>;
  }
});

module.exports = StudentList;

