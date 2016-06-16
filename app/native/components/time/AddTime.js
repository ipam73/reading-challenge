import React from 'react';
import {
  DatePickerAndroid,
  StyleSheet,
} from 'react-native';
import {connect} from 'react-redux';
import Button from 'apsl-react-native-button';

var styles = StyleSheet.create({
  button: {
    backgroundColor: '#E0E0E0',
    // alignItems: 'center',
    // justifyContent: 'center',
    width: 70,
    height: 30,
    flex: 1,
  },
  buttonText: {
    fontSize: 10,
  },
});

class AddTime extends React.Component {
  onAddTimePress() {
    this.props.navigator.push({
      name: 'AddTimeScreen',
      title: `Log time: ${this.props.student.name}`,
      passProps: {
        studentID: this.props.studentID,
      },
    });
  }

  render() {
    return (
      <Button style={styles.button} textStyle={styles.buttonText} onPress={this.onAddTimePress.bind(this)}>
        Add Time
      </Button>
    );
  }
}

AddTime.propsTypes = {
  studentID: React.PropTypes.string.isRequired,
  navigator: React.PropTypes.object.isRequired,
};

function mapStateToProps(state, props) {
  const studentID = props.studentID;
  return {
    navigator: props.navigator,
    studentID,
    student: state.reducers.studentList[studentID],

  };
}

module.exports = connect(mapStateToProps, null)(AddTime);
