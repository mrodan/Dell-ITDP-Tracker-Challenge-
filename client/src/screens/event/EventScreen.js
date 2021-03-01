import React from 'react'
import { Link } from 'react-router-dom'
import { Row, Col, Image, Card, Button, ListGroup } from 'react-bootstrap'
import Rating from '../../components/rating/Rating'
import eventsTest from '../../eventsTest'


const EventScreen = ({ match }) => {
    const event = eventsTest.find(event => event._id === match.params.id);
    return (
        <>
            {event.name}
        </>
    )
}

export default EventScreen
