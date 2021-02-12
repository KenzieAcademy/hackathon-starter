import React from "react";
import { withAsyncAction } from "../../redux/HOCs";
import { Link } from "react-router-dom";

class About extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <div id="profile-links">
          <Link to="/" onClick={this.handleLogout}>
            Home
          </Link>

          <Link to="/ContactPage">Contact</Link>

          <Link to="/BlogPage">Blog</Link>
        </div>
        <h1>About ME!</h1>
        <div>I like to do stuff!</div>
        <br />
        <Link to="/profilePage">Back to my profile</Link>
      </div>
    );
  }
}

export default withAsyncAction("profile", "all")(About);
