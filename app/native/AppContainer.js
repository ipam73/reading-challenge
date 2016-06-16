import React, {
  StyleSheet,
  Text,
  View,
  Navigator,
  TouchableHighlight,
} from 'react-native';

import {connect} from 'react-redux';

import Homepage from './components/Homepage';
import Landingpage from './components/Landingpage';

// import Header from './components/common/Header';
// import AddTimeScreen from './components/time/AddTimeScreen';

// import {navigatePush, navigatePop} from '../actions';

class AppContainer extends React.Component {

  renderScene(route, navigator) {
    return React.createElement(
      route.component, {...this.props, ...route.passProps, route, navigator}
    );
  }

  render() {
    return (
      <Navigator
        style={{flex:1}}
        initialRoute={{component: Landingpage}}
        renderScene={this.renderScene.bind(this)}
      />
    );
  }
}

module.exports = AppContainer;
