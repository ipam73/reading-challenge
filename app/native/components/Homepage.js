import React from "react";
import {connect} from "react-redux";
import actions from "../../actions";
import StudentList from "./summary/StudentList";
import Header from "./common/Header";
import {
  StyleSheet,
  View,
} from "react-native";

var styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: "#E0E0E0",
  },
});

class Homepage extends React.Component {
  constructor(props) {
    super(props);
    console.log("getting student list");
    props.getStudentList();
  }

  render() {
    return (
      <View style={styles.main}>
        <Header />
        <StudentList students={this.props.students} />
      </View>
    );
  }
}

Homepage.propTypes = {
  getStudentList: React.PropTypes.func.isRequired,
  students: React.PropTypes.object.isRequired,
};

function mapStateToProps(state) {
  console.log("HOMEPAGE students are: ");
  console.log(state.studentList);
  console.log(state);
  return {
    students: state.studentList,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    getStudentList: () => {
      dispatch(actions.getStudentList());
    },
  };
}

module.exports = connect(mapStateToProps, mapDispatchToProps)(Homepage);
