import React, { Component } from "react";
import {
  Button,
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from "reactstrap";
import CSS from "./css/style.css";
import { ScrollTo } from "react-scroll-to";
import Title from "./Title";
import Skills from "./Skills";
import About from "./About";
import ScrollIntoView from "react-scroll-into-view";

export class Navigation extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  render() {
    return (
      <div className="nav-container">
        <Navbar dark expand="md">
          <NavbarBrand href="/">
            <img src="images/accenture.png" class="img-logo" />
            <div className="logo-sub">Sam Bell | Accenture</div>
          </NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <ScrollIntoView selector="#skills" smooth="true">
                  <NavLink href="#">Skills</NavLink>
                </ScrollIntoView>
              </NavItem>

              <NavItem>
                <ScrollIntoView
                  selector="#about-me"
                  smooth="true"
                  alignToTop="true"
                >
                  <NavLink href="#">About Me</NavLink>
                </ScrollIntoView>
              </NavItem>
              <NavItem>
                <ScrollIntoView
                  selector="#contact-scroll"
                  smooth="true"
                  alignToTop="true"
                >
                  <NavLink href="#">Contact</NavLink>
                </ScrollIntoView>
              </NavItem>

            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}

export default Navigation;
