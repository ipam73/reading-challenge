import React from "react";
import {Route, IndexRoute} from "react-router";

// components
import {App} from "./components/App";
import HomePage from "./components/HomePage";
import AboutPage from "./components/about/AboutPage";
import AddTimePage from "./components/time/AddTimePage";

var routes = (
  <Route path="/" component={App}>
    <IndexRoute component={HomePage} />
    <Route path="/addtime/:id" component={AddTimePage} />
    <Route path="/about" component={AboutPage} />
  </Route>
);

module.exports = routes;
