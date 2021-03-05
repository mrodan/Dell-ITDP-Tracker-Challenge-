import React from 'react';
import { Link } from 'react-router-dom';
import { Card } from 'react-bootstrap';
import Rating from '../rating/Rating';

const EventCard = ({ event }) => {
  return (
    <Card className="my-3 p-3 rounded">
      <Link to={`/events/${event._id}`}>
        <Card.Img src="https://i.ibb.co/GFzzSrv/350x230.jpg" variant="top" />
      </Link>

      <Card.Body>
        <Link to={`/events/${event._id}`}>
          <Card.Title as="div">
            <strong>{event.name}</strong>
          </Card.Title>
        </Link>

        <Card.Text as="div">
          <Rating
            value={event.rating}
            counter={`${event.reviewCount}  reviews`}
          />
        </Card.Text>

        <h4>Date: {event.date}</h4>
        <h4>Time: {event.time}</h4>
      </Card.Body>
    </Card>
  );
};

export default EventCard;
