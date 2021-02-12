import React from "react";
import { withAsyncAction } from "../../redux/HOCs";
import { Link } from "react-router-dom";

class ContactPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      messages: [],
      message: "",
    };
  }
  handleChange = (event) => {
    let data = { ...this.state };

    data[event.target.name] = event.target.value;

    this.setState(data);
  };

  sendMessage = (event) => {
    this.setState({
      message: "",
    });
  };

  render() {
    return (
      <div>
        <div id="profile-links">
          <Link to="/" onClick={this.handleLogout}>
            Home
          </Link>

          <Link to="/About">About</Link>

          <Link to="/BlogPage">Blog</Link>
        </div>
        <h1>Contact Page</h1>
        <p>For business inquiries, contact me at JaneDoe@gmail.com</p>
        <p>Instagram</p>
        <p>Tumblr</p>
        <p></p>
        <br />

        <div className="Messages">
          <div className="NewMessage">
            <input
              name="message"
              onChange={this.handleChange}
              value={this.state.message}
            />
            <button onClick={this.sendMessage}> Send me a PM! </button>
          </div>
          <Link to="/profilePage">Back to my profile</Link>
        </div>
      </div>
    );
  }
}

export default withAsyncAction("profile", "all")(ContactPage);
