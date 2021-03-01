import React from 'react'
import { LinkContainer } from 'react-router-bootstrap'; // Allows us to wrap bootstrap components
import { Navbar, Nav, Container } from 'react-bootstrap'
import { Person, Headset } from 'react-bootstrap-icons';
import './HeaderStyle.css'

const Header = () => {
    return (
        <div>
          <Navbar className='navbar' collapseOnSelect>
            <Container>
              <LinkContainer to='/'>
                <Navbar.Brand>Dell IT Development Program</Navbar.Brand>
              </LinkContainer>
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ml-auto">
                  <LinkContainer to='#contact'>
                    <Nav.Link><Headset/>Contact</Nav.Link>
                  </LinkContainer>
                  <LinkContainer to='/login'>
                    <Nav.Link><Person/>Login</Nav.Link>
                  </LinkContainer>
                </Nav>
              </Navbar.Collapse>
            </Container>
          </Navbar>
        </div>
    )
}

export default Header
