import React from "react";
import {
  StyleSheet,
  ListView,
  View,
  Text,
  TouchableHighlight,
} from "react-native";
// import {connect} from "react-redux";

var people = [
  {
    title: "Student 1",
    favouriteChannels: [],
  },
  {
    title: "Student 2",
    favouriteChannels: [],
  },
];

var styles = StyleSheet.create({
  row: {
    backgroundColor: "#FBFBFB",
    paddingLeft: 10,
    paddingRight: 10,
    paddingTop: 10,
    marginLeft: 10,
    marginRight: 10,
    marginTop: 20,
  },
  account: {
    color: "#000000",
    height: 60,
  },
});

function renderRow(student) {
  console.log("in render for student list");
  console.log(student);

  return (
    <TouchableHighlight style={styles.row}>
      <View>
        <Text style={styles.account}>{"student"}</Text>
        <Text style={styles.account}>{"something else"}</Text>
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
        dataSource={ds.cloneWithRows(people)}
        renderRow={renderRow}
      />
    </View>
  );
}

StudentList.propTypes = {
  students: React.PropTypes.object.isRequired,
};

module.exports = StudentList;

// function mapStateToProps(state) {
//   console.log("students list students are: ");
//   console.log(state.studentList);
//   return {
//     students: state.studentList,
//   };
// }

// module.exports = connect(mapStateToProps, {})(StudentList);
