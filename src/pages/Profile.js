import React from "react";
import Menu from "../components/menu/Menu";
import Messages from "../components/messages/Messages";
import { userIsAuthenticated } from "../redux/HOCs";

class Profile extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      formData: {
        firstName: "",
        lastName: "",
      },
    };
  }

  handleChange = (event) => {
    const formData = { ...this.state.formData };
    formData[event.target.name] = event.target.value;

    this.setState({ formData });
  };

  handleSubmit = (event) => {
    event.preventDefault();

    this.setState({
      submitted: true,
    });
  };
  render() {
    console.log(this.props);
    return (
      <div className="Profile">
        <form onSubmit={this.handleSubmit}>
          <div>
            <label htmlFor="firstName">First Name</label>
            <input
              type="text"
              name="firstName"
              value={this.state.formData.firstName}
              onChange={this.handleChange}
            />
          </div>

          <div>
            <label htmlFor="lastName">First Name</label>
            <input
              type="text"
              name="lastName"
              value={this.state.formData.firstName}
              onChange={this.handleChange}
            />
          </div>
          {/* <Menu isAuthenticated={this.props.isAuthenticated} />
          <Messages username={this.props.match.params.username} /> */}
        </form>
        <div>
          {this.state.formData.firstName}
          <br />
          {this.state.formData.lastName}
        </div>
      </div>
    );
  }
}

export default userIsAuthenticated(Profile);
