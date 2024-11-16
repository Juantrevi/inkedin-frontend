import React, { useState } from 'react'
import { Container, Row, Col, Form, Button, Card, Alert } from 'react-bootstrap'
import { Link, useNavigate } from 'react-router-dom'
import { GeoAlt, Instagram, Twitter, Linkedin, Calendar, CurrencyDollar } from 'react-bootstrap-icons'
import BaseHeader from "../partials/BaseHeader"
import BaseFooter from "../partials/BaseFooter"

function ArtistOnboarding() {
    const [step, setStep] = useState(1)
    const [formData, setFormData] = useState({
        country: '',
        city: '',
        neighborhood: '',
        instagram: '',
        twitter: '',
        linkedin: '',
        agreeToTerms: false
    })
    const [error, setError] = useState('')
    const navigate = useNavigate()

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target
        setFormData(prevData => ({
            ...prevData,
            [name]: type === 'checkbox' ? checked : value
        }))
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        setError('')

        if (step === 1 && (!formData.country || !formData.city || !formData.neighborhood)) {
            setError('Please fill in all location fields.')
            return
        }

        if (step === 2 && !formData.instagram) {
            setError('Instagram is required for profile population.')
            return
        }

        if (step === 3 && !formData.agreeToTerms) {
            setError('You must agree to the terms to continue.')
            return
        }

        if (step < 3) {
            setStep(step + 1)
        } else {
            // Here you would typically make an API call to save the artist's information
            console.log('artist onboarding completed with:', formData)
            alert('Onboarding completed! Redirecting to dashboard...')
            navigate('/artist-home')
        }
    }

    const renderStep = () => {
        switch (step) {
            case 1:
                return (
                    <>
                        <h3 className="mb-4">Where are you located?</h3>
                        <Form.Group className="mb-3">
                            <Form.Label>Country</Form.Label>
                            <Form.Control
                                type="text"
                                name="country"
                                value={formData.country}
                                onChange={handleChange}
                                required
                            />
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>City</Form.Label>
                            <Form.Control
                                type="text"
                                name="city"
                                value={formData.city}
                                onChange={handleChange}
                                required
                            />
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>Neighborhood</Form.Label>
                            <Form.Control
                                type="text"
                                name="neighborhood"
                                value={formData.neighborhood}
                                onChange={handleChange}
                                required
                            />
                        </Form.Group>
                    </>
                )
            case 2:
                return (
                    <>
                        <h3 className="mb-4">Connect Your Social Media</h3>
                        <Form.Group className="mb-3">
                            <Form.Label>Instagram (required)</Form.Label>
                            <div className="input-group">
                                <span className="input-group-text"><Instagram /></span>
                                <Form.Control
                                    type="text"
                                    name="instagram"
                                    value={formData.instagram}
                                    onChange={handleChange}
                                    required
                                    placeholder="@yourusername"
                                />
                            </div>
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>X (Twitter)</Form.Label>
                            <div className="input-group">
                                <span className="input-group-text"><Twitter /></span>
                                <Form.Control
                                    type="text"
                                    name="twitter"
                                    value={formData.twitter}
                                    onChange={handleChange}
                                    placeholder="@yourusername"
                                />
                            </div>
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>LinkedIn</Form.Label>
                            <div className="input-group">
                                <span className="input-group-text"><Linkedin /></span>
                                <Form.Control
                                    type="text"
                                    name="linkedin"
                                    value={formData.linkedin}
                                    onChange={handleChange}
                                    placeholder="linkedin.com/in/yourusername"
                                />
                            </div>
                        </Form.Group>
                        <Form.Group className="mb-4">
                            <Form.Label>
                                <CurrencyDollar className="me-2" />
                                MercadoPago Alias
                            </Form.Label>
                            <Form.Control
                                type="text"
                                name="mercadopagoAlias"
                                value={formData.mercadopagoAlias}
                                onChange={handleChange}
                                required
                                placeholder="Your MercadoPago alias"
                            />
                        </Form.Group>
                        <Alert variant="info">
                            <Instagram className="me-2" />
                            Your Instagram photos will be used to populate your profile.
                        </Alert>
                    </>
                )
            case 3:
                return (
                    <>
                        <h3 className="mb-4">Connect Google Calendar</h3>
                        <p>To manage your appointments, we need to connect to your Google Calendar.</p>
                        <Button variant="outline-primary" className="mb-3">
                            <Calendar className="me-2" />
                            Connect Google Calendar
                        </Button>
                        <Alert variant="info">
                            This will allow InkedIn to manage your availability and bookings.
                        </Alert>
                        <Form.Group className="mb-3">
                            <Form.Check
                                type="checkbox"
                                name="agreeToTerms"
                                label="I agree to the terms and conditions"
                                checked={formData.agreeToTerms}
                                onChange={handleChange}
                                required
                            />
                        </Form.Group>
                    </>
                )
        }
    }

    return (
        <>
            <BaseHeader />
            <div className="min-vh-100 d-flex align-items-center" style={{
                backgroundImage: 'url("/placeholder.svg?height=1080&width=1920")',
                backgroundSize: 'cover',
                backgroundPosition: 'center'
            }}>
                <Container>
                    <Row className="justify-content-center">
                        <Col md={8} lg={6}>
                            <Card className="shadow-lg border-0 rounded-lg overflow-hidden">
                                <Card.Body className="p-5">
                                    <div className="text-center mb-4">
                                        <h2 className="fw-bold" style={{ color: '#ff5100' }}>Artist Onboarding</h2>
                                        <p className="text-muted">Step {step} of 3</p>
                                    </div>
                                    {error && <Alert variant="danger">{error}</Alert>}
                                    <Form onSubmit={handleSubmit}>
                                        {renderStep()}
                                        <div className="d-flex justify-content-between">
                                            {step > 1 && (
                                                <Button variant="outline-secondary" onClick={() => setStep(step - 1)}>
                                                    Back
                                                </Button>
                                            )}
                                            <Button
                                                variant="danger"
                                                type="submit"
                                                className="ms-auto"
                                                style={{ backgroundColor: '#ff5100', borderColor: '#ff5100' }}
                                            >
                                                {step === 3 ? 'Complete' : 'Next'}
                                            </Button>
                                        </div>
                                    </Form>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </Container>
            </div>
            <BaseFooter />
        </>
    )
}

export default ArtistOnboarding