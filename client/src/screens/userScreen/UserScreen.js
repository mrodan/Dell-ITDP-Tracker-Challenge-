/* eslint-disable react-hooks/exhaustive-deps */
import React, {useState, useEffect} from 'react'
import axios from 'axios'
import './UserScreenStyle.css'
import { Link } from 'react-router-dom'
import { Row, Col, Image, Button, ListGroup } from 'react-bootstrap'
import ProgressBar from 'react-bootstrap/ProgressBar'
import Chart from '../../components/chart/Chart.js'
import EventTable from '../../components/event_table/EventTable.js'

const UserScreen = ({ match }) => {
    //const profileUser = usersTest.find(profileUser => profileUser._id === match.params.id);
    const [userRole, setUserRole] = useState("")

    const [quarterEvents, setQuarterEvents] = useState(0)
    const [yearlyGoal, setYearlyGoal] = useState(0)
    const [participations, setParticipations] = useState(0);
    const [attendedEvents, setAttendedEvents] = useState(0);
    const [totalTrainingEvents, setTotalTrainingEvents] = useState(2);
    const [totalNetworkingEvents, setTotalNetworkingEvents] = useState(1);
    const [totalTeamBuildingEvents, setTotalTeamBuildingEvents] = useState(1);
    const [totalVolunteerEvents, setTotalVolunteerEvents] = useState(1);

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
                //console.log("RES", res.data)
                setUserEvents(res.data);
                setParticipations(res.data.length);
                console.log(participations)

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
        console.log("TOTAL EVENTS TRACKER" + participations + "  qUEARTER GOAL" + profileUser.quarterGoal);
        let qEvents = (participations * 100) / profileUser.quarterGoal;
        setQuarterEvents(qEvents)
        //setYearlyGoal(llevo~~~~~~ * 100 / profileUser.yearlyGoal)
    }

    useEffect(() => {
        getUser();
        getRole();
        getEvents();
        //setTrackerData();
    }, []) //[getEvents, getUser, getRole]

    return (
        <>
            <Link className='btn my-3' to='/'>
                Go Back
            </Link>
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
                <Col>
                    <Row>
                        <h1>Tracker</h1>
                    </Row>
                    <Row className="try">
                        <div>
                            <h5>Quarter Goal</h5>
                        </div>
                        <div className="progress-bar">
				            <ProgressBar animated now={0} />
                            <p>{quarterEvents}</p>
			            </div>
                    </Row>
                    <Row className="try">
                        <div>
                            <h5>Yearly Goal</h5>
                        </div>
                        <div className="progress-bar">
				            <ProgressBar animated now={{quarterEvents}} />
			            </div>
                    </Row>
                    <Row className="try">
                        <div>
                            <h5>Department Goal</h5>
                        </div>
                        <div className="progress-bar">
				            <ProgressBar animated now={45} />
			            </div>
                    </Row>
                </Col>
                <Col>
                    <Row>
                        <Chart/>
                    </Row>

                </Col>
            </Row>

            <Row>
                <h1>Events</h1>
            </Row>
            <Row>
                <EventTable events={userEvents}/>
            </Row>


        </>
    )
}

export default UserScreen
