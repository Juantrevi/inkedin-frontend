import { useState } from 'react'
import { Container, Row, Col, Form, Button, Card,  } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import {Envelope, Facebook, Google, Lock} from "react-bootstrap-icons";
import BaseFooter from "../partials/BaseFooter.jsx";
import BaseHeader from "../partials/BaseHeader.jsx";

function Login() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()
        setError('')

        if (!email || !password) {
            setError('Please enter both email and password.')
            return
        }

        // Here you would typically make an API call to authenticate the user
        console.log('Login attempt with:', { email, password })
        // For demo purposes, we'll just log the attempt
        alert('Login functionality would be implemented here.')
    }

    return (
        <>
            <BaseHeader/>
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
                                    <h2 className="fw-bold mb-2" style={{color: '#ff5100'}}>Welcome Back to InkedIn</h2>
                                    <p className="text-muted">Sign in to continue your tattoo journey</p>
                                </div>
                                <Form onSubmit={handleSubmit}>
                                    <Form.Group className="mb-4">
                                        <div className="input-group">
                      <span className="input-group-text bg-light border-end-0">
                        <Envelope className="text-muted"/>
                      </span>
                                            <Form.Control
                                                type="email"
                                                placeholder="Email address"
                                                value={email}
                                                onChange={(e) => setEmail(e.target.value)}
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
                                                placeholder="Password"
                                                value={password}
                                                onChange={(e) => setPassword(e.target.value)}
                                                required
                                                className="border-start-0 bg-light"
                                            />
                                        </div>
                                    </Form.Group>
                                    <Form.Group className="mb-4 d-flex justify-content-between align-items-center">
                                        <Form.Check
                                            type="checkbox"
                                            label="Remember me"
                                            className="text-muted"
                                        />
                                        <Link to="/forgot-password" className="text-decoration-none"
                                              style={{color: '#ff5100'}}>Forgot password?</Link>
                                    </Form.Group>
                                    <div className="d-grid mb-4">
                                        <Button variant="danger" type="submit" size="lg"
                                                style={{backgroundColor: '#ff5100', borderColor: '#ff5100'}}>
                                            Sign In
                                        </Button>
                                    </div>
                                </Form>
                                <div className="text-center">
                                    <p className="text-muted mb-0">
                                        Don't have an account? <Link to="/signup" className="text-decoration-none"
                                                                     style={{color: '#ff5100'}}>Sign up now</Link>
                                    </p>
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </div>
            <BaseFooter/>
        </>
    )
}

export default Login