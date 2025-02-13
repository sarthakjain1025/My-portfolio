import React from "react";
import { Row, Col, Card, Button } from "react-bootstrap";

function Github() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
      <h1 className="project-heading" style={{ paddingBottom: "20px" }}>
        Extra <strong className="purple">Curricular Activities</strong>
      </h1>
      <Col md={4} className="project-card">
        <Card className="project-card-view">
          <Card.Img variant="top" src="/Assets/Projects/hack.png" alt="card-img" className="project-card-img" />
          <Card.Body>
            <Card.Text style={{ textAlign: "justify" }}>
              Secured 11th position out of 100 teams in ”Password,” a Linux Club hackathon focused on capturing flags and
              earning points.
            </Card.Text>
          </Card.Body>
        </Card>
      </Col>
      <Col md={4} className="project-card">
        <Card className="project-card-view">
          <Card.Img variant="top" src="/Assets/Projects/hla.png" alt="card-img" className="project-card-img" />
          <Card.Body>
            <Card.Text style={{ textAlign: "justify" }}>
              Content Head of the Hindi Literature Club at VIT Chennai.
            </Card.Text>
          </Card.Body>
        </Card>
      </Col>
      <Col md={4} className="project-card">
        <Card className="project-card-view">
          <Card.Img variant="top" src="/Assets/Projects/sports.png" alt="card-img" className="project-card-img" />
          <Card.Body>
            <Card.Text style={{ textAlign: "justify" }}>
              Competed in Badminton and Table Tennis at the district level in Haryana.
            </Card.Text>
          </Card.Body>
        </Card>
      </Col>
    </Row>
  );
}

export default Github;
