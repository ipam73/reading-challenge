import React from "react";

// redux stuff
import {connect} from "react-redux";

import StudentList from "./summary/StudentList";
import AddStudent from "./add-student/AddStudent";
import actions from "../actions";

var Homepage = React.createClass({
  propTypes: {
    getStudentList: React.PropTypes.func.isRequired,
  },

  getInitialState() {
    return {
      students: {},
    };
  },

  componentWillMount() {
    console.log("setting initial student list");
    this.props.getStudentList();
  },

  render: function() {
    return <div>
      <StudentList students={this.props.students} />
      <AddStudent/>
    </div>;
  },
});

// -------------------------------------------------------------------------
// -------------------------------------------------------------------------
// wraps summary page with state and actions

// sets current state to summary page as this.prop
function mapStateToProps(state) {
  return {
    students: state.reducers.studentList,
  };
}

// currently not used for anything, no actions triggered on this page
function mapDispatchToProps (dispatch) {
  return {
    getStudentList: function(){ dispatch(actions.getStudentList()); },
  }
};

module.exports = connect(mapStateToProps, mapDispatchToProps)(Homepage);

