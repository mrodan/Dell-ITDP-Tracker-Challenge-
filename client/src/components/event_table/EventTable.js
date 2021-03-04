import React, { useState } from 'react'
import Table from 'react-bootstrap/Table'

const setTable = (event, index) => {

    return(
        <tr key={index}>
            <td>{event.name}</td>
            <td>{event.type}</td>
            <td>{event.date}</td>
            <td>{event.time}</td>
            <td>{event.location}</td>
        </tr>
    )

}

const EventTable = ({ events }) => {
    const[allEvents, setAllEvents] = useState(events);

    return (
        <Table striped bordered hover>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Type</th>
                    <th>Location</th>
                    <th>Date</th>
                    <th>Time</th>
                    <th>Rating</th>
                </tr>
            </thead>
            <tbody>
                {events.map(event => {
                    console.log("e", event);
                    return(
                    <tr>
                        <td>{event.event.name}</td>
                        <td>{event.event.type}</td>
                        <td>{event.event.location}</td>
                        <td>{event.event.date}</td>
                        <td>{event.event.time}</td>
                        <td>{event.event.rating}</td>
                    </tr>)
                })}
            </tbody>
        </Table>
    )
}

export default EventTable
