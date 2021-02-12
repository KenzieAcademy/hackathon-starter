import React from "react";
import Spinner from "react-spinkit";
import { withAsyncAction } from "../../redux/HOCs";
import { Link } from "react-router-dom";

class RegisterForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      registerFirstName: "",
      registerLastName: "",
      registerUsername: "",
      registerPassword1: "",
      registerPassword2: "",
    };
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    return (
      <div className="register-form">
        <form>
          <label htmlFor="first-name">First Name</label>
          <input
            type="text"
            name="username"
            autoFocus
            required
            onChange={this.handleChange}
          />

          <br />

          <label htmlFor="first-name">Last Name</label>
          <input
            type="text"
            name="username"
            autoFocus
            required
            onChange={this.handleChange}
          />

          <br />

          <label htmlFor="first-name">Username</label>
          <input
            type="text"
            name="username"
            autoFocus
            required
            onChange={this.handleChange}
          />

          <br />

          <label htmlFor="first-name">Password</label>
          <input
            type="text"
            name="username"
            autoFocus
            required
            onChange={this.handleChange}
          />
        </form>
        <Link to="/" onClick={this.handleLogout}>
          Register!
        </Link>
      </div>
    );
  }
}

export default withAsyncAction("auth", "login")(RegisterForm);
