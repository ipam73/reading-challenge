import React, {Component, AppRegistry} from "react-native";
import Root from "./app/native";
import configureStore from './app/store/configureStore.js';

const store = configureStore();

class ReactNative extends Component {
  render() {
    return (
      <Root store={store} />
    );
  }
}

AppRegistry.registerComponent("ReactNativeSource", () => ReactNative);
