import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Navigation from "./components/Navigation";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink
} from "reactstrap";
import Landing from "./components/Landing";

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Landing />
      </React.Fragment>
    );
  }
}

export default App;
