var React = require('react');
var {Link} = require('react-router');

var SummaryPanel = require("./SummaryPanel");

var StudentList = React.createClass({
  propTypes: {
    students: React.PropTypes.array.isRequired
  },

  render: function() {
    var createStudentRow = function(student) {
      return (
        <tr key={student.id}>
          <td><Link to={`/student/${student.id}`}>{student.name}</Link></td>
          <td>{student.school_name}</td>
          <td>{student.total_mins}</td>
          <td>12</td>
        </tr>
      )
    };

    return <div>
      <div>
        {this.props.students.map(
          function(student, i){
            return (
              <SummaryPanel
                key={i}
                student={student}
              />);
          }, this
        )}
      </div>
    </div>;
  }
});

module.exports = StudentList;
