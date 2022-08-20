import React from 'react'
import { Button, Container, Nav, Navbar, NavDropdown } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import { Link, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

const NavbarHome = (props) => {
    const user = useSelector(state => state.token.user);
    const navigate = useNavigate();
    const logOut = () => {
        localStorage.removeItem("tokenBearer");
        navigate(0);
    }

    return (
        <>
            <Navbar bg="light" expand="lg">
                <Container>
                    <Navbar.Brand>
                        <Link to={"/"}>
                            Home
                        </Link>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link>
                                <Link to={"/products"}>
                                    Product List
                                </Link>
                            </Nav.Link>
                            <Nav.Link href="#link">Link</Nav.Link>
                            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.2">
                                    Another action
                                </NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="#action/3.4">
                                    Separated link
                                </NavDropdown.Item>
                            </NavDropdown>
                            <Nav.Link>
                                {user ?
                                    <Button
                                        variant='warning'
                                        onClick={e => { e.preventDefault(); logOut() }}>
                                        <Link to={"/"}>
                                            Logout
                                        </Link>
                                    </Button>
                                    :
                                    <Button variant='warning'>
                                        <Link to={"/login"}>
                                            Masuk
                                        </Link>
                                    </Button>
                                }
                            </Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    )
}

export default NavbarHome