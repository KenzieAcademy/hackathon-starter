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
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
          vehicula erat vitae ultricies condimentum. Ut tincidunt nec erat eu
          porta. Donec a massa at lectus facilisis consectetur. Ut sed tellus
          orci. Donec imperdiet erat eu ligula accumsan congue. Donec
          ullamcorper turpis sem. Aliquam finibus leo et auctor facilisis.
          Mauris in libero vel mauris pellentesque malesuada id vulputate nisi.
          Proin eget nisi eu tellus pellentesque consectetur.
        </p>
        <br />
        <Link to="/profilePage">Back to my profile</Link>
      </div>
    );
  }
}

export default withAsyncAction("profile", "all")(About);
