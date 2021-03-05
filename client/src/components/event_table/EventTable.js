import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Table from 'react-bootstrap/Table';
import Rating from '../rating/Rating';
import './EventTableStyle.css';

const EventTable = ({ events }) => {
  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>Attendance</th>
          <th>Name</th>
          <th>Type</th>
          <th>Location</th>
          <th>Date</th>
          <th>Time</th>
          <th>Rating</th>
        </tr>
      </thead>
      <tbody>
        {events.map((event) => {
          return (
              <tr>
                <td>{event.attendance ? 'Yes' : 'No'}</td>
                <td>{event.event.name}</td>
                <td>{event.event.type}</td>
                <td>{event.event.location}</td>
                <td>{event.event.date}</td>
                <td>{event.event.time}</td>
                <td>
                  <Rating value={event.rating} />
                </td>
              </tr>
          );
        })}
      </tbody>
    </Table>
  );
};

export default EventTable;
