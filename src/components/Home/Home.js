import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import pdf from "../../Assets/../Assets/AnkitKumar.pdf";
import Button from "react-bootstrap/Button";
import { AiOutlineDownload } from "react-icons/ai";
import homeLogo from "../../Assets/home-main.svg";
import Particle from "../Particle";
import Home2 from "./Home2";
import Type from "./Type";

function Home() {

     return (
          <section>
               <Container fluid className="home-section" id="home">
                    <Particle />
                    <Container className="home-content">
                         <Row>
                              <Col md={7} className="home-header">
                                   <h1 style={{ paddingBottom: 15 }} className="heading">
                                        Hi There!{" "}
                                        <span className="wave" role="img" aria-labelledby="wave">
                                             👋🏻
                                        </span>
                                   </h1>

                                   <h1 className="heading-name">
                                        I'M
                                        <strong className="main-name"> ANKIT KUMAR</strong>
                                   </h1>

                                   <div style={{ padding: 50, textAlign: "left" }}>
                                        <Type />
                                   </div>

                                   <Row style={{ justifyContent: "center", position: "relative" }}>
                                        <Button type="submit"
                                             variant="primary"
                                             href={pdf}
                                             target="_blank"
                                             style={{ maxWidth: "250px" }}>
                                             <AiOutlineDownload />
                                             &nbsp;Download CV
                                        </Button>
                                   </Row>

                              </Col>

                              <Col md={5} style={{ paddingBottom: 20 }}>
                                   <img
                                        src={homeLogo}
                                        alt="home pic"
                                        className="img-fluid"
                                        style={{ maxHeight: "450px" }}
                                   />
                              </Col>
                         </Row>
                    </Container>
               </Container>
               <Home2 />
          </section>
     );
}

export default Home;