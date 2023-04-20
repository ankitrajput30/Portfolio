import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import editor from "../../Assets/Projects/codeEditor.png";
import chatify from "../../Assets/Projects/chatify.png";
import bitsOfCode from "../../Assets/Projects/blog.png";

function Projects() {
     return (
          <Container fluid className="project-section">
               <Particle />
               <Container>
                    <h1 className="project-heading">
                         My Recent <strong className="purple">Works </strong>
                    </h1>
                    <p style={{ color: "white" }}>
                         Here are a few projects I've worked on recently.
                    </p>
                    <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
                         <Col md={4} className="project-card">
                              <ProjectCard
                                   imgPath={chatify}
                                   isBlog={false}
                                   title="iNoteBook"
                                   description="Your notes on cloud. It is a React based Notes app which have Auhentication and option to Add, Delete, Share, Edit your own Notes"
                                   ghLink="https://github.com/ankitrajput30/iNoteBook-React"
                              />
                         </Col>

                         <Col md={4} className="project-card">
                              <ProjectCard
                                   imgPath={bitsOfCode}
                                   isBlog={false}
                                   title="iChats"
                                   description="It is a Online real time Chat app which is build by Usign Socket.io and Node and React. It has Room option in which two or more person can join in same room and chat with each others"
                                   ghLink="https://github.com/ankitrajput30/Chats-Socket.io"
                              />
                         </Col>

                         <Col md={4} className="project-card">
                              <ProjectCard
                                   imgPath={editor}
                                   isBlog={false}
                                   title="TaazaaNews"
                                   description="TaazaaNews is a news app which can be used to grab daily news bites. If you are intrested in news, weather, politics and sports news, TaazaaNews is for you!"
                                   ghLink="https://github.com/ankitrajput30/TaazaaNews"
                              />
                         </Col>

                         <Col md={4} className="project-card">
                              <ProjectCard
                                   imgPath={chatify}
                                   isBlog={false}
                                   title="TextUtils"
                                   description="TextUtils is a word counter and a character counter which can be used to manipulate your text the way that you want. It is build by Using React only."
                                   ghLink="https://github.com/ankitrajput30/Textutils"
                              />
                         </Col>

                         <Col md={4} className="project-card">
                              <ProjectCard
                                   imgPath={bitsOfCode}
                                   isBlog={false}
                                   title="Restro Menu Card"
                                   description="It is basically a  Menu Card App which have different menu items based on User's choice. It is build by Using React only and It's a Very Basic One."
                                   ghLink="https://github.com/ankitrajput30/React_Basic_Projects"
                              />
                         </Col>

                         <Col md={4} className="project-card">
                              <ProjectCard
                                   imgPath={editor}
                                   isBlog={false}
                                   title="Music-App"
                                   description="A simple Music App that plays and pause only one Hardcoded Music. It's a Basic project based on Android and JAVA and I will try to enhance it more."
                                   ghLink="https://github.com/ankitrajput30/Music-App"
                              />
                         </Col>
                    </Row>
               </Container>
          </Container>
     );
}

export default Projects;