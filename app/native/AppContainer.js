import React from 'react';
import {
  Navigator,
  StyleSheet,
  TouchableHighlight,
  Text,
} from 'react-native';

// pages
import About from './components/About';
import AddTimeScreen from './components/time/AddTimeScreen';
import Homepage from './components/Homepage';
import Landingpage from './components/Landingpage';
import Login from './components/login/Login';
import Support from './components/Support';
import Welcome from './components/Welcome';

// menu
const SideMenu = require('react-native-side-menu');
const Menu = require('./components/common/Menu');
const Header = require('./components/common/Header');

var styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
  },
  nav: {
    position: 'absolute',
    backgroundColor: '#8E44AD',
    height: 56,
    flexDirection: 'row',
  },
  navButtonIcon: {
    fontSize: 18,
    marginLeft: 13,
    marginTop: 15,
    color: '#FFFFFF',
  },
  navButtonIconArrow: {
    fontSize: 40,
    marginLeft: 13,
    marginTop: -5,
    color: '#FFFFFF',
  },
  navTitle: {
    marginTop: 15,
    fontSize: 20,
    fontWeight: '400',
    color: '#FFFFFF',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
});

class AppContainer extends React.Component {

  state = {
    isOpen: false,
    selectedItem: 'Homepage',
  };

  toggle() {
    this.setState({
      isOpen: !this.state.isOpen,
    });
  }

  updateMenuState(isOpen) {
    this.setState({ isOpen });
  }

  onMenuItemSelected = (item, title, navigator) => {
    var navBarDisplay = true;
    if (item === 'Landingpage') {
      navBarDisplay = false;
    }

    // if (this.state.selectedItem === item) {
    //   this.setState({
    //     isOpen: false,
    //     selectedItem: item,
    //   });
    // }
    // else {
    this.setState({
      isOpen: false,
      selectedItem: item,
    });
    navigator.push({
      name: item,
      title,
      display: navBarDisplay,
    });
    // }
  }

  navigationBarRouteMapper(onToggle) {
    return ({
      LeftButton(route, navigator, index, navState) {
        if (route.name === 'AddTimeScreen' || route.name === 'Login') {
          return (
            <TouchableHighlight
              underlayColor='transparent'
              onPress={() => { if (index > 0) { navigator.pop()} }}
            >
              <Text style={styles.navButtonIconArrow}>&#8592;</Text>
            </TouchableHighlight>
          );
        }
        return (
          <TouchableHighlight
            onPress={() => onToggle() }>
            <Text style={styles.navButtonIcon}>&#9776;</Text>
          </TouchableHighlight>
        );
      },

      RightButton(route, navigator, index, navState) {
        if (route.onPress) {
          return (<TouchableHighlight></TouchableHighlight>);
        }
      },

      Title(route, navigator, index, navState) {
        return <Text style={styles.navTitle}>{route.title}</Text>;
      },
    });
  }

  renderScene(route, navigator) {
    var component;
    switch (route.name) {
      case 'About':
        component = About;
        break;
      case 'AddTimeScreen':
        component = AddTimeScreen;
        break;
      case 'Homepage':
        component = Homepage;
        break;
      case 'Landingpage':
        component = Landingpage;
        break;
      case 'Login':
        component = Login;
        break;
      case 'Support':
        component = Support;
        break;
      case 'Welcome':
        component = Welcome;
        break;
      default:
        component = Landingpage;
        break;
    }
    const newElement = React.createElement(
      component, {...this.props, ...route.passProps, route, navigator}
    );
    const menu = (<Menu
      navigator={navigator}
      onItemSelected={this.onMenuItemSelected}
    />);

    return (
      <SideMenu
        menu={menu}
        isOpen={this.state.isOpen}
        onChange={(isOpen) => this.updateMenuState(isOpen)}
      >
        {newElement}
      </SideMenu>
    );
  }

  render() {
    return (
      <Navigator
        style={styles.mainContainer}
        initialRoute={{name: 'Landingpage', title: '', display: false}}
        renderScene={this.renderScene.bind(this)}
        navigationBar={
          <Header
            style={styles.nav}
            routeMapper={this.navigationBarRouteMapper(this.toggle.bind(this))}
          />
        }
      />
    );
  }
}

module.exports = AppContainer;
