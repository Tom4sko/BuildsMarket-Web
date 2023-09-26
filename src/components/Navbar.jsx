import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import '../scss/Navbar.scss'
import logo from '/public/images/logo.png'
import { BsArrowRight } from "react-icons/bs";
import { useLocation } from 'react-router-dom';

function NavScroll() {

  const location = useLocation();

  return (
    <Navbar expand="lg" className="nav-bg-colour">
      <Container>
        <Navbar.Brand href="/">
            <img
                src={logo}
                width="50"
                height="50"
                className="d-inline-block align-top"
                alt="logo"
            />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="mx-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link href="about" className={location.pathname === '/about' ? 'active' : ''}>About</Nav.Link>
            <Nav.Link href="team" className={location.pathname === '/team' ? 'active' : ''}>Team</Nav.Link>
            <Nav.Link href="branding" className={location.pathname === '/branding' ? 'active' : ''}>Branding</Nav.Link>
            <Nav.Link href="donate" className={location.pathname === '/donate' ? 'active' : ''}>Donate</Nav.Link>
          </Nav>
            <Button type="button" href="apply" variant="outline-success" className="custom-apply-button">Apply <BsArrowRight /></Button>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavScroll;