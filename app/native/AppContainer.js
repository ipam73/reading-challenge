// import React, {PropTypes} from 'react-native';
import React, {
  Animated,
  View,
  Text,
  NavigationExperimental,
  ScrollView,
  StyleSheet,
  BackAndroid,
  Component,
  PropTypes,
} from 'react-native';


// import {NavigationExperimental, Text, View, StyleSheet} from 'react-native';
import {connect} from 'react-redux';

import Homepage from './components/Homepage';
import AddTimeScreen from './components/time/AddTimeScreen';

// import {navigatePush, navigatePop} from '../actions';

// const {
//   AnimatedView: NavigationAnimatedView,
//   Card: NavigationCard,
//   Header: NavigationHeader,
// } = NavigationExperimental;

// const styles = StyleSheet.create({
//   outerContainer: {
//     flex: 1,
//   },
//   container: {
//     flex: 1,
//   },
// });

const {
  AnimatedView: NavigationAnimatedView,
  Transitioner: NavigationTransitioner,
  Card: NavigationCard,
  Header: NavigationHeader,
  Reducer: NavigationReducer,
  RootContainer: NavigationRootContainer,
} = NavigationExperimental;

const styles = StyleSheet.create({
  animatedView: {
    flex: 1,
  },
  scrollView: {
    marginTop: NavigationHeader.HEIGHT,
  },
});

class AppContainer extends React.Component {

  _renderScene({scene}) {
    console.log('in render scene');
    const { route } = scene;

    switch(route.key) {
    case 'First':
      return <Homepage />;
    case 'Second':
      return <Homepage />;
    case 'Third':
      return <AddTimeScreen />;
    }
  }

  render() {
    console.log('trying to render app container');
    let {navigationState, onNavigate} = this.props;
    console.log('navigation state is: ', navigationState);
    console.log('onNavigate state is: ', onNavigate);
    console.log('trying to render app container 2');

    // return (
    //   <Text 
    //    onNavigate={onNavigate}
    //   renderOverlay={props => (
    //     <NavigationHeader
    //       {...props}
    //       renderTitleComponent={props => {
    //         return <NavigationHeader.Title>'TITLE'</NavigationHeader.Title>;
    //       }}
    //       // When dealing with modals you may also want to override renderLeftComponent...
    //     />
    //   )}
    //   renderScene={props => (
    //     // Again, we pass our navigationState from the Redux store to <NavigationCard />.
    //     // Finally, we'll render out our scene based on navigationState in _renderScene().
    //     <NavigationCard
    //       {...props}
    //       renderScene={this._renderScene}
    //       key={props.scene.route.key}
    //     />
    //   )}
    //   >
    //    Hi
    //   </Text>
    // );
    return (

      <NavigationTransitioner
        navigationState={navigationState}
        onNavigate={onNavigate}
        renderOverlay={props => (
          <NavigationHeader
            {...props}
            renderTitleComponent={props => {
              return <NavigationHeader.Title>'TITLE'</NavigationHeader.Title>;
            }}
            // When dealing with modals you may also want to override renderLeftComponent...
          />
        )}
        renderScene={props => (
          // Again, we pass our navigationState from the Redux store to <NavigationCard />.
          // Finally, we'll render out our scene based on navigationState in _renderScene().
          <NavigationCard
            {...props}
            renderScene={this._renderScene}
            key={props.scene.route.key}
          />
        )}
      />
    );
  }

}

function AppContainer2(props) {
  return (
    <Text>Hi</Text>
  );
}

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

module.exports = connect(mapStateToProps, mapDispatchToProps)(AppContainer2);

