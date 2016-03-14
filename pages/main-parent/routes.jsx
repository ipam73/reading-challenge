"use strict";

var React = require('react');

var Router = require('react-router');
var IndexRoute = Router.IndexRoute;
var Route = Router.Route;

// components
var App = require('./components/App')
var HomePage = require('./components/Homepage')

var AboutPage = require('./components/about/AboutPage')

var StudentPage = require('./components/student/StudentPage')
var AddStudentPage = require('./components/student/AddStudentPage')

var AddTimePage = require('./components/time/AddTimePage')

var routes = (
  <Route path="/" component={App}>
    <IndexRoute component={HomePage} />
    <Route path="/student/:id" component={StudentPage}/>
    <Route path="/addstudent" component={AddStudentPage}/>
    <Route path="/addtime/:id" component={AddTimePage}/>
    <Route path="/about" component={AboutPage}/>
  </Route>
);

module.exports = routes;