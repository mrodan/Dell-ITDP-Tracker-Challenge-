/* eslint-disable react-hooks/exhaustive-deps */
import React, {useState, useEffect} from 'react'
import axios from 'axios'
import './UserScreenStyle.css'
import { Link } from 'react-router-dom'
import { Row, Col, Image, ListGroup } from 'react-bootstrap'
import ProgressBar from 'react-bootstrap/ProgressBar'
import Chart from '../../components/chart/Chart.js'
import EventTable from '../../components/event_table/EventTable.js'

const UserScreen = ({ match }) => {
    //const profileUser = usersTest.find(profileUser => profileUser._id === match.params.id);
    const [userRole, setUserRole] = useState("")
    const [participations, setParticipations] = useState(0);
    const [attendedEvents, setAttendedEvents] = useState(0);
    const [profileUser, setprofileUser] = useState({
        _id: "",
        username: "",
        fullName: "",
        password: "",
        email: "",
        mobile: "",
        image: "",
        department:  "",
        position:  "",
        role:  "",
        quarterGoal:  0,
        yearlyGoal: 0,
        departmentGoal: 0
    })
    const [userEvents, setUserEvents] = useState([{
        participant: "",
        event: {
            name: "",
            type: "",
            date: "",
            time: "",
            location: "",
            rating: ""
        },
        attendance: false
    }])

    // Get user
    const getUser = async () => {
        await axios.get(`/users/info/${match.params.id}`)
            .then(res => {
                setprofileUser({
                    _id: res.data._id,
                    username: res.data.username,
                    fullName: res.data.fullName,
                    password: res.data.password,
                    email: res.data.email,
                    mobile: res.data.mobile,
                    image: res.data.image,
                    department:  res.data.department,
                    position:  res.data.position,
                    role:  res.data.role,
                    quarterGoal:  res.data.quarterGoal,
                    yearlyGoal: res.data.yearlyGoal,
                })
            })
            .catch(err => {
                console.log(err);
            })
    }

    
    // Get events
    const getEvents = async () => {
        await axios.get(`/users/events/${match.params.id}`)
            .then(res => {
                setUserEvents(res.data);
                console.log("req", userEvents);

            })
            .catch(err => {
                console.log(err);
            })
    }

    // Get full role
    const getRole = () => {
        if (profileUser.role === "P")
            setUserRole("Participant");
        else if (profileUser.role === "CL")
            setUserRole("Committee Lead");
        else if (profileUser.role === "PM")
            setUserRole("Program Manager");
        else
            setUserRole("Not assigned")
    }

    const setTrackerData = () => {
        let qEvents = (participations * 100) / profileUser.quarterGoal;
    }

    useEffect(() => {
        getUser();
        getRole();
        getEvents();
        //setTrackerData();
    }, [])

    return (
        <>
            <div>
                <h1>User Information</h1>
            </div>
            <Row>

                <Col md={6}>
                    <Image fluid className="profile-image" src="https://i.ibb.co/PwWsWKS/blank-profile-picture-973460-1280.png" alt={profileUser.fullName} />
                </Col>
                
                <Col md={3}>
                    <ListGroup variant='flush'>
                        <ListGroup.Item>
                            <h3>{profileUser.fullName}</h3>
                        </ListGroup.Item>
                        <ListGroup.Item>
                            <Row>
                                <h5>Contact</h5>
                            </Row>
                            <Row>
                                <p>Email: {profileUser.email}</p>
                            </Row>
                            <Row>
                                <p>Mobile: {profileUser.mobile}</p>
                            </Row>                            
                        </ListGroup.Item>
                        <ListGroup.Item>
                            <Row>
                                <h5>Department</h5>
                            </Row>
                            <Row>
                                <p>{profileUser.department}</p>
                            </Row>
                        </ListGroup.Item>
                        <ListGroup.Item>
                            <Row>
                                <h5>ITDP Role</h5>
                            </Row>
                            <Row>
                                <p>{userRole}</p>
                            </Row>
                        </ListGroup.Item>
                    </ListGroup>
                </Col>
            </Row>
                    <Row>
                        <h1>Tracker</h1>
                    </Row>
                    <Row className="row-progbar">
                        <div>
                            <h5>Quarter Minimum Achievement</h5>
                        </div>
                        <div className="progress-bar">
				            <ProgressBar animated now={Math.random() * (90 - 70) + 70} />
			            </div>
                    </Row>
                    <Row className="row-progbar">
                        <div>
                            <h5>Yearly Minimum Achievement</h5>
                        </div>
                        <div className="progress-bar">
				            <ProgressBar animated now={Math.random() * (70 - 55) + 55} />
			            </div>
                    </Row>
                    <Row className="row-progbar">
                        <div>
                            <h5>Department Minimum Achievment</h5>
                        </div>
                        <div className="progress-bar">
				            <ProgressBar animated now={Math.random() * (75 - 65) + 65} />
			            </div>
                    </Row>
                    <Row>
                        <Chart/>
                    </Row>
            <Row>
                <h1>Events</h1>
            </Row>
            <Row>
                <EventTable events={userEvents}/>
                {console.log(userEvents)}
            </Row>


        </>
    )
}

export default UserScreen
