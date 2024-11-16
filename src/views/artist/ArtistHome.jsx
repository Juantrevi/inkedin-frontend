import React, { useState, useEffect } from 'react'
import { Container, Row, Col, Card, Badge, Button, Image } from 'react-bootstrap'
import { ChevronLeft, ChevronRight, Instagram } from 'react-bootstrap-icons'
import BaseHeader from "../partials/BaseHeader"
import BaseFooter from "../partials/BaseFooter"

function ArtistHome() {
    const [currentDate, setCurrentDate] = useState(new Date())
    const [instagramPosts, setInstagramPosts] = useState([])

    // Mock data for appointments
    const appointments = [
        { id: 1, date: '2024-11-16', time: '09:00', status: 'confirmed', client: 'John Doe' },
        { id: 2, date: '2024-11-17', time: '11:00', status: 'pending', client: 'Jane Smith' },
        { id: 3, date: '2024-11-18', time: '14:00', status: 'confirmed', client: 'Mike Johnson' },
        { id: 4, date: '2024-11-19', time: '16:00', status: 'pending', client: 'Sarah Williams' },
        { id: 5, date: '2024-11-20', time: '10:00', status: 'confirmed', client: 'Emily Brown' },
        { id: 6, date: '2024-11-21', time: '13:00', status: 'pending', client: 'David Lee' },
        { id: 7, date: '2024-11-22', time: '15:00', status: 'confirmed', client: 'Lisa Chen' },
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

    const getStatusColor = (status) => {
        switch(status) {
            case 'confirmed':
                return 'success'
            case 'pending':
                return 'warning'
            default:
                return 'light'
        }
    }

    const navigateWeek = (direction) => {
        const newDate = new Date(currentDate)
        newDate.setDate(currentDate.getDate() + 7 * direction)
        setCurrentDate(newDate)
    }

    const getOccupiedSlots = (date) => {
        const occupiedSlots = {}
        const appointments = getAppointmentsByDate(formatDate(date))
        appointments.forEach(app => {
            const startIndex = timeSlots.indexOf(app.time)
            for (let i = 0; i < 3; i++) {
                if (timeSlots[startIndex + i]) {
                    occupiedSlots[timeSlots[startIndex + i]] = app
                }
            }
        })
        return occupiedSlots
    }

    // Mock function to simulate fetching Instagram posts
    const fetchInstagramPosts = () => {
        return [
            { id: 1, imageUrl: '/src/assets/images/avatar-1.jpg?height=300&width=300', likes: 120, comments: 15 },
            { id: 2, imageUrl: '/src/assets/images/realism_tattoo.jpg?height=300&width=300', likes: 95, comments: 8 },
            { id: 3, imageUrl: '/src/assets/images/tattoo_index.jpg?height=300&width=300', likes: 200, comments: 25 },
            { id: 4, imageUrl: '/src/assets/images/realism_tattoo.jpg?height=300&width=300', likes: 150, comments: 18 },
            { id: 5, imageUrl: '/src/assets/images/tattoo_index.jpg?height=300&width=300', likes: 180, comments: 22 },
            { id: 6, imageUrl: '/src/assets/images/realism_tattoo.jpg?height=300&width=300', likes: 110, comments: 12 },
        ]
    }

    useEffect(() => {
        const posts = fetchInstagramPosts()
        setInstagramPosts(posts)
    }, [])

    return (
        <>
            <BaseHeader />
            <Container className="py-5">
                <h1 className="text-center mb-5" style={{color: '#ff5100'}}>Artist Calendar</h1>
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
                                            const occupiedSlots = getOccupiedSlots(date)
                                            const appointment = occupiedSlots[time]
                                            return (
                                                <div key={timeIndex} className="border-bottom p-1">
                                                    <small className="text-muted">{time}</small>
                                                    {appointment && (
                                                        <div
                                                            className="mt-1 p-1 rounded"
                                                            style={{
                                                                backgroundColor: getStatusColor(appointment.status) === 'success' ? '#d4edda'
                                                                    : getStatusColor(appointment.status) === 'warning' ? '#fff3cd'
                                                                        : '#f8f9fa'
                                                            }}
                                                        >
                                                            <Badge bg={getStatusColor(appointment.status)} className="me-1">
                                                                {appointment.status}
                                                            </Badge>
                                                            <small>{appointment.client}</small>
                                                        </div>
                                                    )}
                                                </div>
                                            )
                                        })}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </Card.Body>
                </Card>

                <h2 className="text-center mb-4" style={{color: '#ff5100'}}>
                    <Instagram className="me-2" />
                    Instagram Feed
                </h2>
                <Row>
                    {instagramPosts.map(post => (
                        <Col key={post.id} xs={6} md={4} lg={2} className="mb-4">
                            <Card className="h-100 shadow-sm">
                                <Card.Img variant="top" src={post.imageUrl} />
                                <Card.Body className="p-2">
                                    <small className="text-muted">
                                        {post.likes} likes • {post.comments} comments
                                    </small>
                                </Card.Body>
                            </Card>
                        </Col>
                    ))}
                </Row>
            </Container>
            <BaseFooter />
        </>
    )
}

export default ArtistHome