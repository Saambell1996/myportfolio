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

import { ScrollTo } from "react-scroll-to";
import ScrollAnimation from "react-animate-on-scroll";

export default class Skills extends Component {
  myRef = React.createRef();
  render() {
    return (
      <React.Fragment>
        <div className="skills">
        
          <Container>
            <Row>
              <Col md="12">
             
                <div className="name">
                  <br />
                  <h1>Skills</h1>
                </div>
                <div className="subtitle">Front End Capabilities/Other</div>
               
                <ScrollAnimation animateIn="bounceInRight" duration="1.5" animateOnce="true">
                <Container>
                  {/* First Row  */}
                
                 
                  <div className="card-container">
                    <Row>
                    <div id="skills"></div>
                      <Col md="3" sm="6">
                       
                          <Card>
                            <CardHeader>HTML</CardHeader>
                            <CardBody>
                              <img src="images/html5.png" class="img-fluid" />
                            </CardBody>
                          </Card>
                      
                      </Col>

                      <Col md="3" sm="6">
                        <Card>
                          <CardHeader>CSS</CardHeader>
                          <CardBody>
                            <img src="images/css3.png" class="img-fluid" />
                          </CardBody>
                        </Card>
                      </Col>

                      <Col md="3" sm="6">
                        <Card>
                          <CardHeader>JS</CardHeader>
                          <CardBody>
                            <img src="images/jsblock.png" class="img-fluid" />
                          </CardBody>
                        </Card>
                      </Col>

                      <Col md="3" sm="6">
                        <Card>
                          <CardHeader>ReactJS</CardHeader>
                          <CardBody>
                            <img src="images/react.png" class="img-fluid" />
                          </CardBody>
                        </Card>
                      </Col>
                    </Row>
                  </div>
                
                  {/* First Row End  */}

                  {/* Second Row  */}
                  <div className="card-container">
                    <Row>
                      <Col md="3" sm="6">
                        <Card>
                          <CardHeader>Bootstrap</CardHeader>
                          <CardBody>
                            <img src="images/bootstrap.png" class="img-fluid" />
                          </CardBody>
                        </Card>
                      </Col>

                      <Col md="3" sm="6">
                        <Card>
                          <CardHeader>SASS</CardHeader>
                          <CardBody>
                            <img src="images/sass.png" class="img-fluid" />
                          </CardBody>
                        </Card>
                      </Col>

                      <Col md="3" sm="6">
                        <Card>
                          <CardHeader>Git</CardHeader>
                          <CardBody>
                            <img src="images/git.png" class="img-fluid" />
                          </CardBody>
                        </Card>
                      </Col>

                      <Col md="3" sm="6">
                        <Card>
                          <CardHeader>Responsive</CardHeader>
                          <CardBody>
                            <img
                              src="images/responsive.png"
                              class="img-fluid"
                            />
                          </CardBody>
                        </Card>
                      </Col>
                    </Row>
                  </div>
                  {/* Second Row End  */}

                   {/* Third Row  */}
                   <div className="card-container">
                    <Row>
                      <Col md="3" sm="6">
                        <Card>
                          <CardHeader>Blender</CardHeader>
                          <CardBody>
                            <img src="images/blender.png" class="img-fluid" />
                          </CardBody>
                        </Card>
                      </Col>

                      <Col md="3" sm="6">
                        <Card>
                          <CardHeader>Unity 3D</CardHeader>
                          <CardBody>
                            <img src="images/unity.png" class="img-fluid" />
                          </CardBody>
                        </Card>
                      </Col>

                      <Col md="3" sm="6">
                        <Card>
                          <CardHeader>Photoshop</CardHeader>
                          <CardBody>
                            <img src="images/photoshop.png" class="img-fluid" />
                          </CardBody>
                        </Card>
                      </Col>

                      <Col md="3" sm="6">
                        <Card>
                          <CardHeader>Android Dev</CardHeader>
                          <CardBody>
                            <img
                              src="images/android.png"
                              class="img-fluid"
                            />
                          </CardBody>
                        </Card>
                      </Col>
                    </Row>
                  </div>
                  {/* Third Row End  */}
                  <div className="seperator"></div>
        
      
                </Container>
                </ScrollAnimation>
              </Col>
              
            </Row>
            
          </Container>
          
        </div>
        
      </React.Fragment>
    );
  }
}
