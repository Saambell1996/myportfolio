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
            <div id="about-me" />
            <h1>About Me</h1>
          </div>
          <div class="subtitle">Lorum Ipsum</div>

          <ScrollAnimation animateIn="bounceInRight" duration="1.5" animateOnce="true">
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
                      I have been part of the <span>Accenture</span> team for
                      the past year and a half, honing my current skillset and
                      picking up a lot of useful tips and tricks along the way!
                      I have been utilizing <span>ReactJS</span> into my front
                      end capabilities and even had the chance to help deliver a{" "}
                      <span>front end application</span>
                      that would be used by professional athletes, to prepare
                      for the Olympics! I am keen to improve these skills even
                      more and hopefully one day be able to move onto to
                      similar, complex applications that I will be able to lend
                      my knowledge to. Besides front end, I have also worked on
                      a completely different spectrum of work, aiding in
                      creating <span>3D Models</span> and virtual environments
                      for both the XR Capability, and a well-known European DIY
                      retailer. The Application is being used all over the world
                      by users who want to <span>visualize</span> what their
                      items look like in a real-space, without having to buy the
                      item first.
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
                          variety of 3D models. The process involved modelling
                          and texturing, as well as implementing the final
                          product into xCode to handle physical based materials
                          on a number of the models. Since these models were to
                          be used on a mobile application, certain guidelines
                          were put in place, which made the process slightly
                          trickier; for example, a minimum poly count, and a
                          texture size limit. The model's ranged from anything
                          as simple as a desk lamp to something bigger and more
                          complex like a garden shed.
                        </p>
                        <p>
                          Here you can see an animated example of the final
                          application, and how it would be used to place down
                          one of the models inside a real-time space. Users
                          would utilize this application to be able to get a
                          good look at how an item of furniture might look
                          inside of their house, without ever having to go out
                          and actually purchase that item. Overall, a very
                          exciting project to work on which helped me really
                          improve not only my modelling and texturing skills,
                          but my problem-solving skills too. Definitely a line
                          of work I would love to do again further down the
                          line.
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
                          would work flawlessly with VR controls, and look
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
                  <div className="seperator-line" />
                  <Row>
                    <Col md="5">
                      <div class="resp-container">
                        <iframe
                          width="345"
                          height="240"
                          src="https://sketchfab.com/models/833a44cb4b7147ac83f050972e4ccfe0/embed"
                          frameborder="0"
                          allow="autoplay; fullscreen; vr"
                          mozallowfullscreen="true"
                          webkitallowfullscreen="true"
                          className="resp-iframe"
                        />
                      </div>
                    </Col>
                    <Col md="7">
                      <div className="cherry-text">
                        <h2>Low Poly Models</h2>
                        <p>
                          Lorem Ipsum is simply dummy text of the printing and
                          typesetting industry. Lorem Ipsum has been the
                          industry's standard dummy text ever since the 1500s,
                          when an unknown printer took a galley of type and
                          scrambled it to make a type specimen book. It has
                          survived not only five centuries, but also the leap
                          into electronic typesetting, remaining essentially
                          unchanged. It was popularised in the 1960s with the
                          release of Letraset sheets containing Lorem Ipsum
                          passages, and more recently with desktop publishing
                          software like Aldus PageMaker including versions of
                          Lorem Ipsum.
                        </p>
                        <p>
                          It was popularised in the 1960s with the release of
                          Letraset sheets containing Lorem Ipsum passages, and
                          more recently with desktop publishing software like
                          Aldus PageMaker including versions of Lorem Ipsum.
                        </p>
                      </div>
                    </Col>
                  </Row>
                  <div className="seperator-line-extra" />
                  <Row>
                    <Col md="5">
                      <img src="images/persona.gif" class="img-fluid" />
                      <div className="website-link-button">
                        <Button color="dark">
                          <a href="https://saambell1996.github.io/">
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
                          Bootstrap and JavaScript into one of my sites and came
                          out with pretty neat looking results that didn't look
                          too basic or boring. The site served as an information
                          resource were user could find tips and general
                          information about the game all in one place. Although
                          only a fan-site and nothing that really gained any
                          profit, I was at one point maintaining over 200-300
                          viewers (found via Google Analytics). This was a very
                          fun and colourful project to work on and one that I've
                          kept hosted for a while now to look back on and see
                          how far my work has come along.
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
                          grab the user’s attention as soon as they opened up
                          the application. This project brought its own
                          complications with having to realistically display
                          physical based materials as well as still run at a
                          smooth framerate when being used on VR hardware.
                          Besides the 3D modelling I also worked on several
                          parts of the applications functionality, to make it
                          more accessible and user friendly.
                        </p>
                      </div>
                    </Col>
                  </Row>
                </div>
              </div>
            </Container>
            <br />
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
