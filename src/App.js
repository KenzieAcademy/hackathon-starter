import React from "react";
import { Switch, Route } from "react-router-dom";

import Home from "./pages/Home";
import Profile from "./pages/Profile";
import NotFound from "./pages/NotFound";
import RegisterForm from "./components/registerForm/RegisterForm";
import registerForm from "./components/registerForm/RegisterForm";

class App extends React.Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/profile/:username" component={Profile} />
        <Route exact path="/registerForm" component={RegisterForm} />
        <Route exact path="*" component={NotFound} />
      </Switch>
    );
  }
}

export default App;
