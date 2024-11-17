import { Container, Row, Col, Card, Button } from 'react-bootstrap'
import { Search, Calendar2Check, Palette, CreditCard2Front } from 'react-bootstrap-icons'
import BaseHeader from "../partials/BaseHeader"
import BaseFooter from "../partials/BaseFooter"

function HowItWorks(){
    const steps = [
        {
            icon: <Search className="how-icon mb-3" size={48} />,
            title: "Find Your Artist",
            description: "Search for tattoo artists based on style, location, or recommendations. Browse portfolios to find the perfect match for your vision."
        },
        {
            icon: <Calendar2Check className="how-icon mb-3" size={48} />,
            title: "Book Your Session",
            description: "Choose a convenient time slot from the artist's available schedule. Easily book your appointment with just a few clicks."
        },
        {
            icon: <Palette className="how-icon mb-3" size={48} />,
            title: "Collaborate on Design",
            description: "Communicate directly with your chosen artist to refine your tattoo design. Share ideas and get professional input to create your perfect tattoo."
        },
        {
            icon: <CreditCard2Front className="how-icon mb-3" size={48} />,
            title: "Secure Payment",
            description: "Pay a deposit to confirm your booking. Rest easy with our secure payment system, ensuring a smooth transaction for both you and the artist."
        }
    ]

    return (
        <>
            <BaseHeader />
            <Container className="py-5">
                <Row className="justify-content-center mb-5">
                    <Col md={8} className="text-center">
                        <h1 className="display-4 mb-4" style={{color: '#ff5100'}}>How InkedIn Works</h1>
                        <p className="lead">
                            InkedIn makes it easy to find, book, and collaborate with top tattoo artists.
                            Here's how you can get started on your tattoo journey:
                        </p>
                    </Col>
                </Row>

                <Row className="mb-5">
                    {steps.map((step, index) => (
                        <Col key={index} md={6} lg={3} className="mb-4">
                            <Card className="h-100 shadow-sm border-0">
                                <Card.Body className="d-flex flex-column align-items-center text-center">
                                    {step.icon}
                                    <Card.Title className="mb-3">{step.title}</Card.Title>
                                    <Card.Text>{step.description}</Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                    ))}
                </Row>

                <Row className="justify-content-center">
                    <Col md={8} lg={6} className="text-center">
                        <Card className="shadow border-0" style={{backgroundColor: '#f8f9fa'}}>
                            <Card.Body>
                                <h2 className="mb-4">Ready to Get Inked?</h2>
                                <p className="mb-4">
                                    Join InkedIn today and start your journey towards your next amazing tattoo.
                                    Our platform connects you with talented artists who can bring your vision to life.
                                </p>
                                <Button
                                    href="/find-artist"
                                    size="lg"
                                    style={{backgroundColor: '#ff5100', borderColor: '#ff5100'}}
                                >
                                    Find Your Artist Now
                                </Button>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
            <BaseFooter />
        </>
    )
}

export default HowItWorks