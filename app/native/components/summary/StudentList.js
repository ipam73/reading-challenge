import React from "react";
import {
  StyleSheet,
  ListView,
  View,
  Text,
  TouchableHighlight,
} from "react-native";

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
        <Text style={styles.account}>{student.name}</Text>
        <Text style={styles.account}>{student.school_name}</Text>
        <Text style={styles.account}>{`Grade ${student.grade}`}</Text>
        <Text style={styles.account}>{`${student.total_mins} Minutes Read`}</Text>
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
