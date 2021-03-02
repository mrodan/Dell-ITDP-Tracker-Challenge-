import React, {useState, useEffect} from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import { Row, Col, Image, Card, Button, ListGroup } from 'react-bootstrap'
import Rating from '../../components/rating/Rating'


const EventScreen = ({ match }) => {
    const [event, setEvent] = useState({})

    useEffect(() => {
        const fetchEvent = async () => {
            const res = await axios.get(`/api/events/${match.params.id}`)
    
            setEvent(res.data);
        }

        fetchEvent();
    }, [match]);

    return (
        <>
            {event.name}
        </>
    )
}

export default EventScreen
