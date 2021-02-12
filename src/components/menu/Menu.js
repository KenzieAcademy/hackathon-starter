import React from "react";
import { Link } from "react-router-dom";
import "./Menu.css";
import { withAsyncAction } from "../../redux/HOCs";
import RegisterForm from "../registerForm/RegisterForm";

class Menu extends React.Component {
  handleLogout = (event) => {
    event.preventDefault();
    this.props.logout();
  };

  render() {
    return (
      <div className="Menu">
        <h1>Kwitter</h1>
        {this.props.isAuthenticated && (
          <div id="menu-links">
            <Link to="/" onClick={this.handleLogout}>
              Logout
            </Link>
            <Link to="/profilePage">Profile</Link>
          </div>
        )}
      </div>
    );
  }
}

export default withAsyncAction("auth", "logout")(Menu);
