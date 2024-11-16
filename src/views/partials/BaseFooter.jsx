import {Col, Container, Nav, Row} from "react-bootstrap";
import {Instagram, X} from "react-bootstrap-icons";

function BaseFooter () {
  return (
      <footer className="bg-dark text-white py-5 mt-auto">
          <Container>
              <Row>
                  <Col md={3} className="mb-4 mb-md-0">
                      <h5 className="fw-bold mb-3">InkedIn</h5>
                      <p className="text-white">Connecting artists and enthusiasts in the world of tattoos.</p>
                  </Col>
                  <Col md={3} className="mb-4 mb-md-0">
                      <h5 className="fw-bold mb-3">Quick Links</h5>
                      <Nav className="flex-column">
                          <Nav.Link href="#" className="text-white p-0 mb-2">Home</Nav.Link>
                          <Nav.Link href="#" className="text-white p-0 mb-2">Find Artists</Nav.Link>
                          <Nav.Link href="#" className="text-white p-0 mb-2">How It Works</Nav.Link>
                      </Nav>
                  </Col>
                  <Col md={3} className="mb-4 mb-md-0">
                      <h5 className="fw-bold mb-3">Support</h5>
                      <Nav className="flex-column">
                          <Nav.Link href="#" className="text-white p-0 mb-2">FAQ</Nav.Link>
                          <Nav.Link href="#" className="text-white p-0 mb-2">Contact Us</Nav.Link>
                          <Nav.Link href="#" className="text-white p-0 mb-2">Privacy Policy</Nav.Link>
                      </Nav>
                  </Col>
                  <Col md={3}>
                      <h5 className="fw-bold mb-3">Follow Us</h5>
                      <a href="#" className="text-white me-2">
                          <Instagram size={24}/>
                      </a>
                      <a href="#" className="text-white me-2">
                          <X size={24}/>
                      </a>
                      {/* Add more social media icons as needed */}
                  </Col>
              </Row>
              <hr className="my-4"/>
              <p className="text-center text-white mb-0">&copy; 2024 InkedIn. All rights reserved.</p>
          </Container>
      </footer>
  );
};

export default BaseFooter;