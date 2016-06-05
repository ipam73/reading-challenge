import React from "react";
import {connect} from "react-redux";
import StudentList from "./summary/StudentList";
import AddStudent from "./add-student/AddStudent";
import actions from "../../actions";

class Homepage extends React.Component {
  constructor(props) {
    super(props);
    props.getStudentList();
  }

  render() {
    return (
      <div>
        <StudentList students={this.props.students} />
        <AddStudent />
      </div>
    );
  }
}

Homepage.propTypes = {
  getStudentList: React.PropTypes.func.isRequired,
  isLoggedIn: React.PropTypes.func.isRequired,
  students: React.PropTypes.object.isRequired,
  user: React.PropTypes.object.isRequired,
};

// sets current state to summary page as this.prop
function mapStateToProps(state) {
  return {
    students: state.reducers.studentList,
    user: state.reducers.user,
    isLoggedIn: actions.isLoggedIn,
  };
}

// currently not used for anything, no actions triggered on this page
function mapDispatchToProps(dispatch) {
  return {
    getStudentList: () => {
      dispatch(actions.getStudentList());
    },
  };
}

module.exports = connect(mapStateToProps, mapDispatchToProps)(Homepage);
