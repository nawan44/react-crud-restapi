import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Login, MainApp, InputSupport } from "../pages";

export default function Routes() {
  return (
    <Router>
      <Switch>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/">
          <MainApp />
        </Route>
      </Switch>
    </Router>
  );
}