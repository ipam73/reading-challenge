import React from 'react';
import ReactGA from 'react-ga'
import ReactDOM from 'react-dom';

// router components
import {Router, hashHistory} from 'react-router';
import routes from './routes';

// redux and store
import {createStore, combineReducers, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import {routerMiddleware, routerReducer} from 'react-router-redux';

// redux thunk
var thunk = require('redux-thunk').default;

// reducers
import reducers from '../reducers';
import actions from '../actions';
var reducer = combineReducers({reducers, routerReducer});

// log page loads to google analytics
ReactGA.initialize('UA-81211784-1', {debug: true});
function logGoogleAnalytics() {
  ReactGA.set({page: window.location.pathname});
  ReactGA.pageview(window.location.pathname);
}

// store, takes reducer, thunk middleware
var store = (window.devToolsExtension ? window.devToolsExtension()(createStore) : createStore)(reducer, applyMiddleware(thunk, routerMiddleware(hashHistory)));
store.dispatch(actions.restoreAuth());
ReactDOM.render((
  <Provider store={store}>
    <div>
      <Router history={hashHistory} onUpdate={logGoogleAnalytics}>
        {routes}
      </Router>
    </div>
  </Provider>

), document.getElementById('parent-home'));
