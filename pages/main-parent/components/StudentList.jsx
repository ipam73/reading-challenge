var React = require('react');

var StudentList = React.createClass({
  propTypes: {
    students: React.PropTypes.array.isRequired
  },

  render: function() {
    var createStudentRow = function(student) {
      return (
        <tr key={student.id}>
          <td><a href={"/parent/" + student.id}>{student.name}</a></td>
          <td>{student.mins}</td>
        </tr>
      )
    };

    return <div>
      <h2>Students</h2>
      <table className="table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Mins</th>
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

