import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
	return (
		<Card className="quote-card-view">
			<Card.Body>
				<blockquote className="blockquote mb-0">
					<p style={{ textAlign: "justify" }}>
						Hello Everyone, I am <span className="purple">Sarthak Jain </span>
						from <span className="purple"> Chandigarh, India.</span>
						<br />
						I am currently an undergrad student and Vellore Institute of Technology, Chennai.
						<br />
						I am persuing B.Tech in Computer Science with specialization in
						Cyber Physical Systems.
						<br />
						<br />
						Apart from coding, some other activities that I love to do!
					</p>
					<ul>
						<li className="about-activity">
							<ImPointRight /> Playing Table Tennis
						</li>
						<li className="about-activity">
							<ImPointRight /> Poetry
						</li>
						<li className="about-activity">
							<ImPointRight /> Travelling and Riding
						</li>
					</ul>

					<p style={{ color: "rgb(155 126 172)" }}>
						"The future belongs to those who believe in the beauty of their
						dreams!"{" "}
					</p>
					<footer className="blockquote-footer">Sarthak</footer>
				</blockquote>
			</Card.Body>
		</Card>
	);
}

export default AboutCard;
