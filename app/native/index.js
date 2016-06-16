import React, {Component} from 'react';
import {Provider} from 'react-redux';
// import Homepage from './components/Homepage';
// import AddTimeScreen from './components/time/AddTimeScreen';

import AppContainer from './AppContainer';

export default class Root extends Component {
  render() {
    return (
      <Provider store={this.props.store}>
        <AppContainer />
      </Provider>
    );
  }
}
