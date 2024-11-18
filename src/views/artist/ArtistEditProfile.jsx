import React, { useState } from 'react'
import { Container, Row, Col, Form, Button, Card, Image } from 'react-bootstrap'
import { Instagram, Linkedin, Twitter, CurrencyDollar, Person, Upload } from 'react-bootstrap-icons'
import BaseHeader from "../partials/BaseHeader"
import BaseFooter from "../partials/BaseFooter"

function ArtistEditProfile(){
    const [formData, setFormData] = useState({
        firstName: 'John',
        lastName: 'Doe',
        username: 'johndoe_tattoo',
        profilePhoto: '/placeholder.svg?height=200&width=200',
        instagram: 'johndoe_tattoo',
        linkedin: 'john-doe-tattoo',
        twitter: 'johndoe_tattoo',
        mercadopagoAlias: 'johndoe.tattoo'
    })

    const handleChange = (e) => {
        const { name, value } = e.target
        setFormData(prevData => ({
            ...prevData,
            [name]: value
        }))
    }

    const handleFileChange = (e) => {
        const file = e.target.files?.[0]
        if (file) {
            const reader = new FileReader()
            reader.onloadend = () => {
                setFormData(prevData => ({
                    ...prevData,
                    profilePhoto: reader.result
                }))
            }
            reader.readAsDataURL(file)
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        // Here you would typically make an API call to update the profile
        console.log('Profile update with:', formData)
        alert('Profile updated successfully!')
    }

    return (
        <>
            <BaseHeader />
            <Container className="py-5">
                <Row className="justify-content-center">
                    <Col md={8} lg={6}>
                        <Card className="shadow-lg border-0 rounded-lg">
                            <Card.Header className="bg-dark text-white text-center py-4">
                                <h2 className="fw-bold mb-0">Edit Your Profile</h2>
                            </Card.Header>
                            <Card.Body className="p-5">
                                <Form onSubmit={handleSubmit}>
                                    <div className="text-center mb-4">
                                        <Image
                                            src='/images/avatar-1.jpg'
                                            roundedCircle
                                            width={150}
                                            height={150}
                                            className="mb-3"
                                        />
                                        <div>
                                            <Form.Group controlId="profilePhoto" className="mb-3">
                                                <Form.Label className="btn btn-outline-primary">
                                                    <Upload className="me-2" />
                                                    Change Profile Photo
                                                    <Form.Control
                                                        type="file"
                                                        hidden
                                                        onChange={handleFileChange}
                                                        accept="image/*"
                                                    />
                                                </Form.Label>
                                            </Form.Group>
                                        </div>
                                    </div>

                                    <Row>
                                        <Col md={6}>
                                            <Form.Group className="mb-3">
                                                <Form.Label>First Name</Form.Label>
                                                <Form.Control
                                                    type="text"
                                                    name="firstName"
                                                    value={formData.firstName}
                                                    onChange={handleChange}
                                                    required
                                                />
                                            </Form.Group>
                                        </Col>
                                        <Col md={6}>
                                            <Form.Group className="mb-3">
                                                <Form.Label>Last Name</Form.Label>
                                                <Form.Control
                                                    type="text"
                                                    name="lastName"
                                                    value={formData.lastName}
                                                    onChange={handleChange}
                                                    required
                                                />
                                            </Form.Group>
                                        </Col>
                                    </Row>

                                    <Form.Group className="mb-3">
                                        <Form.Label>Username</Form.Label>
                                        <Form.Control
                                            type="text"
                                            name="username"
                                            value={formData.username}
                                            onChange={handleChange}
                                            required
                                        />
                                    </Form.Group>

                                    <Form.Group className="mb-3">
                                        <Form.Label>
                                            <Instagram className="me-2" />
                                            Instagram
                                        </Form.Label>
                                        <Form.Control
                                            type="text"
                                            name="instagram"
                                            value={formData.instagram}
                                            onChange={handleChange}
                                            placeholder="Your Instagram username"
                                        />
                                    </Form.Group>

                                    <Form.Group className="mb-3">
                                        <Form.Label>
                                            <Linkedin className="me-2" />
                                            LinkedIn
                                        </Form.Label>
                                        <Form.Control
                                            type="text"
                                            name="linkedin"
                                            value={formData.linkedin}
                                            onChange={handleChange}
                                            placeholder="Your LinkedIn profile"
                                        />
                                    </Form.Group>

                                    <Form.Group className="mb-3">
                                        <Form.Label>
                                            <Twitter className="me-2" />
                                            X (Former Twitter)
                                        </Form.Label>
                                        <Form.Control
                                            type="text"
                                            name="twitter"
                                            value={formData.twitter}
                                            onChange={handleChange}
                                            placeholder="Your X (Twitter) username"
                                        />
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

                                    <div className="d-grid">
                                        <Button
                                            variant="danger"
                                            type="submit"
                                            size="lg"
                                            style={{backgroundColor: '#ff5100', borderColor: '#ff5100'}}
                                        >
                                            Update Profile
                                        </Button>
                                    </div>
                                </Form>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
            <BaseFooter />
        </>
    )
}

export default ArtistEditProfile