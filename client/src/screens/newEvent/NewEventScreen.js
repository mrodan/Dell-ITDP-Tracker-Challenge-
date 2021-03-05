import React, { useState } from 'react';
import axios from 'axios';
//import Message from '../../components/message/Message'

const NewEventScreen = (props) => {
  const [event, setEvent] = useState({
    name: '',
    description: '',
    type: '',
    location: '',
    date: '',
    time: '',
  });

  const onChangeHandler = (e) => {
    e.preventDefault();
    setEvent({ ...event, [e.target.name]: e.target.value });
    //console.log(event);
  };

  const resetForm = () => {
    setEvent({
      name: '',
      description: '',
      type: '',
      location: '',
      date: '',
      time: '',
    });
  };

  const createNewEvent = async () => {
    await axios
      .post(
        '/events/newEvent',
        {
          name: event.name,
          description: event.description,
          type: event.type,
          location: event.location,
          date: event.date,
          time: event.time,
        },
        { headers: { 'Content-Type': 'Application/json' } }
      )
      .then((res) => {
        console.log('New event created succesfull', res);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();
    createNewEvent();
    resetForm();
    props.history.push('/');
  };

  return (
    <>
      <form onSubmit={onSubmitHandler}>
        <h3>Please Create New Event</h3>

        <label htmlFor="name" className="sr-only">
          name:
        </label>
        <input
          type="text"
          name="name"
          onChange={onChangeHandler}
          className="form-control"
          placeholder="Name"
        />

        <label htmlFor="description" className="sr-only">
          Description
        </label>
        <input
          type="text"
          name="description"
          onChange={onChangeHandler}
          className="form-control"
          placeholder="Description"
        />

        <label htmlFor="type" className="sr-only">
          Type:
        </label>
        <input
          type="text"
          name="type"
          onChange={onChangeHandler}
          className="form-control"
          placeholder="Type"
        />

        <label htmlFor="location" className="sr-only">
          Location:
        </label>
        <input
          type="text"
          name="location"
          onChange={onChangeHandler}
          className="form-control"
          placeholder="Location"
        />

        <label htmlFor="date" className="sr-only">
          Date:
        </label>
        <input
          type="text"
          name="date"
          onChange={onChangeHandler}
          className="form-control"
          placeholder="Date"
        />

        <label htmlFor="time" className="sr-only">
          Time:
        </label>
        <input
          type="text"
          name="time"
          onChange={onChangeHandler}
          className="form-control"
          placeholder="Time"
        />

        <button
          className="btn btn-large btn-primary btn-block"
          onSubmit={'onSubmitHandler'}
          type="submit"
        >
          Create Event
        </button>
      </form>
    </>
  );
};
export default NewEventScreen;
