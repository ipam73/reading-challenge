import React from "react";
import {connect} from "react-redux";
import StudentList from "./summary/StudentList";
import AddStudent from "./add-student/AddStudent";
import actions from "../../actions";

class Homepage extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <span>{this.props.user.displayName}</span>
        <StudentList students={this.props.students} />
        <AddStudent user={this.props.user} />
      </div>
    );
  }
}

Homepage.propTypes = {
  getStudentList: React.PropTypes.func.isRequired,
  students: React.PropTypes.object.isRequired,
  user: React.PropTypes.object,
};

// sets current state to summary page as this.prop
function mapStateToProps(state) {
  return {
    students: state.reducers.studentList,
    user: state.reducers.user,
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
