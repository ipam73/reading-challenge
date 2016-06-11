import React from "react";
import ReactDOM from "react-dom";

// router components
import {Router, hashHistory} from "react-router";
import routes from "./routes";

// redux and store
import {createStore, combineReducers, applyMiddleware} from "redux";
import {Provider} from "react-redux";
import {routerMiddleware, routerReducer} from "react-router-redux";

// redux thunk
var thunk = require("redux-thunk").default;

// reducers
import reducers from "../reducers";
var reducer = combineReducers({reducers, routerReducer});

// store, takes reducer, thunk middleware
var store = (window.devToolsExtension ? window.devToolsExtension()(createStore) : createStore)(reducer, applyMiddleware(thunk, routerMiddleware(hashHistory)));

ReactDOM.render((
  <Provider store={store}>
    <div>
      <Router history={hashHistory}>
        {routes}
      </Router>
    </div>
  </Provider>

), document.getElementById("parent-home"));
