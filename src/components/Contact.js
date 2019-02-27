import React, { Component } from "react";
import {
  Container,
  Col,
  Row,
  Button,
  Form,
  FormGroup,
  Label,
  Input,
  FormText
} from "reactstrap";
import ScrollAnimation from "react-animate-on-scroll";
import { ScrollTo } from "react-scroll-to";
import axios from "axios";

const API_PATH = "http://localhost:3001/index.php";

export default class Contact extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fname: "",
      lname: "",
      email: "",
      message: "",
      mailSent: false,
      error: null
    };
  }

  handleFormSubmit = e => {
    e.preventDefault();
    axios({
      method: "post",
      url: `${API_PATH}`,
      headers: { "content-type": "application/json" },
      data: this.state
    })
      .then(result => {
        this.setState({
          mailSent: result.data.sent
        });
      })
      .catch(error => this.setState({ error: error.message }));
  };

  render() {
    return (
      <React.Fragment>
        <div className="contact">
          <div id="contact-scroll" />
          <div className="name">
            <h1>Contact</h1>
          </div>

          <ScrollAnimation
            animateIn="bounceInRight"
            duration="1.5"
            animateOnce="true"
          >
            <Row>
              <Col md="6">
                <div className="form-container">
                  <Row>
                    <div className="getintouch">
                      <h1 className="title">Get In Touch</h1>
                      <p>
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry. Lorem Ipsum has been the
                        industry's standard dummy text ever since the 1500s,
                        when an unknown printer took a galley of type and
                        scrambled it to make a type specimen book. It has
                        survived not only five centuries, but also the leap into
                        electronic typesetting, remaining essentially unchanged.
                      </p>

                      <p>
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry. Lorem Ipsum has been the
                        industry's standard dummy text ever since the 1500s,
                        when an unknown printer took a galley of type and
                        scrambled it to make a type specimen book. It has
                        survived not only five centuries, but also the leap into
                        electronic typesetting, remaining essentially unchanged.
                        It was popularised in the 1960s with the release of
                        Letraset sheets containing Lorem Ipsum passages, and
                        more recently with desktop publishing software like
                        Aldus PageMaker including versions of Lorem Ipsum.
                      </p>
                    </div>
                  </Row>
                </div>
              </Col>

              <Col md="6">
                <div className="form-container">
                  <Row>
                    <Col>
                      <form action="#" className="form">
                        <label>First Name</label>
                        <input
                          type="text"
                          id="fname"
                          name="firstname"
                          placeholder="Your Name.."
                          value={this.state.fname}
                          onChange={e =>
                            this.setState({
                              fname: e.target.value
                            })
                          }
                        />
                        <label>Last Name</label>
                        <input
                          type="text"
                          id="lname"
                          name="lastname"
                          placeholder="Your Last Name.."
                          value={this.state.lname}
                          onChange={e =>
                            this.setState({
                              lname: e.target.value
                            })
                          }
                        />

                        <label>Email</label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          placeholder="Your E-mail"
                          value={this.state.email}
                          onChange={e =>
                            this.setState({
                              email: e.target.value
                            })
                          }
                        />

                        <label>Subject</label>
                        <textarea
                          id="subject"
                          name="subject"
                          placeholder="Write Something.."
                          value={this.state.message}
                          onChange={e =>
                            this.setState({
                              message: e.target.value
                            })
                          }
                        />
                        <br />
                        <input
                          type="submit"
                          onClick={e => this.handleFormSubmit(e)}
                          value="Submit"
                        />
                        <div>
                          {this.state.mailSent && (
                            <div>Thank you for contacting us.</div>
                          )}
                        </div>
                      </form>
                    </Col>
                  </Row>
                </div>
              </Col>
            </Row>
          </ScrollAnimation>
        </div>
      </React.Fragment>
    );
  }
}
