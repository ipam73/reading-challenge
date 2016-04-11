var React = require("react");

// redux stuff
var {connect} = require('react-redux');
var actions = require("../actions");

// student components
var StudentList = require('./summary/StudentList');
var AddStudent = require('./add-student/AddStudent');

var Homepage = React.createClass({
  getInitialState() {
    return {
      students: []
    };
  },

  render: function() {
    return <div>
      <StudentList students={this.props.students} />
      <AddStudent/>
    </div>;
  }
});

// -------------------------------------------------------------------------
// -------------------------------------------------------------------------
// wraps summary page with state and actions

// sets current state to summary page as this.prop
function mapStateToProps(state) {
  return {
    students: state.reducers.studentList
  };
}

// currently not used for anything, no actions triggered on this page
function mapDispatchToProps (dispatch) {
  return {
    getStudentList: function(){ dispatch(actions.getStudentList()); }
  }
};

module.exports = connect(mapStateToProps, mapDispatchToProps)(Homepage);
