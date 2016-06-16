import React from 'react';
import {
  StyleSheet,
  View,
  Text,
} from 'react-native';
import {connect} from 'react-redux';

var styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: '#E0E0E0',
  },
});

// async function selectDate() {
//   try {
//     const {action, year, month, day} = await DatePickerAndroid.open({
//       // Use `new Date()` for current date.
//       // May 25 2020. Month 0 is January.
//       date: new Date(2020, 4, 25),
//     });
//     if (action !== DatePickerAndroid.dismissedAction) {
//       // Selected year, month (0-11), day
//     }
//   } catch ({code, message}) {
//     console.warn('Cannot open date picker', message);
//   }
// }

// function onAddTimePress() {
//   console.log('in add time press');
// }

function AddTimeScreen(props) {
  return (
    <View style={styles.main}>
      <Text>
        In add time!
      </Text>
    </View>
  );
}

function mapStateToProps(state, props) {
  console.log('ADD TIME SCREEN students are: ');
  console.log('props navigator', props.navigator);
  return {
    navigator: props.navigator,
  };
}

module.exports = connect(mapStateToProps, null)(AddTimeScreen);

