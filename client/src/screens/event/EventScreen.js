import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './EventScreenStyle.css';
import { Row, Col, Image, ListGroup } from 'react-bootstrap';
import Rating from '../../components/rating/Rating.js';

const EventScreen = ({ match }) => {
  const [event, setEvent] = useState({});

  useEffect(() => {
    const fetchEvent = async () => {
      const res = await axios.get(`/events/${match.params.id}`);

      setEvent(res.data);
      console.log('d', res.data);
      console.log('e', event);
    };

    fetchEvent();
  }, [match]);

  return (
    <>
      <Row>
        <Col md={6}>
          <Image
            fluid
            className="event-image"
            src="https://i.ibb.co/GFzzSrv/350x230.jpg"
            alt={event.name}
          />
        </Col>

        <Col md={3}>
          <ListGroup variant="flush">
            <ListGroup.Item>
              <h3>{event.name}</h3>
            </ListGroup.Item>
            <ListGroup.Item>
              <Row>
                <h5>Description</h5>
              </Row>
              <Row>
                <p>{event.description}</p>
              </Row>
            </ListGroup.Item>
            <ListGroup.Item>
              <Row>
                <h5>Information</h5>
              </Row>
              <Row>
                <p>Location: {event.location}</p>
              </Row>
              <Row>
                <p>Date: {event.date}</p>
              </Row>
              <Row>
                <p>Time: {event.time}</p>
              </Row>
            </ListGroup.Item>
            <ListGroup.Item>
              <Row>
                <h5>Rating</h5>
              </Row>
              <Row>
                  <Rating value={event.rating} />
              </Row>
            </ListGroup.Item>
          </ListGroup>
        </Col>
      </Row>
    </>
  );
};

export default EventScreen;
