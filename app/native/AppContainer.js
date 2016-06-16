import React, {
  Navigator,
} from 'react-native';

// pages
import Homepage from './components/Homepage';
import Landingpage from './components/Landingpage';
import AddTimeScreen from './components/time/AddTimeScreen';

// import Header from './components/common/Header';

class AppContainer extends React.Component {

  renderScene(route, navigator) {
    var component;
    switch (route.name) {
      case 'Homepage':
        component = Homepage;
        break;
      case 'AddTimeScreen':
        component = AddTimeScreen;
        break;
      default:
        component = Landingpage;
        break;
    }
    return React.createElement(
      component, {...this.props, ...route.passProps, route, navigator}
    );
  }

  render() {
    return (
      <Navigator
        style={{flex:1}}
        initialRoute={{component: Landingpage}}
        renderScene={this.renderScene}
      />
    );
  }
}

module.exports = AppContainer;
