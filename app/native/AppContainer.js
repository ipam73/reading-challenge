// import React, {PropTypes} from 'react-native';
import React, {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Navigator,
  TouchableHighlight
} from 'react-native';

import {connect} from 'react-redux';

import Homepage from './components/Homepage';
import AddTimeScreen from './components/time/AddTimeScreen';

// import {navigatePush, navigatePop} from '../actions';
var styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 80
  },
   heading: {
    fontSize:22,
    marginBottom:10
  },
  button: {
    height:60,
    justifyContent: 'center',
    backgroundColor: '#efefef',
    alignItems: 'center',
    justifyContent: 'center'
  },
  buttonText: {
    fontSize:20
  }
});

class AppContainer extends React.Component {

  renderScene(route, navigator) {
    return React.createElement(route.component, { ...this.props, ...route.passProps, route, navigator } )
  }

  render() {
    console.log('trying to render app container');
    // let {navigationState, onNavigate} = this.props;
    // console.log('navigation state is: ', navigationState);
    // console.log('onNavigate state is: ', onNavigate);
    console.log('trying to render app container 2');

    return (
      <Navigator
        style={{ flex:1 }}
        initialRoute={{ component: Main }}
        renderScene={ this.renderScene } />
    );
  }
}


var Home = React.createClass({  
  render() {
    return (
      <View style={ styles.container }>
        <Text style={ styles.heading }>Hello from { "this.props.name" }</Text>
        <TouchableHighlight style={ styles.button } onPress={ () => this.props.navigator.pop() }>
          <Text style={ styles.buttonText }>GO Back</Text>
        </TouchableHighlight>
      </View>
    )
  }
})

var Main = React.createClass({
  _navigate(name) {
    this.props.navigator.push({
      component: Homepage,
      passProps: {
        name: name,
      }
    })
  },
  render() {    
    return (
      <View style={ styles.container }>
        <Text style={ styles.heading }>Reading Challenge</Text>
        <TouchableHighlight style={ styles.button } onPress={ () => this._navigate('YOYOYOYOYO') }>
          <Text style={ styles.buttonText }>Sign In</Text>
        </TouchableHighlight>
      </View>
    )
  }
})

function mapStateToProps(state) {
  console.log('APPCONTAINER mapStateToProps state ');
  console.log(state.navigationState);
  return {
    navigationState: state.navigationState,
  };
}

function mapDispatchToProps(dispatch) {
  console.log('APPCONTAINER mapDispatchToProps state ');
  return {
    onNavigate: (action) => {
      console.log('APPCONTAINER onNavigate ');

      // Two types of actions are likely to be passed, both representing 'back'
      // style actions. Check if a type has been indicated, and try to match it.
      if (action.type && (
        action.type === NavigationRootContainer.getBackAction().type ||
        action.type === NavigationCard.CardStackPanResponder.Actions.BACK.type)
      ) {
        console.log('should navigate pop');
        // dispatch(navigatePop());
      } else {
        // Currently unused by NavigationExperimental (only passes back actions),
        // but could potentially be used by custom components.
        console.log('should navigate push');
        // dispatch(navigatePush(action));
      }
    },
  };
}

module.exports = connect(mapStateToProps, mapDispatchToProps)(AppContainer);

