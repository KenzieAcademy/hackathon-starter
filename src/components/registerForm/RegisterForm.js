import React from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
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
        <Form>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" />
          </Form.Group>

          <Form.Group controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" />
          </Form.Group>

          <Form.Group controlId="formBasicUserName">
            <Form.Label>Username</Form.Label>
            <Form.Control type="userName" placeholder="Enter Username" />
          </Form.Group>

          <Form.Group controlId="formFirstName">
            <Form.Label>First Name</Form.Label>
            <Form.Control type="firstName" placeholder="Enter First Name" />
          </Form.Group>

          <Form.Group controlId="formLastName">
            <Form.Label>Last Name</Form.Label>
            <Form.Control type="lastName" placeholder="Enter Last Name" />
          </Form.Group>

          <Button variant="primary" type="submit">
            <Link to="/" onClick={this.handleLogout}>
              Register!
            </Link>
          </Button>
        </Form>
        {/* <form>
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
        </form> */}
      </div>
    );
  }
}

export default withAsyncAction("auth", "login")(RegisterForm);
