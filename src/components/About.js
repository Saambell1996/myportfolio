import React, { Component } from "react";
import {
  Col,
  Row,
  Container,
  Button,
  Card,
  CardBody,
  CardHeader,
  CardFooter,
  CardImg,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter
} from "reactstrap";
import ScrollAnimation from "react-animate-on-scroll";
var Spinner = require("react-spinkit");

export default class About extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false,
      loading: true
    };

    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState(prevState => ({
      modal: !prevState.modal
    }));
  }

  hideSpinner = () => {
    this.setState({
      loading: false
    });
  };

  render() {
    return (
      <React.Fragment>
        <div className="about">
          <div className="name">
            <h1>About Me</h1>
          </div>
          <div class="subtitle">Lorum Ipsum</div>
          <ScrollAnimation
            animateIn="bounceInLeft"
            duration="0.8"
            animateOut="bounceOutRight"
            duration="0.8"
          >
            <Container>
              <div className="personal-section">
                <Row>
                  <Col md="4">
                    <Card>
                      <CardHeader>Sam Bell</CardHeader>
                      <CardBody>
                        <img
                          src="images/pp.jpg"
                          class="img-fluid img-rounded"
                        />
                      </CardBody>
                    </Card>
                  </Col>
                  <Col md="8">
                    <h1>
                      Hey, I'm a Software Developer from Newcastle, I can help
                      you build your next product.
                    </h1>
                    <p className="about-text">
                      I have been a part of the <span>Accenture</span> team for
                      the past year and a half, honing my current skillset and
                      picking up a lot of useful tips and tricks along the way!
                      I have been utilizing <span>ReactJS</span> into my front
                      end capabilities and even had the chance to help deliver a{" "}
                      <span>front end application</span> that would be used by
                      professional athletes to prepare for the Olympics! I am
                      keen to improve these skills even more and hopefully one
                      day be able to move onto to similar, complex applications
                      that I will be able to lend my knowledge to. Besdies front
                      end, I Have also worked on a completely different spectrum
                      of work, aiding in creating <span>3D Models</span> and
                      virtual enviroments for both the{" "}
                      <span>XR Capability</span>, and{" "}
                      <span>a well known european diy retailer</span>. The
                      Application is being used all over the world by users who
                      want to visualize what their items look like in a
                      real-space, without actually having to buy the item first.
                      <br />
                    </p>
                  </Col>
                </Row>
                <div className="seperator-line" />
                <div className="personal-photos">
                  <Row>
                    <Col md="3">
                      <img
                        src="images/bnq.gif"
                        className="img-fluid pull-right"
                      />
                    </Col>
                    <Col md="9">
                      <div className="bnq-text">
                        <h2>Virtual Furniture</h2>
                        <p>
                          One of the first projects that I worked on at
                          Accenture involved the creation and optimization of a
                          variety of 3D models. The processes involved included
                          modeling and texturing, as well as implementing the
                          final product into xCode to handle physical based
                          materials on a number of the models. Since these
                          models were to be used on a mobile application certain
                          guidelines were put in order that make the process
                          slightly more tricky, including a minimum poly count
                          and well as texture size limit. The model's ranked
                          from anything as simple as a desk lamp to something
                          more big and complex like a garden shed.
                        </p>
                        <p>
                          Here you can see an animated example of the final
                          application and how it would be used to place down one
                          of the models inside a real-time space. Users would
                          utilize this application to be able to get a good look
                          at how an item of furniture might look inside of their
                          house without ever having to go out and actually
                          purchase that item first. Overall, a very exciting
                          project to work on which helped me really improved not
                          only my modelling and texturing skills, but my problem
                          solving skills too. Definitely a line of work I would
                          love to do again further down the line.
                        </p>
                      </div>
                    </Col>
                  </Row>
                  <div className="seperator-line" />
                  <Row>
                    <Col md="5">
                      <img src="images/cherrypicker.png" class="img-fluid" />
                      <div className="modal-button-holder">
                        <Button color="danger" onClick={this.toggle}>
                          {this.props.buttonLabel}
                          Click to watch video
                        </Button>
                      </div>
                    </Col>
                    <Col md="7">
                      <div className="cherry-text">
                        <h2>Cherry Picker</h2>
                        <p>
                          The Cherry Picker was another 3D based project I've
                          worked on during my time at Accenture, and a very
                          beneficial one at that. The purpose of the Cherry
                          Picker was to offer trainees a safe, virtual
                          environment in which they could realistically train
                          with a cherry picker without risk of harm or damage.
                          Working alongside a very talented group, I was tasked
                          with a number of different objectives including the
                          likes of modelling, animating and texturing. My main
                          contributions involved modelling certain parts of the
                          cherry picker, creating a puzzle box for users to
                          access via the cherry picker, and animating hands that
                          would work flawlessly with VR controls and look
                          realistic when gripping certain objects like spanners
                          and drills.
                        </p>
                        <p>
                          The rest of the team worked on creating other vital
                          elements such as the environment, the physics, the
                          networking capabilities and general functionality.
                        </p>
                      </div>
                    </Col>
                  </Row>
                  <div className="seperator-line-extra" />
                  <Row>
                    <Col md="5">
                      <img src="images/tg.jpg" class="img-fluid" />
                      <div className="website-link-button">
                        <Button color="dark">
                          <a href="https://thievesguild.github.io/index.html">
                            Link to site
                          </a>
                        </Button>
                      </div>
                    </Col>
                    <Col md="7">
                      <div className="cherry-text">
                        <h2>Thieves Guild Site</h2>
                        <p>
                          One of my first real attempts at a dynamic site came
                          bundled in the form of a fan-site for a game that I
                          had recently just put over 200+ hours into. This was
                          my first actual attempt at using and implementing
                          Bootstrap and Javascript into one of my sites, and
                          came out with pretty neat looking results that didn't
                          look too basic or boring. The site served as an
                          information resource were user could find tips and
                          general information about the game all in one place.
                          Although only a fan-site and nothing that really
                          gained any profit, I was at one point maintaining over
                          200-300 viewers (found via Google Analytics). This was
                          a very fun and colorful project to work on and one
                          that I've kept hosted for a while now to look back on
                          and see how far my work has come along.
                        </p>
                      </div>
                    </Col>
                  </Row>
                  <div className="seperator-line" />
                  <Row>
                    <Col md="5">
                      <img src="images/XR.png" class="img-fluid" />
                    </Col>
                    <Col md="7">
                      <div className="cherry-text">
                        <h2>Interactive Learning Lab</h2>
                        <p>
                          One of my more recent projects had me tasked with the
                          modelling and optimization of a "XR Learning Lab".
                          After several iterations and redesigns of what the lab
                          was going to actually look like, we finally decided to
                          go with a simple white wash design that would still
                          grab the users attention as soon as they opened up the
                          application. This project brought it's own
                          complications with having to realistically display
                          physical based materials as well as still run at a
                          smooth framerate when being used on VR hardware.
                          Besides the 3D modelling I always worked on several
                          parts of the applications functionality to make it
                          more accessible and user friendly.
                        </p>
                      </div>
                    </Col>
                  </Row>
                </div>
              </div>
            </Container>
            <br></br>
          </ScrollAnimation>
        </div>
        <div>
          <Modal
            isOpen={this.state.modal}
            toggle={this.toggle}
            className={this.props.className}
          >
            <ModalHeader toggle={this.toggle}>Cherry Picker</ModalHeader>
            <ModalBody>
              <div className="modal-video-holder">
                {this.state.loading ? (
                  <div className="cube-container">
                    <div className="sk-folding-cube">
                      <div className="sk-cube1 sk-cube" />
                      <div className="sk-cube2 sk-cube" />
                      <div className="sk-cube4 sk-cube" />
                      <div className="sk-cube3 sk-cube" />
                    </div>
                  </div>
                ) : null}
                <iframe
                  id="kmsembed-0_0gfeleq8"
                  onLoad={this.hideSpinner}
                  width="400"
                  height="300"
                  src="https://mediaexchange.accenture.com/embed/secure/iframe/entryId/0_0gfeleq8/uiConfId/27188232"
                  class="kmsembed"
                  allowfullscreen
                  webkitallowfullscreen
                  mozAllowFullScreen
                  allow="autoplay *; fullscreen *; encrypted-media *"
                  frameborder="0"
                  title="Cherry Picker"
                />
              </div>
            </ModalBody>
            <ModalFooter>
              <Button color="secondary" onClick={this.toggle}>
                Close
              </Button>
            </ModalFooter>
          </Modal>
        </div>
      </React.Fragment>
    );
  }
}
