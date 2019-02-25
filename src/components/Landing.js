import React, { Component } from "react";
import CSS from "./css/style.css";
import Navigation from "./Navigation";
import Title from "./Title";
import Skills from "./Skills";
import About from "./About";
import Contact from "./Contact";
import Arrow from "./Arrow";
import Footer from "./Footer";
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
import ScrollIntoView from 'react-scroll-into-view'

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
        <Skills/>
        <About/>
        <Contact/>
        <Footer/>
        <Arrow/>
      </React.Fragment>
    );
  }
}
