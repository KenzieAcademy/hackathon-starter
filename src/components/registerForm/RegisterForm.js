import React from "react";
import Spinner from "react-spinkit";
import { withAsyncAction } from "../../redux/HOCs";

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
        </form>
      </div>
    );
  }
}

export default withAsyncAction("auth", "login")(RegisterForm);
