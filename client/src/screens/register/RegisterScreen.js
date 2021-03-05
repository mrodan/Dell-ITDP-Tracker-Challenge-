import React, { useState, useRef, useEffect } from 'react';
import * as AuthService from '../../services/authService';
import { AuthContext } from '../../context/authContext';
//import Message from '../../components/message/Message'

const RegisterScreen = (props) => {
  let timerID = useRef(null);
  const [user, setUser] = useState({
    username: '',
    fullName: '',
    password: '',
    email: '',
    mobile: '',
    department: '',
    position: '',
  });

  const onChangeHandler = (e) => {
    e.preventDefault();
    setUser({ ...user, [e.target.name]: e.target.value });
    //console.log(user);
  };

  useEffect(() => {
    return () => {
      clearTimeout(timerID);
    };
  }, []);

  const resetForm = () => {
    console.log("RESETED")
    setUser({
      username: '',
      fullName: '',
      password: '',
      email: '',
      mobile: '',
      department: '',
      position: '',
    });
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();
    AuthService.register(user).then((data) => {
      resetForm();
      console.log("RESETED")
    });
  };

  return (
    <>
      <form onSubmit={onSubmitHandler}>
        <h3>Please Register</h3>

        <label htmlFor="fullName" className="sr-only">
          Full Name:
        </label>
        <input
          type="text"
          name="fullName"
          onChange={onChangeHandler}
          className="form-control"
          placeholder="Full Name"
        />

        <label htmlFor="Username" className="sr-only">
          Username:
        </label>
        <input
          type="text"
          name="username"
          onChange={onChangeHandler}
          className="form-control"
          placeholder="Username"
        />

        <label htmlFor="password" className="sr-only">
          Password:
        </label>
        <input
          type="password"
          name="password"
          onChange={onChangeHandler}
          className="form-control"
          placeholder="Password"
        />

        <label htmlFor="email" className="sr-only">
          Email:
        </label>
        <input
          type="text"
          name="email"
          onChange={onChangeHandler}
          className="form-control"
          placeholder="Email"
        />

        <label htmlFor="mobile" className="sr-only">
          Mobile:
        </label>
        <input
          type="text"
          name="mobile"
          onChange={onChangeHandler}
          className="form-control"
          placeholder="Mobile"
        />

        <label htmlFor="department" className="sr-only">
          Department:
        </label>
        <input
          type="text"
          name="department"
          onChange={onChangeHandler}
          className="form-control"
          placeholder="Department"
        />

        <label htmlFor="position" className="sr-only">
          Position:
        </label>
        <input
          type="text"
          name="position"
          onChange={onChangeHandler}
          className="form-control"
          placeholder="Position"
        />

        <button
          className="btn btn-large btn-primary btn-block"
          onSubmit={'onSubmitHandler'}
          type="submit"
        >
          Register
        </button>
      </form>
    </>
  );
};
// {message ? <Message message={message}/> : null}
export default RegisterScreen;
