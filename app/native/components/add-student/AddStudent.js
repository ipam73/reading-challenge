import React from 'react';
import {
  StyleSheet,
  View,
  TouchableHighlight,
  Text,
} from 'react-native';
import {connect} from 'react-redux';
import IconButton from 'react-native-icon-button';
// import actions from '../../../actions';

const icon = require('../../../images/log-in-with-clever-large.png');

var styles = StyleSheet.create({
  row: {
    backgroundColor: '#FBFBFB',
    paddingLeft: 15,
    paddingRight: 15,
    paddingTop: 15,
    paddingBottom: 15,
    marginLeft: 10,
    marginRight: 10,
    marginTop: 20,
  },
  headingContainer: {
    flexDirection: 'row',
  },
  headingText: {
    // fontWeight: 'bold',
    flex: 1,
  },
  headingTitle: {
    fontWeight: 'bold',
    fontSize: 18,
    color: 'black',
  },
  button: {
    alignSelf: 'center',
    marginTop: 15,
    marginBottom: 15,
    backgroundColor: '#2f67ab',
    width: 200,
    height: 30,
    flex: 1,
  },
});

function AddStudent(props) {
  console.log('in render for student list');

  return (
    <TouchableHighlight style={styles.row}>
      <View style={styles.headingContainer}>
        <View style={styles.headingText}>
          <Text style={styles.headingTitle}>Add a Student</Text>
          <IconButton
            style={styles.button}
            icon={icon}
            iconSize={20}
            onPress={props.addStudent}
          />
          <Text>
            Click the button to add a student using their Clever login credentials.
            If you need help finding the right credentials please contact the school.
          </Text>
        </View>
      </View>
    </TouchableHighlight>
  );
}

function mapDispatchToProps(dispatch) {
  return {
    addStudent: () => {
      console.log('adding student!');
      // dispatch(actions.addStudent());
    },
  };
}

module.exports = connect(null, mapDispatchToProps)(AddStudent);
