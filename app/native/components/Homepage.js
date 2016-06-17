import React from 'react';
import {connect} from 'react-redux';
import actions from '../../actions';
import StudentList from './summary/StudentList';
import AddStudent from './add-student/AddStudent';
import Header from './common/Header';
import {
  StyleSheet,
  View,
} from 'react-native';

var styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: '#E0E0E0',
    paddingTop: 50,
  },
});

class Homepage extends React.Component {
  constructor(props) {
    super(props);
    props.getStudentList();
  }

  render() {
    return (
      <View style={styles.main}>
        <StudentList students={this.props.students} navigator={this.props.navigator} />
        <AddStudent navigator={this.props.navigator} />
      </View>
    );
  }
}

Homepage.propTypes = {
  getStudentList: React.PropTypes.func.isRequired,
  students: React.PropTypes.object.isRequired,
  navigator: React.PropTypes.object.isRequired,
};

function mapStateToProps(state, props) {
  return {
    students: state.reducers.studentList,
    navigator: props.navigator,
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
