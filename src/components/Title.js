import React, { Component } from "react";
import { Col, Row, Container, Button } from "reactstrap";

export default class Title extends Component {
  render() {
    return (
      <React.Fragment>
        <Container>
          <div className="nameContainer">
            <h1 className="name">Sam Bell</h1>
            <h4 className="subtitle">Software Developer</h4>
            <div className="icon-holder">
              <div className="icons">
                <div className="skill-icon">
                  <img src="images/coding.png" />
                </div>
              </div>
            </div>
          </div>
        </Container>
      </React.Fragment>
    );
  }
}
