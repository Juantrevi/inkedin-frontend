import React, { useState } from 'react'
import { Container, Row, Col, Card, Form, InputGroup, Button, Badge } from 'react-bootstrap'
import { Search, GeoAlt, Star, Calendar } from 'react-bootstrap-icons'
import BaseHeader from "../partials/BaseHeader"
import BaseFooter from "../partials/BaseFooter"

// Mock data for artists
const artists = [
    { id: 1, name: "Alice Cooper", nickname: "InkMaster", city: "New York", rating: 4.8, specialties: ["Traditional", "Japanese"], imageUrl: "src/assets/images/avatar-1.jpg?height=300&width=300" },
    { id: 2, name: "Bob Marley", nickname: "ColorWizard", city: "Los Angeles", rating: 4.9, specialties: ["Watercolor", "Geometric"], imageUrl: "src/assets/images/avatar-2.jpg?height=300&width=300" },
    { id: 3, name: "Charlie Puth", nickname: "NeoTradKing", city: "Chicago", rating: 4.7, specialties: ["Neo-Traditional", "Blackwork"], imageUrl: "src/assets/images/avatar-3.jpg?height=300&width=300" },
    { id: 4, name: "Diana Ross", nickname: "RealisticQueen", city: "Miami", rating: 4.9, specialties: ["Realism", "Portraits"], imageUrl: "src/assets/images/avatar-1.jpg?height=300&width=300" },
    { id: 5, name: "Elton John", nickname: "MinimalistMaster", city: "San Francisco", rating: 4.6, specialties: ["Minimalist", "Linework"], imageUrl: "src/assets/images/avatar-2.jpg?height=300&width=300" },
    { id: 6, name: "Freddie Mercury", nickname: "BoldLiner", city: "Seattle", rating: 4.8, specialties: ["Old School", "American Traditional"], imageUrl: "src/assets/images/avatar-3.jpg?height=300&width=300" },
]

function UserHome() {
    const [searchTerm, setSearchTerm] = useState('')
    const [selectedArtist, setSelectedArtist] = useState(null)

    const handleSearch = (event) => {
        event.preventDefault()
        // Implement actual search logic here
        console.log("Searching for:", searchTerm)
    }

    const filteredArtists = artists.filter(artist =>
        artist.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        artist.nickname.toLowerCase().includes(searchTerm.toLowerCase()) ||
        artist.city.toLowerCase().includes(searchTerm.toLowerCase())
    )

    return (
        <>
            <BaseHeader />
            <Container className="py-5">
                <h1 className="text-center mb-5" style={{color: '#ff5100'}}>Find Your Perfect Tattoo Artist</h1>

                {/* Search Section */}
                <Card className="shadow mb-5">
                    <Card.Body>
                        <Form onSubmit={handleSearch}>
                            <InputGroup className="mb-3">
                                <Form.Control
                                    placeholder="Search by name, nickname, or city"
                                    value={searchTerm}
                                    onChange={(e) => setSearchTerm(e.target.value)}
                                />
                                <Button variant="outline-secondary" type="submit">
                                    <Search />
                                </Button>
                            </InputGroup>
                        </Form>
                    </Card.Body>
                </Card>

                {/* Popular Artists Feed */}
                <h2 className="mb-4">Popular Artists Near You</h2>
                <Row>
                    {filteredArtists.map(artist => (
                        <Col key={artist.id} md={4} className="mb-4">
                            <Card className="h-100 shadow-sm">
                                <Card.Img variant="top" src={artist.imageUrl} />
                                <Card.Body>
                                    <Card.Title>{artist.name} <small className="text-muted">({artist.nickname})</small></Card.Title>
                                    <Card.Text>
                                        <GeoAlt className="me-1" />{artist.city}<br />
                                        <Star className="me-1 text-warning" />{artist.rating}
                                    </Card.Text>
                                    <div className="mb-2">
                                        {artist.specialties.map((specialty, index) => (
                                            <Badge key={index} bg="secondary" className="me-1 mb-1">{specialty}</Badge>
                                        ))}
                                    </div>
                                    <Button
                                        variant="outline-secondary"
                                        onClick={() => setSelectedArtist(artist)}
                                        className="w-100"
                                        href={'/book-appointment'}
                                    >
                                        View Profile & Calendar
                                    </Button>
                                </Card.Body>
                            </Card>
                        </Col>
                    ))}
                </Row>

                {/* Artist Calendar Modal */}
                {selectedArtist && (
                    <div className="modal show d-block" tabIndex={-1} role="dialog">
                        <div className="modal-dialog modal-lg" role="document">
                            <div className="modal-content">
                                <div className="modal-header">
                                    <h5 className="modal-title">{selectedArtist.name}'s Calendar</h5>
                                    <button type="button" className="btn-close" onClick={() => setSelectedArtist(null)}></button>
                                </div>
                                <div className="modal-body">
                                    {/* Here you would integrate the calendar component */}
                                    <p>Calendar for {selectedArtist.name} would be displayed here.</p>
                                    {/* You can reuse the calendar component from ArtistHome here */}
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </Container>
            <BaseFooter />
        </>
    )
}

export default UserHome