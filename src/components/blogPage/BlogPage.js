import React from "react";
import { withAsyncAction } from "../../redux/HOCs";
import { Link } from "react-router-dom";

class BlogPage extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <h1>Daily updates about my life!</h1>
        <div>Had a picnic today!</div>
        <br />
        <Link to="/profilePage">Back to my profile</Link>
      </div>
    );
  }
}

export default withAsyncAction("profile", "all")(BlogPage);
