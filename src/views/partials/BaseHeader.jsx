import { Navbar, Nav, Container, Button, Dropdown } from 'react-bootstrap';

function BaseHeader() {
    return (
        <Navbar bg="dark" variant="dark" expand="lg" className="py-3 sticky-top">
            <Container>
                <Navbar.Brand href="/" className="fs-4 fw-bold">
                    <img
                        src="/favicon.svg"
                        width="30"
                        height="30"
                        className="d-inline-block align-top me-2"
                        alt="InkedIn logo"
                    />
                    InkedIn
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto align-items-center">
                        <Nav.Link href="#" className="text-white">Find Artists</Nav.Link>
                        <Nav.Link href="#" className="text-white">How It Works</Nav.Link>
                        <Button variant="outline-light" href={'/login'} className="ms-2">Log In</Button>
                        <Button variant="danger" href={'/register'} className="ms-2" style={{backgroundColor: '#ff5100'}}>Sign Up</Button>
                        <Dropdown align="end" className="ms-3">
                            <Dropdown.Toggle variant="outline-light" id="dropdown-basic" className="d-flex align-items-center">
                                <img
                                    src="src/assets/images/avatar-1.jpg"
                                    width="30"
                                    height="30"
                                    className="rounded-circle me-2"
                                    alt="Profile"
                                />
                            </Dropdown.Toggle>
                            <Dropdown.Menu>
                                <Dropdown.Item href="/Artist-edit-profile">Edit Profile</Dropdown.Item>
                                <Dropdown.Item href="/logout">Log Out</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default BaseHeader;