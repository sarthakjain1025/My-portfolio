import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import fire from "/Assets/Projects/fire.png";
import Cafe from "/Assets/Projects/cafe.png";
import chat from "/Assets/Projects/chat.png";

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
          {/* NLP Resume Parser */}
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Cafe}
              isBlog={false}
              title="Cafe Management System"
              description="Developed a fully responsive cafe management system using React for the frontend,
Node.js for the backend, and SQL for database management. Implemented RESTful APIs to enable communication
between the frontend and backend, ensuring seamless data flow and functionality.
"
              ghLink="https://github.com/sarthakjain1025/cafe_management"
            />
          </Col>

          {/* Computational Offloading */}
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chat}
              isBlog={false}
              title="Real-Time ChatApp with Active Status"
              description="Built a real-time chatApp for registered users with active status indicators.
Used Socket.io for live messaging and MongoDB for storing user data and chat history. Focused on scalable and lowlatency communication.
"
              ghLink="https://github.com/sarthakjain1025/Chat_App"
            />
          </Col>

          {/* Smart Irrigation */}
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={fire}
              isBlog={false}
              title="Fire-Fighting Bot"
              description="Developed proficiency in Arduino programming, creating a firefighting bot with sensors and
actuators for fire detection and suppression. Gained experience in interfacing hardware components with software
programmed, ensuring effective communication and coordination between the bot’s sensors, motors, and control
systems."
              ghLink="#"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
