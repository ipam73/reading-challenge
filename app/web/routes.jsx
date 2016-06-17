import React from "react";
import {Route, IndexRoute} from "react-router";

// components
import {App} from "./components/App";
import Homepage from "./components/Homepage";
import About from "./components/About";
import Support from "./components/Support";
import AddTimePage from "./components/time/AddTimePage";

var routes = (
  <Route path="/" component={App}>
    <IndexRoute component={Homepage} />
    <Route path="/addtime/:id" component={AddTimePage} />
    <Route path="/about" component={About} />
    <Route path="/support" component={Support} />
  </Route>
);

module.exports = routes;
