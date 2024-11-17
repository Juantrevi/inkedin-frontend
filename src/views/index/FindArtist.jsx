import  { useState } from 'react'
import { Container, Row, Col, Card, Form, InputGroup, Button, Badge } from 'react-bootstrap'
import { Search, GeoAlt, Star, Instagram } from 'react-bootstrap-icons'
import BaseHeader from "../partials/BaseHeader"
import BaseFooter from "../partials/BaseFooter"

function FindArtist(){
    const [searchTerm, setSearchTerm] = useState('')
    const [selectedSpecialty, setSelectedSpecialty] = useState('')

    // Mock data for artists
    const artists = [
        { id: 1, name: "Alice Cooper", location: "New York, NY", rating: 4.8, specialties: ["Traditional", "Japanese"], instagramHandle: "@alicecooper_ink", imageUrl: "src/assets/images/avatar-1.jpg?height=300&width=300" },
        { id: 2, name: "Bob Marley", location: "Los Angeles, CA", rating: 4.9, specialties: ["Watercolor", "Geometric"], instagramHandle: "@bobmarley_tattoos", imageUrl: "src/assets/images/avatar-2.jpg?height=300&width=300" },
        { id: 3, name: "Charlie Puth", location: "Chicago, IL", rating: 4.7, specialties: ["Neo-Traditional", "Blackwork"], instagramHandle: "@charlieputh_art", imageUrl: "src/assets/images/avatar-3.jpg?height=300&width=300" },
        { id: 4, name: "Diana Ross", location: "Miami, FL", rating: 4.9, specialties: ["Realism", "Portraits"], instagramHandle: "@dianaross_realism", imageUrl: "src/assets/images/avatar-1.jpg?height=300&width=300" },
        { id: 5, name: "Elton John", location: "San Francisco, CA", rating: 4.6, specialties: ["Minimalist", "Linework"], instagramHandle: "@eltonjohn_minimal", imageUrl: "src/assets/images/avatar-2.jpg?height=300&width=300" },
        { id: 6, name: "Freddie Mercury", location: "Seattle, WA", rating: 4.8, specialties: ["Old School", "American Traditional"], instagramHandle: "@freddiemercury_oldschool", imageUrl: "src/assets/images/avatar-3.jpg?height=300&width=300" },
    ]

    const specialties = Array.from(new Set(artists.flatMap(artist => artist.specialties)))

    const filteredArtists = artists.filter(artist =>
        (artist.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
            artist.location.toLowerCase().includes(searchTerm.toLowerCase())) &&
        (selectedSpecialty === '' || artist.specialties.includes(selectedSpecialty))
    )

    return (
        <>
            <BaseHeader />
            <Container className="py-5">
                <h1 className="text-center mb-5" style={{color: '#ff5100'}}>Find Your Perfect Tattoo Artist</h1>

                <Card className="shadow mb-5">
                    <Card.Body>
                        <Form>
                            <Row>
                                <Col md={6} className="mb-3">
                                    <InputGroup>
                                        <InputGroup.Text><Search /></InputGroup.Text>
                                        <Form.Control
                                            placeholder="Search by name or location"
                                            value={searchTerm}
                                            onChange={(e) => setSearchTerm(e.target.value)}
                                        />
                                    </InputGroup>
                                </Col>
                                <Col md={6} className="mb-3">
                                    <Form.Select
                                        value={selectedSpecialty}
                                        onChange={(e) => setSelectedSpecialty(e.target.value)}
                                    >
                                        <option value="">All Specialties</option>
                                        {specialties.map((specialty, index) => (
                                            <option key={index} value={specialty}>{specialty}</option>
                                        ))}
                                    </Form.Select>
                                </Col>
                            </Row>
                        </Form>
                    </Card.Body>
                </Card>

                <Row>
                    {filteredArtists.map(artist => (
                        <Col key={artist.id} md={4} className="mb-4">
                            <Card className="h-100 shadow-sm">
                                <Card.Img variant="top" src={artist.imageUrl} />
                                <Card.Body>
                                    <Card.Title>{artist.name}</Card.Title>
                                    <Card.Text>
                                        <GeoAlt className="me-1" />{artist.location}<br />
                                        <Star className="me-1 text-warning" />{artist.rating.toFixed(1)}
                                    </Card.Text>
                                    <div className="mb-2">
                                        {artist.specialties.map((specialty, index) => (
                                            <Badge key={index} bg="secondary" className="me-1 mb-1">{specialty}</Badge>
                                        ))}
                                    </div>
                                    <div className="d-flex justify-content-between align-items-center">
                                        <Button
                                            variant="outline-secondary"
                                            href={`/book-appointment/${artist.id}`}
                                            className="w-100 me-2"
                                        >
                                            Book Appointment
                                        </Button>
                                        <Button
                                            variant="outline-primary"
                                            href={`https://instagram.com/${artist.instagramHandle}`}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            <Instagram />
                                        </Button>
                                    </div>
                                </Card.Body>
                            </Card>
                        </Col>
                    ))}
                </Row>

                {filteredArtists.length === 0 && (
                    <div className="text-center mt-5">
                        <h3>No artists found</h3>
                        <p>Try adjusting your search criteria</p>
                    </div>
                )}
            </Container>
            <BaseFooter />
        </>
    )
}

export default FindArtist