import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import {GiHamburgerMenu} from 'react-icons/gi'
import {BiLogIn} from 'react-icons/bi'
import {GoEyeClosed} from 'react-icons/go';
import { Link } from 'react-router-dom';
import {BiLogOut} from 'react-icons/bi'
import '../css/Header.css'
function BasicExample() {
  return (
    <Navbar className='nav_header header_navbar' expand="lg">
      <Container>
        <Navbar.Brand href="#home" className='text-white'>React-Bootstrap</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
          <Nav.Link>
    <Link className='color_white' to="/login">
            <BiLogIn/>Login
            </Link>
    </Nav.Link>
     <Nav.Link>
     <Link className='color_white' to="/signup">
          <BiLogOut/>Sign Up
            </Link>
    </Nav.Link>

          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default BasicExample;