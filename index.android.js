import React, { Component, AppRegistry } from 'react-native';
import Root from './app/native';

class ReactNative extends Component {
  render() {
    return (
      <Root />
    );
  }
}

AppRegistry.registerComponent('ReactNativeSource', () => ReactNative);
