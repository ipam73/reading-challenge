import React from 'react';
import {AppRegistry} from 'react-native';
import Root from './app/native';
import configureStore from './app/store/configureStore.js';

const store = configureStore();

function AndroidApp() {
  return (
    <Root store={store} />
  );
}

AppRegistry.registerComponent('Charm City Readers', () => AndroidApp);
