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
                <ScrollTo>
                  {({ scrollTo }) => (
                    <NavLink
                      onClick={() =>
                        scrollTo({ ref: this.myRef, y: 670, smooth: true })
                      }
                      href="#"
                    >
                      Skills
                    </NavLink>
                  )}
                </ScrollTo>
              </NavItem>

              <NavItem>
                <ScrollTo>
                  {({ scrollTo }) => (
                    <NavLink
                      onClick={() =>
                        scrollTo({ ref: this.myRef, y: 1900, smooth: true })
                      }
                      href="#"
                    >
                      About Me
                    </NavLink>
                  )}
                </ScrollTo>
              </NavItem>
              <NavItem>
                <ScrollTo>
                  {({ scrollTo }) => (
                    <NavLink
                      onClick={() =>
                        scrollTo({ ref: this.myRef, y: 4100, smooth: true })
                      }
                      href="#"
                    >
                      Contact
                    </NavLink>
                  )}
                </ScrollTo>
              </NavItem>

              <div className="button-hire">
                <Button className="hire-button" href="#">
                  Hire Me
                </Button>
              </div>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}

export default Navigation;
