import React, {
  Navigator,
  StyleSheet,
  TouchableHighlight,
  Text,
  Image,
  TouchableOpacity,
  Component,
} from 'react-native';

// pages
import Homepage from './components/Homepage';
import Landingpage from './components/Landingpage';
import AddTimeScreen from './components/time/AddTimeScreen';

//menu
const SideMenu = require('react-native-side-menu');
const Menu = require('./components/common/Menu');

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
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
});

class Button extends Component {
  handlePress(e) {
    if (this.props.onPress) {
      this.props.onPress(e);
    }
  }

  render() {
    return (
      <TouchableOpacity
        onPress={this.handlePress.bind(this)}
        style={this.props.style}>
        <Text>{this.props.children}</Text>
      </TouchableOpacity>
    );
  }
}

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

  state = {
    isOpen: false,
    selectedItem: 'About',
  };

  toggle() {
    this.setState({
      isOpen: !this.state.isOpen,
    });
  }

  updateMenuState(isOpen) {
    this.setState({ isOpen });
  }

  onMenuItemSelected = (item) => {
    this.setState({
      isOpen: false,
      selectedItem: item,
    });
  }

  navigationBarRouteMapper(onToggle) {
    return ({
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
            onPress={() => onToggle() }>
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
    });
  }

  render() {
    const menu = <Menu onItemSelected={this.onMenuItemSelected} />;

    return (
      <SideMenu
        menu={menu}
        isOpen={this.state.isOpen}
        onChange={(isOpen) => this.updateMenuState(isOpen)}>

        <Navigator
          style={{flex: 1, paddingTop: 60}}
          initialRoute={{component: Landingpage}}
          renderScene={this.renderScene}
          navigationBar={
            <Navigator.NavigationBar
              style={styles.nav}
              routeMapper={this.navigationBarRouteMapper(this.toggle.bind(this))}
            />
          }
        />
      </SideMenu>
    );
  }
}

module.exports = AppContainer;
