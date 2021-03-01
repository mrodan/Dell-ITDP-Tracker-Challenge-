import React from 'react'
import { Card } from 'react-bootstrap'
import Rating from '../rating/Rating'

// { destructuring }
// ${var sintax}
const EventCard = ({ event }) => {
    return (
        <Card className='my-3 p-3 rounded'>
            <a href={`/event/${event._id}`}>
                <Card.Img src={event.image} variant='top' />
            </a>
            
            <Card.Body>
                <a href={`/event/${event._id}`}>
                    <Card.Title as='div'>
                        <strong>{event.name}</strong>
                    </Card.Title>
                </a>

                <Card.Text as='div'>
                    <Rating
                        value={event.rating}
                        counter={`${ event.reviewCount}  reviews`}
                    />
                </Card.Text>

                <h3>JOIN BTN</h3>
            </Card.Body>

        </Card>
    )
}

export default EventCard
