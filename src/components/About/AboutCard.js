import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
     return (
          <Card className="quote-card-view">
               <Card.Body>
                    <blockquote className="blockquote mb-0">
                         <p style={{ textAlign: "justify" }}>
                              Hi Everyone, I am <span className="purple">Ankit Kumar </span>
                              from <span className="purple"> Bihar, India.</span>
                              <br />I am pursuing my B.Tech(Computer Science) from Graphic Era 
                              Deemed to be University.
                              <br />
                              <br />
                              Apart from Devlopment, some other activities that I love to do!
                         </p>
                         <ul>
                              <li className="about-activity">
                                   <ImPointRight /> Playing Games
                              </li>
                              <li className="about-activity">
                                   <ImPointRight /> Reading Hindi Novels
                              </li>
                              <li className="about-activity">
                                   <ImPointRight /> Travelling
                              </li>
                         </ul>

                         <p style={{ color: "rgb(155 126 172)" }}>
                              "Achieve results, not phases."{" "}
                         </p>
                         <footer className="blockquote-footer">Jeroen de Flander</footer>
                    </blockquote>
               </Card.Body>
          </Card>
     );
}

export default AboutCard;