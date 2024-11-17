import React, { useState } from 'react'
import { Container, Row, Col, Card, Accordion, Button } from 'react-bootstrap'
import { QuestionCircle, ChevronDown, ChevronUp } from 'react-bootstrap-icons'
import BaseHeader from "../partials/BaseHeader"
import BaseFooter from "../partials/BaseFooter"

function FAQ (){
    const [activeKey, setActiveKey] = useState(null)

    const faqItems = [
        {
            question: "How do I book an appointment with a tattoo artist?",
            answer: "To book an appointment, first find an artist you like using our search feature. Then, visit their profile and click on 'Book Appointment'. You'll be able to see their available time slots and choose one that works for you. After selecting a time, you'll need to provide some basic information and pay a deposit to confirm your booking."
        },
        {
            question: "What should I do to prepare for my tattoo appointment?",
            answer: "To prepare for your appointment: 1) Stay hydrated and avoid alcohol for 24 hours before. 2) Eat a good meal beforehand. 3) Wear comfortable, loose clothing that allows easy access to the area being tattooed. 4) Bring any reference images or ideas you want to discuss with the artist. 5) Get a good night's sleep. If you have any specific concerns, you can always message your artist through our platform for personalized advice."
        },
        {
            question: "How does the payment process work?",
            answer: "When you book an appointment, you'll be required to pay a deposit to secure your slot. This deposit is typically a percentage of the estimated total cost. The remaining balance is paid directly to the artist at the end of your session. All online payments are processed securely through our platform to protect both you and the artist."
        },
        {
            question: "Can I cancel or reschedule my appointment?",
            answer: "Yes, you can cancel or reschedule your appointment, but please do so as early as possible. Each artist has their own cancellation policy, which you can find on their profile. Generally, if you cancel with less than 48 hours notice, you may forfeit your deposit. To reschedule, contact your artist directly through our messaging system."
        },
        {
            question: "How can I become a tattoo artist on InkedIn?",
            answer: "We're always looking for talented artists to join our platform! To become an artist on InkedIn, click on the 'For Artists' link in the footer and fill out the application form. You'll need to provide information about your experience, style, and a portfolio of your work. Our team will review your application and get back to you within 5-7 business days."
        },
        {
            question: "Is my personal information safe on InkedIn?",
            answer: "Absolutely. We take data privacy very seriously. All personal information is encrypted and stored securely. We never share your data with third parties without your explicit consent. You can review our full privacy policy for more details on how we protect and use your information."
        }
    ]

    return (
        <>
            <BaseHeader />
            <Container className="py-5">
                <Row className="justify-content-center mb-5">
                    <Col md={8} className="text-center">
                        <h1 className="display-4 mb-4" style={{color: '#ff5100'}}>Frequently Asked Questions</h1>
                        <p className="lead">
                            Find answers to common questions about using InkedIn, booking appointments, and more.
                        </p>
                    </Col>
                </Row>

                <Row className="justify-content-center">
                    <Col md={8}>
                        <Card className="shadow border-0">
                            <Card.Body>
                                <Accordion activeKey={activeKey} onSelect={(key) => setActiveKey(key)}>
                                    {faqItems.map((item, index) => (
                                        <Accordion.Item key={index} eventKey={index.toString()}>
                                            <Accordion.Header>
                                                <QuestionCircle className="me-2" />
                                                {item.question}
                                            </Accordion.Header>
                                            <Accordion.Body>
                                                {item.answer}
                                            </Accordion.Body>
                                        </Accordion.Item>
                                    ))}
                                </Accordion>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>

                <Row className="justify-content-center mt-5">
                    <Col md={8} className="text-center">
                        <h2 className="mb-4">Still have questions?</h2>
                        <p className="mb-4">
                            If you couldn't find the answer you were looking for, our support team is here to help.
                        </p>
                        <Button
                            href="/contact-us"
                            size="lg"
                            style={{backgroundColor: '#ff5100', borderColor: '#ff5100'}}
                        >
                            Contact Support
                        </Button>
                    </Col>
                </Row>
            </Container>
            <BaseFooter />
        </>
    )
}

export default FAQ