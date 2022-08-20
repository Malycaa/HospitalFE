import { Col, Row } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { Link, useNavigate } from 'react-router-dom';
import icon from '../icon.png'

function logout() {
  const ls = require('localstorage-ttl')
  ls.set('user', null);
  const check = ls.get("user") === null ? true : false
  console.log(check);
  window.location.href = '/login';
}

// const logOut = () => {
//   const navigate = useNavigate();
//   const data = ls.get('user')
//   ls.set('user', null);
//   navigate('/login')
// }

const NavbarSuperAdmin = () => {
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
                <Navbar.Brand href="#">Super Admin</Navbar.Brand>
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
                  Hospital
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="justify-content-end flex-grow-1 pe-3">
                  <Nav.Link>
                    <Link to={"/RegisterAdmin"}>
                      Register Admin
                    </Link>
                  </Nav.Link>
                  <Nav.Link>
                    <Link to={"/RegisterDoctors"}>
                      Register Doctor
                    </Link>
                  </Nav.Link>
                  <Nav.Link>
                    <Link to={"/RegisterPatient"}>
                      Register Pasien
                    </Link>
                  </Nav.Link>
                  <Nav.Link href="#action2">Daftar Pasien</Nav.Link>
                  <Nav.Link href="#action2" onClick={logout}>Log Out</Nav.Link>

                </Nav>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ))}
    </>
  );
}

export default NavbarSuperAdmin;