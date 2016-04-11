"use strict";

var React = require('react');
var {Route, IndexRoute, hashHistory} = require('react-router');

// components
var App = require('./components/App')
var HomePage = require('./components/HomePage')
var AboutPage = require('./components/about/AboutPage')
var StudentPage = require('./components/student/StudentPage')
var AddStudentPage = require('./components/add-student/AddStudentPage')
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