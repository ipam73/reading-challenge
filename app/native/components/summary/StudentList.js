import React from "react";
import {
  StyleSheet,
  ListView,
  View,
  Text,
  TouchableHighlight,
} from "react-native";
import {connect} from "react-redux";

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

var StudentList = React.createClass({
  getInitialState: function() {
    var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    return {
      dataSource: ds.cloneWithRows(people),
    };
  },
  renderRow: function(person) {
    return (
      <TouchableHighlight style={styles.row}>
        <View>
          <Text style={styles.account}>{person.title}</Text>
          <Text style={styles.account}>{"something else"}</Text>
        </View>
      </TouchableHighlight>
    );
  },
  render: function() {
    return (
      <View>
        <Text>
          {"pam and" + this.props.students[0].name}
        </Text>
        <ListView
          dataSource={this.state.dataSource}
          renderRow={this.renderRow}
        />
      </View>
    );
  }
});

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
})

// // currently not used for anything, no actions triggered on this page
// function mapDispatchToProps(dispatch) {
//   return {
//     getStudentList: () => {
//       dispatch(actions.getStudentList());
//     },
//   };
// }
// sets current state to summary page as this.prop
function mapStateToProps(state) {
  return {
    students: state.studentList,
  };
}

// const select = state => state;

// Wrap the component to inject dispatch and state into it
// export default connect(select)(StudentList);

module.exports = connect(mapStateToProps, {})(StudentList);

// module.exports = StudentList;
