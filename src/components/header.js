import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import logo from './SEA_logo.svg';

const Header = () => {
  return (
      <Navbar variant="dark">
        <Container>
          <Navbar.Brand href="#home">
            <img
              alt=""
              src={logo}
              width="30"
              height="30"
              className="d-inline-block align-top"
            />{' '}
            A Primer to Southeast Asian Geopolitics
          </Navbar.Brand>
        </Container>
      </Navbar>
  );
}

export default Header;