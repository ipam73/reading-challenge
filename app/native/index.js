import React, {Component} from "react";
import {Provider} from "react-redux";
import Homepage from "./components/Homepage";

export default class Root extends Component {
  render() {
    return (
      <Provider store={this.props.store}>
        <Homepage />
      </Provider>
    );
  }
}

