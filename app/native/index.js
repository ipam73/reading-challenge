import React, {Component} from "react";
import {
  View,
  StyleSheet,
} from "react-native";

import {Provider} from "react-redux";
import Header from "./components/common/Header";
import StudentList from "./components/summary/StudentList";

var styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: "#E0E0E0",
  },
})

class ReactNative extends Component {
  render() {
    return (
      <View style={styles.main}>
        <Header />
        <StudentList />
      </View>
    );
  }
}

export default class Root extends Component {
  render() {
    return (
      <Provider store={this.props.store}>
        <ReactNative />
      </Provider>
    );

    // return (
    //   <Provider>
    //     {() => <ReactNative />}
    //   </Provider>
    // );
  }
}

