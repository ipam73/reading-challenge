import React from "react";
import {connect} from "react-redux";
import {
  StyleSheet,
  View,
  Image,
  TouchableHighlight,
  Text,
} from "react-native";
// import Button from "apsl-react-native-button";
import IconButton from "react-native-icon-button";

import actions from "../../../actions";
// const cleverButton = require("https://s3.amazonaws.com/assets.clever.com/sign-in-with-clever/sign-in-with-clever-medium.png");
const icon = require("../../../images/BuddyPlaceholder.png");

var styles = StyleSheet.create({
  row: {
    backgroundColor: "#FBFBFB",
    paddingLeft: 15,
    paddingRight: 15,
    paddingTop: 15,
    paddingBottom: 15,
    marginLeft: 10,
    marginRight: 10,
    marginTop: 20,
  },
  headingContainer: {
    paddingBottom: 30,
    flexDirection: "row",
  },
  headingText: {
    fontWeight: "bold",
    flex: 1,
  },
  headingTitle: {
    fontWeight: "bold",
  },
  button: {
    marginTop: 10,
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

function AddStudent(student) {
  console.log("in render for student list");
  console.log(student);

  return (
    <TouchableHighlight style={styles.row}>
      <View style={styles.headingContainer}>
        <View style={styles.headingText}>
          <Text style={styles.headingTitle}>Add a student</Text>
          <IconButton
            style={styles.button}
            icon={icon}
            text={"Add Student"}
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

// module.exports = AddStudent;

function mapDispatchToProps(dispatch) {
  return {
    addStudent: () => {
      console.log("in here!");
      dispatch(actions.addStudent());
    },
  };
}

module.exports = connect(null, mapDispatchToProps)(AddStudent);
