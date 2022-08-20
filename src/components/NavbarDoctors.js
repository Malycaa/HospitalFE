import { Col, Row } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Offcanvas from 'react-bootstrap/Offcanvas';
import icon from '../icon.png'

function NavbarDoctor() {
  const ls = require('localstorage-ttl')
  const data = ls.get('user')
  return (
    <>
      {[false].map((expand) => (
        <Navbar key={expand} bg="dark" variant='dark' expand={expand} className="mb-3">
          <Container fluid>

            <Row>
              <Col>
                <img src={icon} style={{ width: 60 }} alt="logo" />
              </Col>
              <Col>
                <Navbar.Brand href="#">{data.full_name}</Navbar.Brand>
                <br></br>
                <Navbar.Brand href="#">Doctor</Navbar.Brand>
                {/* <label style={{ color: 'white' }}>Specialist</label> */}
              </Col>
            </Row>


            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                  Offcanvas
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="justify-content-end flex-grow-1 pe-3">
                  <Nav.Link href="#action1">Register Treatment</Nav.Link>
                  <Nav.Link href="#action2">Log Out</Nav.Link>
                </Nav>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ))}
    </>
  );
}

export default NavbarDoctor;