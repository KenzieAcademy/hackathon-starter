import React from "react";
import { Switch, Route } from "react-router-dom";

import Home from "./pages/Home";
import Profile from "./pages/Profile";
import NotFound from "./pages/NotFound";
import RegisterForm from "./components/registerForm/RegisterForm";
import ProfilePage from "./components/profilePage/ProfilePage";
import About from "./components/about/About";
import ContactPage from "./components/contactPage/ContactPage";
import BlogPage from "./components/blogPage/BlogPage";

class App extends React.Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/profile/:username" component={Profile} />
        <Route exact path="/registerForm" component={RegisterForm} />
        <Route exact path="/profilePage" component={ProfilePage} />
        <Route exact path="/about" component={About} />
        <Route exact path="/contactPage" component={ContactPage} />
        <Route exact path="/blogPage" component={BlogPage} />
        <Route exact path="*" component={NotFound} />
      </Switch>
    );
  }
}

export default App;
