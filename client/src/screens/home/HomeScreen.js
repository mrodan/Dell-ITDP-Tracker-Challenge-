import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Col, Row } from 'react-bootstrap'
import EventCard from '../../components/event_card/EventCard'

// key -> every map element must have a key (warning)

const HomeScreen = () => {
    const [featuredEvents, setFeaturedEvents] = useState([]);

    useEffect(() => {
        // inside func to avoid warning
        const fetchFeaturedEvents = async () => {
            const res = await axios.get('/api/events')
    
            setFeaturedEvents(res.data);
        }

        fetchFeaturedEvents();
    }, [])

    return (
        <>
            <h1>Most Rated Events</h1>
            <Row>
                {featuredEvents.map(event => (
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
