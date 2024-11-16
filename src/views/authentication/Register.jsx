import { useState } from 'react'
import { Container, Row, Col, Form, Button, Card } from 'react-bootstrap'
import { Link, useNavigate } from 'react-router-dom'
import { Envelope, Lock, Person } from "react-bootstrap-icons"
import BaseFooter from "../partials/BaseFooter"
import BaseHeader from "../partials/BaseHeader"

function Register() {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        confirmPassword: '',
        isArtist: false
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

        if (!formData.firstName || !formData.lastName || !formData.email || !formData.password || !formData.confirmPassword) {
            setError('Please fill in all required fields.')
            return
        }
        if (formData.password !== formData.confirmPassword) {
            setError('Passwords do not match.')
            return
        }

        // Here you would typically make an API call to register the user
        console.log('Registration attempt with:', formData)
        // For demo purposes, we'll just log the attempt
        alert('Registration functionality would be implemented here.')

        if (formData.isArtist) {
            navigate('/onboarding')
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
                        <Col md={8} lg={6} xl={5}>
                            <Card className="shadow-lg border-0 rounded-lg overflow-hidden">
                                <Card.Body className="p-5">
                                    <div className="text-center mb-4">
                                        <h2 className="fw-bold mb-2" style={{color: '#ff5100'}}>Join InkedIn</h2>
                                        <p className="text-muted">Create an account to start your tattoo journey</p>
                                    </div>
                                    <Form onSubmit={handleSubmit}>
                                        <Row>
                                            <Col md={6}>
                                                <Form.Group className="mb-4">
                                                    <div className="input-group">
                                                        <span className="input-group-text bg-light border-end-0">
                                                            <Person className="text-muted"/>
                                                        </span>
                                                        <Form.Control
                                                            type="text"
                                                            name="firstName"
                                                            placeholder="First Name"
                                                            value={formData.firstName}
                                                            onChange={handleChange}
                                                            required
                                                            className="border-start-0 bg-light"
                                                        />
                                                    </div>
                                                </Form.Group>
                                            </Col>
                                            <Col md={6}>
                                                <Form.Group className="mb-4">
                                                    <div className="input-group">
                                                        <span className="input-group-text bg-light border-end-0">
                                                            <Person className="text-muted"/>
                                                        </span>
                                                        <Form.Control
                                                            type="text"
                                                            name="lastName"
                                                            placeholder="Last Name"
                                                            value={formData.lastName}
                                                            onChange={handleChange}
                                                            required
                                                            className="border-start-0 bg-light"
                                                        />
                                                    </div>
                                                </Form.Group>
                                            </Col>
                                        </Row>
                                        <Form.Group className="mb-4">
                                            <div className="input-group">
                                                <span className="input-group-text bg-light border-end-0">
                                                    <Envelope className="text-muted"/>
                                                </span>
                                                <Form.Control
                                                    type="email"
                                                    name="email"
                                                    placeholder="Email address"
                                                    value={formData.email}
                                                    onChange={handleChange}
                                                    required
                                                    className="border-start-0 bg-light"
                                                />
                                            </div>
                                        </Form.Group>
                                        <Form.Group className="mb-4">
                                            <div className="input-group">
                                                <span className="input-group-text bg-light border-end-0">
                                                    <Lock className="text-muted"/>
                                                </span>
                                                <Form.Control
                                                    type="password"
                                                    name="password"
                                                    placeholder="Password"
                                                    value={formData.password}
                                                    onChange={handleChange}
                                                    required
                                                    className="border-start-0 bg-light"
                                                />
                                            </div>
                                        </Form.Group>
                                        <Form.Group className="mb-4">
                                            <div className="input-group">
                                                <span className="input-group-text bg-light border-end-0">
                                                    <Lock className="text-muted"/>
                                                </span>
                                                <Form.Control
                                                    type="password"
                                                    name="confirmPassword"
                                                    placeholder="Confirm Password"
                                                    value={formData.confirmPassword}
                                                    onChange={handleChange}
                                                    required
                                                    className="border-start-0 bg-light"
                                                />
                                            </div>
                                        </Form.Group>
                                        <Form.Group className="mb-4">
                                            <Form.Check
                                                type="checkbox"
                                                name="isArtist"
                                                label="I am a tattoo artist"
                                                checked={formData.isArtist}
                                                onChange={handleChange}
                                                className="text-muted"
                                            />
                                        </Form.Group>
                                        <div className="d-grid mb-4">
                                            <Button variant="danger" type="submit" size="lg"
                                                    style={{backgroundColor: '#ff5100', borderColor: '#ff5100'}}>
                                                Create Account
                                            </Button>
                                        </div>
                                    </Form>
                                    <div className="text-center">
                                        <p className="text-muted mb-0">
                                            Already have an account? <Link to="/login" className="text-decoration-none"
                                                                           style={{color: '#ff5100'}}>Sign in</Link>
                                        </p>
                                    </div>
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

export default Register