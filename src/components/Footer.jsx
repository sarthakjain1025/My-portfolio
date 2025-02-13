import React from "react";
import { Container, Row, Col } from "react-bootstrap";
// import logo from "/Assets/logo.png";
import {
	AiFillGithub,
	AiOutlineTwitter,
	AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Footer() {
	return (
		<Container fluid className="footer">
			<Row>
				<Col md="4" className="footer-copywright">
					<h3>Designed and Developed with 💖</h3>
				</Col>
				<Col md="4" className="footer-copywright">
					<h3>
						{/* <img
							src={logo}
							className="img-fluid logo"
							alt="brand"
							style={{ paddingRight: "5px" }}
						/> */}
						Sarthak Jain
					</h3>
				</Col>
				<Col md="4" className="footer-body">
					<ul className="footer-icons">
						<li className="social-icons">
							<a
								href="https://github.com/sarthakjain1025"
								style={{ color: "white" }}
								target="_blank"
								rel="noopener noreferrer">
								<AiFillGithub />
							</a>
						</li>
						<li className="social-icons">
							<a
								href="https://www.linkedin.com/in/sarthak-jain-49a26825b"
								style={{ color: "white" }}
								target="_blank"
								rel="noopener noreferrer">
								<FaLinkedinIn />
							</a>
						</li>
						<li className="social-icons">
							<a
								href="https://www.instagram.com/sarthakj_206?igsh=ZjVudG9qbjJiYTFn"
								style={{ color: "white" }}
								target="_blank"
								rel="noopener noreferrer">
								<AiFillInstagram />
							</a>
						</li>
					</ul>
				</Col>
			</Row>
		</Container>
	);
}

export default Footer;
