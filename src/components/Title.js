import React, { Component } from "react";
import { Col, Row, Container, Button } from "reactstrap";
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCode } from '@fortawesome/free-solid-svg-icons';
import ScrollAnimation from 'react-animate-on-scroll';
library.add(faCode)

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
                <FontAwesomeIcon icon="code" size="lg" />
                </div>
              </div>
            </div>
          </div>
        </Container>
      </React.Fragment>
    );
  }
}
