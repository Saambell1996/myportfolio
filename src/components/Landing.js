import React, { Component } from "react";
import CSS from "./css/style.css";
import Navigation from "./Navigation";
import Title from "./Title";
import Skills from "./Skills";
import About from "./About";
import {
  Col,
  Row,
  Container,
  Button,
  Card,
  CardBody,
  CardHeader,
  CardFooter,
  CardImg
} from "reactstrap";

export default class Landing extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <React.Fragment>
        <div className="landing">
          <Navigation />
          <Title />
        </div>
        <Skills />
        <About/>
      </React.Fragment>
    );
  }
}
