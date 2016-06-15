import React, {Component} from 'react';
import {Provider} from 'react-redux';
// import {Scene, Router} from 'react-native-router-flux';

import Homepage from './components/Homepage';
import AddTimeScreen from './components/time/AddTimeScreen';

import AppContainer from './AppContainer';




// class App extends React.Component {
//   render() {
//     return <Router>
//       <Scene key="root">
//         <Scene key="login" component={Login} title="Login"/>
//         <Scene key="register" component={Register} title="Register"/>
//         <Scene key="home" component={Home}/>
//       </Scene>
//     </Router>
//   }
// }

export default class Root extends Component {
  render() {
    return (
      <Provider store={this.props.store}>
        <Homepage />
      </Provider>
    );
  }
}
