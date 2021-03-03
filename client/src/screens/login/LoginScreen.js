import React, { useState, useContext } from 'react'
import * as AuthService from '../../services/authService'
import { AuthContext } from '../../context/authContext'
//import Message from '../../components/message/Message'


const LoginScreen = (props) => {
    const [user, setUser] = useState({username: "", password: ""})
    //const [message, setMessage] = useState(null);
    const authContext = useContext(AuthContext);

    const onChangeHandler = (e) => {
        e.preventDefault();
        setUser({ ...user, [e.target.name]: e.target.value });
        //console.log(user);
    }

    const onSubmitHandler = (e) => {
        e.preventDefault();
        AuthService.login(user).then(data => {
            const { isAuthenticated, user } = data;
            //console.log(data);
            if (isAuthenticated) {
                authContext.setUser(user);
                authContext.setIsAuthenticated(isAuthenticated);
                props.history.push('/');
            }
        });
    }

    return (
        <>
            <form onSubmit= { onSubmitHandler }>
                <h3>Please sign in</h3>

                <label htmlFor = "username" className = "sr-only"> Username: </label>
                <input type = "text"
                        name = "username"
                        onChange = { onChangeHandler }
                        className = "form-control"
                        placeholder = "username" />

                <label htmlFor = "password" className = "sr-only"> Password: </label>
                <input type = "password"
                        name = "password"
                        onChange = { onChangeHandler }
                        className = "form-control"
                        placeholder = "password" />

                <button className="btn btn-large btn-primary btn-block"
                        type = "submit"> Sign in </button>
            </form>
        </>
    )
}
// {message ? <Message message={message}/> : null}
export default LoginScreen

