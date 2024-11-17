import { useState } from 'react'
import { Navbar, Nav, Container, Row, Col, Button, Form, Card } from 'react-bootstrap'
import {Calendar, Palette, Clock, Search, Instagram, Twitter, X} from 'react-bootstrap-icons'
import BaseHeader from "../partials/BaseHeader.jsx";
import BaseFooter from "../partials/BaseFooter.jsx";

function Index(){
    const [email, setEmail] = useState('')

    return (
        <div className="min-vh-100 d-flex flex-column">
            <BaseHeader/>

            <main>
                <section className="bg-dark text-white py-5">
                    <Container>
                        <Row className="align-items-center">
                            <Col md={6} className="mb-4 mb-md-0">
                                <h1 className="display-4 fw-bold mb-4">Your Next Tattoo Experience Starts Here</h1>
                                <p className="lead mb-4">Connect with top tattoo artists, explore unique designs, and
                                    book your appointment seamlessly.</p>
                                <Form className="d-flex align-items-center">
                                    <Form.Control
                                        type="email"
                                        placeholder="Enter your email"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        className="me-2"
                                        style={{height: '40px', width: '70%'}}
                                    />
                                    <Button variant="danger"
                                            style={{backgroundColor: '#ff5100', height: '40px', whiteSpace: 'nowrap'}}>Get
                                        Started</Button>
                                </Form>
                            </Col>
                            <Col md={6}>
                                <img src="/src/assets/images/tattoo_index.jpg" alt="Tattoo artist at work"
                                     className="img-fluid rounded shadow"/>
                            </Col>
                        </Row>
                    </Container>
                </section>

                <section className="py-5 bg-light">
                    <Container className="text-center">
                        <h2 className="mb-4">Find Your Perfect Tattoo Artist</h2>
                        <Form className="d-flex justify-content-center">
                            <Form.Control type="text" placeholder="Search by style or location" className="me-2 w-50"/>
                            <Button variant="danger" style={{backgroundColor: '#ff5100'}}>
                                <Search/>
                            </Button>
                        </Form>
                    </Container>
                </section>

                <section className="py-5 bg-light">
                    <Container>
                        <h2 className="text-center mb-5">Why Choose InkedIn?</h2>
                        <Row>
                            {[
                                {
                                    icon: <Calendar size={48}/>,
                                    title: "Easy Scheduling",
                                    description: "Book appointments with your favorite artists in just a few clicks."
                                },
                                {
                                    icon: <Palette size={48}/>,
                                    title: "artist Portfolios",
                                    description: "Explore diverse styles and find the perfect artist for your vision."
                                },
                                {
                                    icon: <Clock size={48}/>,
                                    title: "Real-time Availability",
                                    description: "See up-to-date schedules and secure your preferred time slot instantly."
                                },
                            ].map((feature, index) => (
                                <Col key={index} md={4} className="mb-4">
                                    <Card className="h-100 text-center shadow-sm">
                                        <Card.Body>
                                            <div className="mb-3 text-danger">{feature.icon}</div>
                                            <Card.Title>{feature.title}</Card.Title>
                                            <Card.Text>{feature.description}</Card.Text>
                                        </Card.Body>
                                    </Card>
                                </Col>
                            ))}
                        </Row>
                    </Container>
                </section>

                <section className="py-5">
                    <Container>
                        <h2 className="text-center mb-5">Explore Popular Tattoo Styles</h2>
                        <Row>
                            {[
                                "Traditional", "Realism", "Watercolor", "Geometric"
                            ].map((style, index) => (
                                <Col key={index} sm={6} md={3} className="mb-4">
                                    <Card className="h-100 shadow-sm">
                                        <Card.Img variant="top" src={`src/assets/images/traditional_tattoo.jpg`}
                                                  alt={`${style} tattoo style`}
                                                  style={{height: '200px', objectFit: 'cover'}}/>
                                        <Card.Body>
                                            <Card.Title className="text-center">{style}</Card.Title>
                                        </Card.Body>
                                    </Card>
                                </Col>
                            ))}
                        </Row>
                    </Container>
                </section>
            </main>

            <BaseFooter/>

        </div>
    )
}

export default Index