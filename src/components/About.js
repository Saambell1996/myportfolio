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
  CardImg
} from "reactstrap";
import ScrollAnimation from "react-animate-on-scroll";

export default class About extends Component {
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
                          src="images/human.jpg"
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
                      I have been apart of the <span>Accenture</span> team for
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
                      </div>
                    </Col>
                  </Row>
                  <div className="seperator-line" />
                  <Row>
                    <Col md="5">
                      <iframe
                        id="kmsembed-0_0gfeleq8"
                        width="400"
                        height="300"
                        src="https://mediaexchange.accenture.com/embed/secure/iframe/entryId/0_0gfeleq8/uiConfId/27188232"
                        class="kmsembed"
                        allowfullscreen
                        webkitallowfullscreen
                        mozAllowFullScreen
                        allow="autoplay *; fullscreen *; encrypted-media *"
                        frameborder="0"
                        title="Kaltura Player"
                      />
                    </Col>
                    <Col md="7">
                      <div className="cherry-text">
                        <h2>Cherry Picker</h2>
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
                          Lorem Ipsum is simply dummy text of the printing and
                          typesetting industry. Lorem Ipsum has been the
                          industry's standard dummy text ever since the 1500s,
                          when an unknown printer took a galley of type and
                          scrambled it to make a type specimen book. 
                        </p>
                      </div>
                    </Col>
                    </Row>
                  <div className="seperator-line-extra" />
                  <Row>
                      
                    <Col md="5">
                     <img src="/images/tg.jpg" class="img-fluid"></img>
                     <div className="website-link-button">
                     <Button color="dark">
                     <a href="https://saambell1996.github.io/index.html">Link to site</a>
                     </Button>
                     </div>
                    </Col>
                    <Col md="7">
                      <div className="cherry-text">
                        <h2>Thieve's Guild Site</h2>
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
                       
                      </div>
                    </Col>
                  </Row>
                  <div className="seperator-line" />
                  <Row>
                      
                    <Col md="5">
                     <img src="/images/XR.png" class="img-fluid"></img>
                     
                    </Col>
                    <Col md="7">
                      <div className="cherry-text">
                        <h2>Interactive Learning Lab</h2>
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
                       
                      </div>
                    </Col>
                  </Row>
                </div>
              </div>
            </Container>
          </ScrollAnimation>
        </div>
      </React.Fragment>
    );
  }
}
