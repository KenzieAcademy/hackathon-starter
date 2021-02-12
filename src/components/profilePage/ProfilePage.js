import React from "react";
import { withAsyncAction } from "../../redux/HOCs";
import Messages from "../messages/Messages";
import { userIsAuthenticated } from "../../redux/HOCs";
import { Link } from "react-router-dom";
import { render } from "react-dom";

class ProfilePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: "",
      lastName: "",
      messages: [],
      message: "",
      count: 0,
      image: "",
    };
  }
  componentDidMount() {
    this.fetchMessages();
  }

  fetchMessages = () => {
    this.props.getMessage(this.props.username).then((res) => {
      console.log(res.payload);
      this.setState({
        messages: res.payload.messages,
        count: res.payload.count,
      });
    });
  };

  newMessageHandler = () => {
    let text = this.state.message;
    this.props.createMessage(text).then(() => {
      this.fetchMessages();
      this.setState({
        message: "",
      });
    });
  };

  handleChange = (event) => {
    let data = { ...this.state };

    data[event.target.name] = event.target.value;

    this.setState(data);
  };

  render() {
    let display = <div>No Messages Found</div>;
    if (this.state.messages) {
      display = this.state.messages.map((value) => {
        return <li key={value.id}>{value.text}</li>;
      });
    }
    return (
      <div>
        <Link to="/" onClick={this.handleLogout}>
          Home
        </Link>
        <br />
        <Link to="/About">About</Link>
        <br />
        <Link to="/ContactPage">Contact me</Link>
        <br />
        <Link to="/BlogPage">Blog</Link>
        <h1>Hello everyone! This is my profile page!</h1>
        <div>Hey everyone, thanks for visiting my profile!</div>
        <br />
        {/* <div className="Messages">
          <div className="ListMessage">{display}</div>
          <div className="NewMessage">
            <input
              name="message"
              onChange={this.handleChange}
              value={this.state.message}
            />
            <button onClick={this.newMessageHandler}>
              {" "}
              Send me a Message!{" "}
            </button>
          </div>
        </div> */}
      </div>
    );
  }
}

export default withAsyncAction("profile", "all")(ProfilePage);
