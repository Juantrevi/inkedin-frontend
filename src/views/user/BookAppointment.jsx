import React, { useState } from 'react'
import { Container, Row, Col, Card, Badge, Button, Modal, Form, Alert } from 'react-bootstrap'
import { ChevronLeft, ChevronRight, Clock, Calendar2Check, XCircle } from 'react-bootstrap-icons'
import BaseHeader from "../partials/BaseHeader"
import BaseFooter from "../partials/BaseFooter"

function BookAppointment() {
    const [currentDate, setCurrentDate] = useState(new Date())
    const [showModal, setShowModal] = useState(false)
    const [selectedSlot, setSelectedSlot] = useState(null)
    const [bookingConfirmed, setBookingConfirmed] = useState(false)

    // Mock data for the artist
    const artist = {
        id: 1,
        name: "Alice Cooper",
        specialties: ["Traditional", "Japanese"],
        imageUrl: "/images/avatar-1.jpg?height=200&width=200"
    }

    // Mock data for appointments
    const appointments = [
        { id: 1, date: '2024-11-16', time: '09:00', status: 'booked' },
        { id: 2, date: '2024-11-16', time: '17:00', status: 'booked' },
        { id: 3, date: '2024-11-17', time: '14:00', status: 'booked' },
        { id: 4, date: '2024-11-17', time: '17:00', status: 'booked' },
        { id: 5, date: '2024-11-18', time: '09:00', status: 'booked' },
        { id: 6, date: '2024-11-18', time: '14:00', status: 'booked' },
        { id: 7, date: '2024-11-19', time: '15:00', status: 'booked' },
    ]

    const timeSlots = [
        '09:00', '10:00', '11:00', '12:00', '13:00', '14:00',
        '15:00', '16:00', '17:00', '18:00', '19:00'
    ]

    const getWeekDates = (date) => {
        const week = []
        for (let i = 0; i < 7; i++) {
            const day = new Date(date)
            day.setDate(date.getDate() - date.getDay() + i)
            week.push(day)
        }
        return week
    }

    const formatDate = (date) => {
        return date.toISOString().split('T')[0]
    }

    const getAppointmentsByDate = (date) => {
        return appointments.filter(app => app.date === date)
    }

    const navigateWeek = (direction) => {
        const newDate = new Date(currentDate)
        newDate.setDate(currentDate.getDate() + 7 * direction)
        setCurrentDate(newDate)
    }

    const getSlotStatus = (date, time) => {
        const dateAppointments = getAppointmentsByDate(formatDate(date))
        const startIndex = timeSlots.indexOf(time)
        for (let i = 0; i < 3; i++) {
            const appointment = dateAppointments.find(app => app.time === timeSlots[startIndex + i])
            if (appointment && appointment.status === 'booked') {
                return i === 0 ? 'booked' : 'unavailable'
            }
        }
        return 'available'
    }

    const handleSlotClick = (date, time) => {
        const status = getSlotStatus(date, time)
        if (status === 'available') {
            setSelectedSlot({
                id: Date.now(),
                date: formatDate(date),
                time: time,
                status: 'available'
            })
            setShowModal(true)
        }
    }

    const handleBookAppointment = () => {
        console.log('Booking appointment:', selectedSlot)
        setShowModal(false)
        setBookingConfirmed(true)
    }

    return (
        <>
            <BaseHeader />
            <Container className="py-5">
                <Row className="mb-5">
                    <Col md={4}>
                        <Card className="shadow">
                            <Card.Img variant="top" src={artist.imageUrl} />
                            <Card.Body>
                                <Card.Title>{artist.name}</Card.Title>
                                <Card.Text>
                                    Specialties: {artist.specialties.join(', ')}
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md={8}>
                        <h1 className="mb-4" style={{color: '#ff5100'}}>Book an Appointment with {artist.name}</h1>
                        <p className="lead">Select an available time slot to book your tattoo session.</p>
                    </Col>
                </Row>

                {bookingConfirmed && (
                    <Alert variant="success" onClose={() => setBookingConfirmed(false)} dismissible>
                        <Alert.Heading>Booking Confirmed!</Alert.Heading>
                        <p>Your appointment has been successfully booked. We look forward to seeing you!</p>
                    </Alert>
                )}

                <Card className="shadow mb-5">
                    <Card.Header className="bg-dark text-white d-flex justify-content-between align-items-center">
                        <Button variant="outline-light" onClick={() => navigateWeek(-1)}>
                            <ChevronLeft />
                        </Button>
                        <h3 className="mb-0">
                            {currentDate.toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}
                        </h3>
                        <Button variant="outline-light" onClick={() => navigateWeek(1)}>
                            <ChevronRight />
                        </Button>
                    </Card.Header>
                    <Card.Body className="p-0">
                        <div className="d-flex">
                            {getWeekDates(currentDate).map((date, index) => (
                                <div key={index} className="flex-grow-1 border-end" style={{minWidth: '14.28%'}}>
                                    <div className="text-center py-2 border-bottom">
                                        <div>{date.toLocaleDateString('en-US', { weekday: 'short' })}</div>
                                        <div className="font-weight-bold">{date.getDate()}</div>
                                    </div>
                                    <div style={{height: '600px', overflowY: 'auto'}}>
                                        {timeSlots.map((time, timeIndex) => {
                                            const status = getSlotStatus(date, time)
                                            return (
                                                <div key={timeIndex} className="border-bottom p-1">
                                                    <Button
                                                        variant={status === 'available' ? 'outline-success' : status === 'unavailable' ? 'outline-secondary' : 'outline-danger'}
                                                        size="sm"
                                                        className="w-100 text-start"
                                                        onClick={() => handleSlotClick(date, time)}
                                                        disabled={status === 'unavailable'}
                                                    >
                                                        <Clock className="me-2" />
                                                        {time}
                                                        {status === 'booked' && <XCircle className="float-end" />}
                                                        {status === 'available' && <Calendar2Check className="float-end" />}
                                                    </Button>
                                                </div>
                                            )
                                        })}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </Card.Body>
                </Card>
            </Container>

            <Modal show={showModal} onHide={() => setShowModal(false)}>
                <Modal.Header closeButton>
                    <Modal.Title>Book Appointment with {artist.name}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    {selectedSlot && (
                        <Form>
                            <Form.Group className="mb-3">
                                <Form.Label>Date</Form.Label>
                                <Form.Control type="text" readOnly value={selectedSlot.date} />
                            </Form.Group>
                            <Form.Group className="mb-3">
                                <Form.Label>Time</Form.Label>
                                <Form.Control type="text" readOnly value={selectedSlot.time} />
                            </Form.Group>
                            <Form.Group className="mb-3">
                                <Form.Label>Your Name</Form.Label>
                                <Form.Control type="text" placeholder="Enter your name" required />
                            </Form.Group>
                            <Form.Group className="mb-3">
                                <Form.Label>Your Email</Form.Label>
                                <Form.Control type="email" placeholder="Enter your email" required />
                            </Form.Group>
                            <Form.Group className="mb-3">
                                <Form.Label>Special Requests</Form.Label>
                                <Form.Control as="textarea" rows={3} placeholder="Any special requests or notes for the artist" />
                            </Form.Group>
                        </Form>
                    )}
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={() => setShowModal(false)}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={handleBookAppointment} style={{backgroundColor: '#ff5100', borderColor: '#ff5100'}}>
                        Confirm Booking
                    </Button>
                </Modal.Footer>
            </Modal>

            <BaseFooter />
        </>
    )
}

export default BookAppointment