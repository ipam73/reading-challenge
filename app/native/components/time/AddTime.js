import React from 'react';
import {
  DatePickerAndroid,
  StyleSheet,
} from 'react-native';
import {connect} from 'react-redux';
// import actions from '../../../actions';
import Button from 'apsl-react-native-button';
import AddTimeScreen from './AddTimeScreen';

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

async function selectDate() {
  try {
    const {action, year, month, day} = await DatePickerAndroid.open({
      // Use `new Date()` for current date.
      // May 25 2020. Month 0 is January.
      date: new Date(2020, 4, 25),
    });
    if (action !== DatePickerAndroid.dismissedAction) {
      // Selected year, month (0-11), day
    }
  } catch ({code, message}) {
    console.warn('Cannot open date picker', message);
  }
}

class AddTime extends React.Component {

  onAddTimePress() {
    console.log('in add time press');
    this.props.navigator.push({
      name: 'AddTimeScreen',
      passProps: {
        name: 'name',
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


function mapStateToProps(state, props) {
  console.log('ADD TIME students are: ');
  console.log('props navigator', props.navigator);
  return {
    students: state.reducers.studentList,
    navigator: props.navigator,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    AddTime: () => {
      console.log('adding student!');
      // dispatch(actions.AddTime());
    },
  };
}

module.exports = connect(mapStateToProps, mapDispatchToProps)(AddTime);
