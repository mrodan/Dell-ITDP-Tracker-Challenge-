import React from 'react'
import { Col, Row } from 'react-bootstrap'
import EventCard from '../../components/event_card/EventCard'
import eventsTest from '../../eventsTest'

// key -> every map element must have a key (warning)

const HomeScreen = () => {
    return (
        <>
            <h1>Most Rated Events</h1>
            <Row>
                {eventsTest.map(event => (
                    <Col key={event._id} sm={12} md={6} lg={4} xlg={2}>
                        <h3>{event.name}</h3>
                        <EventCard event={event} />
                    </Col>
                ))}
            </Row>
        </>
    )
}

export default HomeScreen
