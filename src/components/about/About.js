import React from "react";
import { withAsyncAction } from "../../redux/HOCs";
import Messages from "../messages/Messages";
import { userIsAuthenticated } from "../../redux/HOCs";
import { Link } from "react-router-dom";
import { render } from "react-dom";

class About extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <h1>About ME!</h1>
        <div>I like to do stuff!</div>
        <br />
        <Link to="/profilePage">Back to my profile</Link>
      </div>
    );
  }
}

export default withAsyncAction("profile", "all")(About);
