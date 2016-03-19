"use strict";

var React = require("react");
var ReactDOM = require('react-dom');

// router components
var { Router, Route, IndexRoute, browserHistory } = require('react-router');
var routes = require("./routes");

// redux and store
var { createDevTools } = require('redux-devtools');
var LogMonitor = require('redux-devtools-log-monitor');
var DockMonitor = require('redux-devtools-dock-monitor');
var { createStore, combineReducers, applyMiddleware } = require('redux');
var { Provider } = require('react-redux');
var { syncHistoryWithStore, routerReducer } = require('react-router-redux');

// redux thunk
var thunk = require('redux-thunk').default;

// reducers
var reducers = require("./reducers");
var reducer = combineReducers({reducers, routerReducer});

// store, takes reducer, thunk middleware
var store = (window.devToolsExtension ? window.devToolsExtension()(Redux.createStore) : createStore)( reducer, applyMiddleware(thunk) );


ReactDOM.render((
  <Provider store={store}>
    <div>
      <Router history={browserHistory}>
        {routes}
      </Router>
    </div>
  </Provider>

), document.getElementById('parent-home'));
