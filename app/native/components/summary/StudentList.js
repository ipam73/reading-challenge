import React from "react";
// import {connect} from "react-redux";
import {
  StyleSheet,
  ListView,
  View,
  Text,
  TouchableHighlight,
  Image,
} from "react-native";
import AddTimeButton from "../time/AddTime";

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
  subRowContainer: {
    paddingBottom: 10,
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
  leftCol: {
    flex: 1,
  },
  rightCol: {
    alignItems: "flex-end",
  },
});

function renderRow(student) {
  console.log("in render for student list");
  console.log(student);

  return (
    <TouchableHighlight style={styles.row}>
      <View>
        <View style={styles.subRowContainer}>
          <Image style={styles.headingIcon} source={icon} />
          <View style={styles.headingText}>
            <Text style={styles.headingTitle}>{student.name}</Text>
            <Text>
              {student.school_name}
              {"\n"}
              {`Grade ${student.grade}`}
              {"\n"}
            </Text>
          </View>
        </View>

        <View style={styles.subRowContainer}>
          <View style={styles.leftCol}>
            <Text>{student.total_mins}</Text>
            <Text>Minutes Read</Text>
          </View>
          <View style={styles.rightCol}>
            <Text>12</Text>
            <Text>Weeks left</Text>
          </View>
        </View>

        <AddTimeButton />

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

module.exports = StudentList;

// function mapDispatchToProps(dispatch) {
//   return {
//     addTime: () => {
//       console.log("in here!");
//       // dispatch(actions.addTime());
//     },
//   };
// }

// module.exports = connect(null, mapDispatchToProps)(StudentList);
