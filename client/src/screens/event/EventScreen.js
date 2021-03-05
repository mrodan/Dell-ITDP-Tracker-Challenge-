import React, { useState, useEffect, useContext } from 'react';
import { AuthContext } from '../../context/authContext';
import axios from 'axios';
import './EventScreenStyle.css';
import { Row, Col, Image, ListGroup } from 'react-bootstrap';
import Rating from '../../components/rating/Rating.js';

const EventScreen = ({ match }) => {
  const { user, setUser } = useContext(AuthContext);
  const [event, setEvent] = useState({});

  const eventSignUp = async (user) => {
    await axios
      .post(
        `/events/register/${match.params.id}`,
        { participant: user.username },
        { headers: { 'Content-Type': 'Application/json' } }
      )
      .then((res) => {
        //console.log('Register succesfull', res);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    const fetchEvent = async () => {
      const res = await axios.get(`/events/${match.params.id}`);

      setEvent(res.data);
    };

    fetchEvent();
  }, [match]);

  const onClickEventSignUp = (user) => {
    eventSignUp(user);
  };

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
      <Row>
        <h1>Register for this event</h1>
      </Row>
      <Row>
        <button onClick={onClickEventSignUp.bind(this, user)}>Click to Register</button>
      </Row>
    </>
  );
};

export default EventScreen;
