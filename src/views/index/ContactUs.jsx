import { useState } from 'react'
import { Container, Row, Col, Card, Form, Button, Alert } from 'react-bootstrap'
import { Envelope } from 'react-bootstrap-icons'
import BaseHeader from "../partials/BaseHeader"
import BaseFooter from "../partials/BaseFooter"

function ContactUs(){
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    })
    const [submitted, setSubmitted] = useState(false)

    const handleChange = (e) => {
        const { name, value } = e.target
        setFormData(prevData => ({
            ...prevData,
            [name]: value
        }))
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        // Here you would typically send the form data to your backend
        console.log('Form submitted:', formData)
        setSubmitted(true)
        // Reset form after submission
        setFormData({ name: '', email: '', subject: '', message: '' })
    }

    return (
        <>
            <BaseHeader />
            <Container className="py-5">
                <Row className="justify-content-center mb-5">
                    <Col md={8} className="text-center">
                        <h1 className="display-4 mb-4" style={{color: '#ff5100'}}>Contact Us</h1>
                        <p className="lead">
                            Have a question or need assistance? We're here to help. Fill out the form below or use our contact information to get in touch.
                        </p>
                    </Col>
                </Row>

                <Row>
                    <Col md={8}>
                        <Card className="shadow border-0">
                            <Card.Body>
                                {submitted ? (
                                    <Alert variant="success">
                                        Thank you for your message. We'll get back to you soon!
                                    </Alert>
                                ) : (
                                    <Form onSubmit={handleSubmit}>
                                        <Form.Group className="mb-3">
                                            <Form.Label>Name</Form.Label>
                                            <Form.Control
                                                type="text"
                                                name="name"
                                                value={formData.name}
                                                onChange={handleChange}
                                                required
                                            />
                                        </Form.Group>
                                        <Form.Group className="mb-3">
                                            <Form.Label>Email</Form.Label>
                                            <Form.Control
                                                type="email"
                                                name="email"
                                                value={formData.email}
                                                onChange={handleChange}
                                                required
                                            />
                                        </Form.Group>
                                        <Form.Group className="mb-3">
                                            <Form.Label>Subject</Form.Label>
                                            <Form.Control
                                                type="text"
                                                name="subject"
                                                value={formData.subject}
                                                onChange={handleChange}
                                                required
                                            />
                                        </Form.Group>
                                        <Form.Group className="mb-3">
                                            <Form.Label>Message</Form.Label>
                                            <Form.Control
                                                as="textarea"
                                                rows={5}
                                                name="message"
                                                value={formData.message}
                                                onChange={handleChange}
                                                required
                                            />
                                        </Form.Group>
                                        <Button
                                            type="submit"
                                            size="lg"
                                            className="w-100"
                                            style={{backgroundColor: '#ff5100', borderColor: '#ff5100'}}
                                        >
                                            Send Message
                                        </Button>
                                    </Form>
                                )}
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md={4}>
                        <Card className="shadow border-0 h-100">
                            <Card.Body>
                                <h2 className="h4 mb-4">Contact Information</h2>
                                <p className="mb-4">
                                    <Envelope className="me-2" />
                                    Email: support@inkedin.com
                                </p>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
            <BaseFooter />
        </>
    )
}

export default ContactUs