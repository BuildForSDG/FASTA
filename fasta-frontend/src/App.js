import React from "react";
import { render } from "react-dom";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Signup from "./components/Signup";
import Login from "./components/Login";
import PageNotFound from "./PageNotFound";
import "normalize.css";

const App = () => (
  <Router>
    <div>
      <Switch>
        <Route exact path="/login" component={Login} />
        <Route path="/signup" component={Signup} />
        <Route component={PageNotFound} />
      </Switch>
    </div>
  </Router>
);

render(<App />, document.getElementById("root"));
