import React from "react";
import { withAsyncAction } from "../../redux/HOCs";
import { Link } from "react-router-dom";
import Image from "react-bootstrap/Image";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import "./ProfilePage.css";

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

  onClick1 = (event) => {
    window.open("https://en.wikipedia.org/wiki/Sydney", "_blank");
  };

  onClick2 = (event) => {
    window.open("https://en.wikipedia.org/wiki/France", "_blank");
  };

  onClick3 = (event) => {
    window.open("https://en.wikipedia.org/wiki/The_Bahamas", "_blank");
  };

  handleChange = (event) => {
    let data = { ...this.state };

    data[event.target.name] = event.target.value;

    this.setState(data);
  };

  render() {
    return (
      <div>
        <div id="profile-links">
          <Link to="/" onClick={this.handleLogout}>
            Home
          </Link>

          <Link to="/About">About</Link>

          <Link to="/ContactPage">Contact</Link>

          <Link to="/BlogPage">Blog</Link>
        </div>
        <div className="Menu">
          <h1>Hello everyone! This is my profile page!</h1>
          <div>
            <Container>
              <Col xs={6} md={4}>
                <Image
                  src="https://media.gettyimages.com/photos/businesswoman-smiling-over-white-background-picture-id985138666?s=612x612"
                  width="200px"
                />
              </Col>
            </Container>
          </div>
        </div>
        <br />
        <Container className="Vacation">
          <Col>
            <Card style={{ width: "18rem" }}>
              <Card.Img
                variant="top"
                src="https://cdn.xl.thumbs.canstockphoto.com/a-night-scene-of-canada-place-vancouver-bc-canada-stock-image_csp0874996.jpg"
                width="187px"
              />
              <Card.Body>
                <Card.Title>My vacation in Sydney!</Card.Title>
                <Card.Text>Loved it!</Card.Text>
                <Button variant="primary" onClick={this.onClick1}>
                  Go to Sydney!
                </Button>
              </Card.Body>
            </Card>
          </Col>

          <Col>
            <Card style={{ width: "18rem" }}>
              <Card.Img
                variant="top"
                src="https://images.pexels.com/photos/739407/pexels-photo-739407.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                width="200px"
              />
              <Card.Body>
                <Card.Title>My vacation in France!</Card.Title>
                <Card.Text>Would go again!</Card.Text>
                <Button variant="primary" onClick={this.onClick2}>
                  Go to France!
                </Button>
              </Card.Body>
            </Card>
          </Col>

          <Col>
            <Card style={{ width: "18rem" }}>
              <Card.Img
                variant="top"
                src="https://st.depositphotos.com/1003723/2772/i/950/depositphotos_27721263-stock-photo-bahamas-writing-on-a-desrt.jpg"
                width="186px"
              />
              <Card.Body>
                <Card.Title>My vacation in the Bahamas!</Card.Title>
                <Card.Text>Amazing!</Card.Text>
                <Button variant="primary" onClick={this.onClick3}>
                  Go to the Bahamas!
                </Button>
              </Card.Body>
            </Card>
          </Col>
        </Container>
        <Container className="party">
          <Row>
            <Col>
              <Image
                src="https://media.istockphoto.com/photos/nicelooking-attractive-gorgeous-glamorous-elegant-stylish-cheerful-picture-id1165055006?k=6&m=1165055006&s=612x612&w=0&h=X_d75QPcjQ0Zx-X2tTD4npQOIjD6lKXdDPqxJHuovhc="
                fluid
              />
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default withAsyncAction("profile", "all")(ProfilePage);
