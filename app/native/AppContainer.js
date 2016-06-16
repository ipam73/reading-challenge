import React, {
  Navigator,
  StyleSheet,
  TouchableHighlight,
  Text,
} from 'react-native';

// pages
import Homepage from './components/Homepage';
import Landingpage from './components/Landingpage';
import AddTimeScreen from './components/time/AddTimeScreen';

var styles = StyleSheet.create({
  navButtonText: {
    fontSize: 18,
    marginLeft: 13,
    marginTop: 4,
    color: '#FFFFFF',
  },
  nav: {
    backgroundColor: '#8E44AD',
    color: '#FFFFFF',
  },
  title: {
    fontSize: 16,
    marginTop: 4,
    color: '#FFFFFF',
  },
});

var NavigationBarRouteMapper = {
  LeftButton(route, navigator, index, navState) {
    if (index > 1) {
      return (
        <TouchableHighlight
          underlayColor='transparent'
          onPress={() => { if (index > 0) { navigator.pop()} }}
        >
          <Text style={styles.navButtonText}>&#8592;</Text>
        </TouchableHighlight>
      );
    }
    return (
      <TouchableHighlight
        onPress={() => { if (index > 0) { navigator.pop() } }}>
        <Text style={styles.navButtonText}>&#9776;</Text>
      </TouchableHighlight>
    );
  },

  RightButton(route, navigator, index, navState) {
    if (route.onPress) {
      return (
        <TouchableHighlight
          onPress={() => route.onPress()}>
          <Text style={styles.navButtonText}>
            {route.rightText || 'Right Button'}
          </Text>
        </TouchableHighlight>
      );
    }
  },

  Title(route, navigator, index, navState) {
    return <Text style={styles.title}>{route.title}</Text>;
  },
};

class AppContainer extends React.Component {

  renderScene(route, navigator) {
    var component;
    switch (route.name) {
      case 'Landingpage':
        component = Landingpage;
        break;
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
        style={{flex: 1, paddingTop: 60}}
        initialRoute={{component: Landingpage}}
        renderScene={this.renderScene}
        navigationBar={
          <Navigator.NavigationBar
            style={styles.nav}
            routeMapper={NavigationBarRouteMapper}
          />
        }
      />
    );
  }
}

module.exports = AppContainer;
