import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import '../scss/Navbar.scss'
import logo from '../images/logo.png'
import { BsArrowRight } from "react-icons/bs";

function NavScrollExample() {
  return (
    <Navbar expand="lg" className="nav-bg-colour">
      <Container>
        <Navbar.Brand href="/">
            <img
                src={logo}
                width="50"
                height="50"
                className="d-inline-block align-top"
                alt=""
            />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="mx-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link href="about">About</Nav.Link>
            <Nav.Link href="team">Team</Nav.Link>
            <Nav.Link href="branding">Branding</Nav.Link>
            <Nav.Link href="donate">Donate</Nav.Link>
          </Nav>
            <Button type="button" href="apply" variant="outline-success" className="custom-apply-button">Apply <BsArrowRight /></Button>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavScrollExample;