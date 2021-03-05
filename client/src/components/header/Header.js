import React, { useState, useContext } from 'react';
import { AuthContext } from '../../context/authContext';
import * as AuthService from '../../services/authService';
import axios from 'axios';
import { LinkContainer } from 'react-router-bootstrap'; // Allows us to wrap bootstrap components
import { Link } from 'react-router-dom';
import { Navbar, Nav, Container } from 'react-bootstrap';
import {
  Person,
  Headset,
  BoxArrowRight,
  PlusCircle,
} from 'react-bootstrap-icons';
import UserSearch from './UserSearch';
import './HeaderStyle.css';

const Header = () => {
  const { isAuthenticated, setIsAuthenticated, user, setUser } = useContext(
    AuthContext
  );
  const [searchValue, setSearchValue] = useState('');
  const [searchUsersData, setSearchUsersData] = useState([]);
  const [open, setOpen] = useState(false);

  const toggle = () => setOpen(!open);

  const postSearchedValues = async (searchValue) => {
    await axios
      .post(
        '/users/search',
        { searchValue: searchValue },
        { headers: { 'Content-Type': 'Application/json' } }
      )
      .then((results) => {
        setSearchUsersData(results.data.user);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const getUserSearch = (e) => {
    setSearchValue(e.target.value);
    //console.log(searchValue);
    //setSearchUsersData([])
    postSearchedValues(searchValue);
  };

  const onClickHandler = (e) => {
    e.preventDefault();
    return document.getElementById('searchbar')?.focus(); // Called from div (icon&span) to allow input function When placeholder is cliked
  };

  const searchBar = () => {
    return (
      <>
        <div className="searchbar-container">
          <input type="text" onChange={getUserSearch} id="searchbar" />

          {searchValue === '' ? (
            <div className="searchbar-placeholder" onClick={onClickHandler}>
              <span>Search</span>
            </div>
          ) : (
            <div>
              <ul className="search-dropdown">
                {searchUsersData.map((user) => (
                  <li key={user._id}>
                    <Link
                      style={{ color: 'inherit', size: 'parent' }}
                      to={`/users/${user._id}`}
                    >
                      <UserSearch
                        username={user.username}
                        fullName={user.fullName}
                      />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </>
    );
  };

  const unauthenticatedNavbar = () => {
    return (
      <>
        <Link className="btn-link" to="/register">
          <button className="nav-btn">
            <Person />
            Register
          </button>
        </Link>
        <Link className="btn-link" to="/login">
          <button className="nav-btn">
            <Person />
            Login
          </button>
        </Link>
      </>
    );
  };

  const authenticatedNavbar = () => {
    return (
      <>
        {user.role === 'PM' ? (
          <Link className="btn-link" to="/newevent">
            <button className="nav-btn">
              <PlusCircle />
              New Event
            </button>
          </Link>
        ) : null}
        <Link className="btn-link" to={`/users/${user._id}`}>
          <button className="nav-btn">
            <Person />
            Profile
          </button>
        </Link>
        <Link className="btn-link" to="/" onClick={onClickLogoutHandler}>
          <button className="nav-btn">
            <BoxArrowRight />
            Logout
          </button>
        </Link>
      </>
    );
  };

  const onClickLogoutHandler = () => {
    AuthService.logout().then((data) => {
      if (data.success) {
        setUser(data.user);
        setIsAuthenticated(false);
      }
    });
  };

  return (
    <div>
      <Navbar className="navbar" collapseOnSelect>
        <Container>
          <img
            style={{ height: '5%', width: '5%' }}
            src="https://i.ibb.co/8mg4mKd/92489.png"
            alt="logo"
          />
          <LinkContainer to="/">
            <Navbar.Brand className="title navbar-brand">
              &nbsp; IT Development Program
            </Navbar.Brand>
          </LinkContainer>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto">
              {user.role === 'PM' || user.role === 'CL' ? searchBar() : null}
              <Link className="btn-link" to="#contact">
                <button className="nav-btn">
                  <Headset />
                  Contact
                </button>
              </Link>
              {isAuthenticated
                ? authenticatedNavbar()
                : unauthenticatedNavbar()}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
