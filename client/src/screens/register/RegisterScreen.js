import React, { useState, useRef, useEffect } from 'react'
import * as AuthService from '../../services/authService'
import { AuthContext } from '../../context/authContext'
//import Message from '../../components/message/Message'


const RegisterScreen = (props) => {
    let timerID = useRef(null);
    const [user, setUser] = useState({
        username: "",
        fullName: "",
        password: "",
        email: "",
        mobile: "",
        department: ""})
    //const [message, setMessage] = useState(null);

    const onChangeHandler = (e) => {
        e.preventDefault();
        setUser({ ...user, [e.target.name]: e.target.value });
        //console.log(user);
    }

    useEffect(() => {
        return () => {
            clearTimeout(timerID);
        }
    }, [])

    const resetForm = () => {
        setUser({
            username: "",
            fullName: "",
            password: "",
            email: "",
            mobile: "",
            department: ""})
    }

    /*
    const onSubmitHandler = (e) => {
        e.preventDefault();
        AuthService.register(user).then(data => {
            const { isAuthenticated, user } = data;
            //console.log(data);
            resetForm();
            if (isAuthenticated) {
                AuthContext.setUser(user);
                AuthContext.setIsAuthenticated(isAuthenticated);
                props.history.push('/');
            }
        });
    }
    */

    const onSubmitHandler = e => {
        e.preventDefault();
        AuthService.register(user).then(data => {
            const { message } = data;
            resetForm();
            if (!message.messageError) {
                timerID = setTimeout(() => {
                    props.history.push('/'); // Where to go after registering
                }, 2000)
            }
        });
    }


    return (
        <>
            <form onSubmit= { onSubmitHandler }>
                <h3>Please Register</h3>

                <label htmlFor = "fullName" className = "sr-only"> Full Name: </label>
                <input type = "text"
                        name = "fullName"
                        onChange = { onChangeHandler }
                        className = "form-control"
                        placeholder = "Full Name" />

                <label htmlFor = "username" className = "sr-only"> Username: </label>
                <input type = "text"
                        name = "username"
                        onChange = { onChangeHandler }
                        className = "form-control"
                        placeholder = "Username" />

                <label htmlFor = "email" className = "sr-only"> Email: </label>
                <input type = "text"
                        name = "email"
                        onChange = { onChangeHandler }
                        className = "form-control"
                        placeholder = "Email" />
                
                <label htmlFor = "mobile" className = "sr-only"> Mobile: </label>
                <input type = "text"
                        name = "mobile"
                        onChange = { onChangeHandler }
                        className = "form-control"
                        placeholder = "Mobile" />

                        <label htmlFor = "department" className = "sr-only"> Department: </label>
                        <input type = "text"
                        name = "department"
                        onChange = { onChangeHandler }
                        className = "form-control"
                        placeholder = "Department" />

                <label htmlFor = "password" className = "sr-only"> Password: </label>
                <input type = "password"
                        name = "password"
                        onChange = { onChangeHandler }
                        className = "form-control"
                        placeholder = "password" />

                <button className="btn btn-large btn-primary btn-block"
                        type = "submit"> Register </button>
            </form>
        </>
    )
}
// {message ? <Message message={message}/> : null}
export default RegisterScreen

