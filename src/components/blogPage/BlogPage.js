import React from "react";
import { withAsyncAction } from "../../redux/HOCs";
import { Link } from "react-router-dom";

class BlogPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      messages: [],
      blogPost: "",
      count: 0,
      image: "",
    };
  }

  handleChange = (event) => {
    let data = { ...this.state };

    data[event.target.name] = event.target.value;

    this.setState(data);
  };

  pushPost = (event) => {
    this.state.messages = this.state.blogPost;
    this.setState({
      blogPost: "",
    });
  };

  render() {
    return (
      <div>
        <div id="profile-links">
          <Link to="/" onClick={this.handleLogout}>
            Home
          </Link>

          <Link to="/ContactPage">Contact</Link>

          <Link to="/About">About</Link>
        </div>
        <h1>Daily updates about my life!</h1>
        <div>
          <li>{this.state.messages}</li>
        </div>
        <br />
        <div className="Messages">
          <div className="NewMessage">
            <input
              name="blogPost"
              onChange={this.handleChange}
              value={this.state.blogPost}
            />
            <button onClick={this.pushPost}> So what happened today? </button>
          </div>
        </div>
        <Link to="/profilePage">Back to my profile</Link>
      </div>
    );
  }
}

export default withAsyncAction("profile", "all")(BlogPage);
