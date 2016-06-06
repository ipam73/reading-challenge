import React from "react";
import {
  DatePickerAndroid,
  StyleSheet,
} from "react-native";
import {connect} from "react-redux";
// import actions from "../../../actions";
import Button from "apsl-react-native-button";

var styles = StyleSheet.create({
  button: {
    backgroundColor: "#E0E0E0",
    // alignItems: "center",
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
    console.warn("Cannot open date picker", message);
  }
}

function onAddTimePress() {
  console.log("in add time press");
}

function AddTime(props) {
  return (
    <Button style={styles.button} textStyle={styles.buttonText} onPress={onAddTimePress}>
      Add Time
    </Button>
  );
}

function mapDispatchToProps(dispatch) {
  return {
    AddTime: () => {
      console.log("adding student!");
      // dispatch(actions.AddTime());
    },
  };
}

module.exports = connect(null, mapDispatchToProps)(AddTime);
