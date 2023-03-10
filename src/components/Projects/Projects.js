import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
// import BlogCard from "./BlogsCards";
import Particle from "../Particle";

// import leaf from "../../Assets/Projects/leaf.png";
// import emotion from "../../Assets/Projects/emotion.jpeg";
// import editor from "../../Assets/Projects/codeEditor.png";
// import chatify from "../../Assets/Projects/chatify.png";
// import suicide from "../../Assets/Projects/suicide.png";
// import algo from "../../Assets/Projects/algo.png";
// import plant from "../../Assets/Projects/plant.jpeg";

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
              //imgPath={}
              //isBlog={false}
              title="Delivery Platform Start-Up"
              description="Food Express App"
              link="https://github.com/eugene254-ship-it/easy-food-express"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              //imgPath={}
              //isBlog={false}
              //title=""
              //description=""
              //link="https://github.com/eugene254-ship-it/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              //imgPath={}
              //isBlog={false}
              //title=""
              //description=""
              //link="https://github.com/eugene254-ship-it/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              //imgPath={}
              //isBlog={false}
              //title=""
              //description=""
              //link="https://github.com/eugene254-ship-it/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              //imgPath={}
              //isBlog={false}
              //title=""
              //description=""
              //link="https://github.com/eugene254-ship-it/"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
