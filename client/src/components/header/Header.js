import React from 'react'
import { Navbar, Nav, Container } from 'react-bootstrap'
import { Person, Headset } from 'react-bootstrap-icons';
import './HeaderStyle.css'

const Header = () => {
    return (
        <div>
            <Navbar className='navbar' collapseOnSelect>
                <Container>
  <Navbar.Brand href="#home">Dell IT Development Program</Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="ml-auto">
      <Nav.Link href="#Contact"><Headset/>Contact</Nav.Link>

      <Nav.Link href="/login"><Person/>Login</Nav.Link>
    </Nav>
  </Navbar.Collapse>
  </Container>
</Navbar>
        </div>
    )
}

export default Header
