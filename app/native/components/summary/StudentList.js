import React from "react";
import {connect} from "react-redux";
import {
  StyleSheet,
  ListView,
  View,
  Text,
  TouchableHighlight,
  Image,
} from "react-native";
import Button from "apsl-react-native-button";

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
  headingIcon: {
    width: 70,
    height: 70,
  },
  headingText: {
    paddingLeft: 20,
    fontWeight: "bold",
    flex: 1,
  },
  headingTitle: {
    fontWeight: "bold",
  },
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

function onAddTimePress() {
  console.log("on press");
}

function renderRow(student) {
  console.log("in render for student list");
  console.log(student);

  return (
    <TouchableHighlight style={styles.row}>
      <View>
        <View style={styles.headingContainer}>
          <Image style={styles.headingIcon} source={icon} />
          <View style={styles.headingText}>
            <Text style={styles.headingTitle}>{student.name}</Text>
            <Text>
              {student.school_name}
              {"\n"}
              {`Grade ${student.grade}`}
              {"\n"}
              {`${student.total_mins} Minutes Read`}
            </Text>
          </View>
        </View>
        <Button style={styles.button} textStyle={styles.buttonText} onPress={onAddTimePress}>
          Add Time
        </Button>
      </View>
    </TouchableHighlight>
  );
}

function StudentList(props) {
  console.log("in render for student list");
  console.log(props.students);
  var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});

  return (
    <View>
      <ListView
        dataSource={ds.cloneWithRows(props.students)}
        renderRow={renderRow}
      />
    </View>
  );
}

StudentList.propTypes = {
  students: React.PropTypes.object.isRequired,
};

// module.exports = StudentList;

function mapDispatchToProps(dispatch) {
  return {
    addTime: () => {
      console.log("in here!");
      // dispatch(actions.addTime());
    },
  };
}

module.exports = connect(null, mapDispatchToProps)(StudentList);
