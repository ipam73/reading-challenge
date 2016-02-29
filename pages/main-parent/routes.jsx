"use strict";

var React = require('react');

var Router = require('react-router');
var IndexRoute = Router.IndexRoute;
var Route = Router.Route;

// components
var App = require('./components/App')
var AboutPage = require('./components/about/AboutPage')
var HomePage = require('./components/Homepage')

var routes = (
  <Route path="/parent" component={App}>
    <IndexRoute component={HomePage} />
    <Route path="/about" component={AboutPage}/>
  </Route>
);

module.exports = routes;