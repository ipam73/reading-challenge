"use strict";

var React = require('react');
var ReactRouter = require('react-router');
var Router = ReactRouter.Router;

var ReactDom = require('react-dom');

var routes = require('./routes');


ReactDom.render((
  <Router history={ReactRouter.browserHistory}>
    {routes}
  </Router>
), document.getElementById('parent-home'));
