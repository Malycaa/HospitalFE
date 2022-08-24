import { Col, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Offcanvas from "react-bootstrap/Offcanvas";
import { Link, useNavigate } from "react-router-dom";
import icon from "../icon.png";
import React, { useState } from "react";

function logout() {
  const ls = require("localstorage-ttl");
  ls.set("user", null);
  const check = ls.get("user") === null ? true : false;
  console.log(check);
  window.location.href = "/";
}

const NavbarSuperAdmin = () => {
  const [initial, setInitial] = useState("");
  const ls = require("localstorage-ttl");
  const data = ls.get("user");

  setTimeout(
    function () {
      let rgx = new RegExp(/(\p{L}{1})\p{L}+/, "gu");
      let x = [...data.full_name.matchAll(rgx)] || [];
      x = ((x.shift()?.[1] || "") + (x.pop()?.[1] || "")).toUpperCase();
      setInitial(x);
    }.bind(this),
    100
  );

  return (
    <>
      {[false].map((expand) => (
        <Navbar
          key={expand}
          bg="dark"
          variant="dark"
          expand={expand}
          className="mb-3"
        >
          <Container fluid>
            <Row>
              <Col>
                {/* <img src={icon} style={{ width: 45 }} alt="logo" /> */}
                <div
                  style={{
                    display: "flex",
                    width: "50px",
                    height: "50px",
                    backgroundColor: "white",
                    borderRadius: "50%",
                  }}
                >
                  <h4 style={{ margin: "auto" }}>{initial}</h4>
                </div>
              </Col>
              <Col>
                <Navbar.Brand href="/superAdmin">{data.full_name}</Navbar.Brand>
                <br></br>
                <Navbar.Text href="/SuperAdmin">Admin</Navbar.Text>
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
                  Hospital - Center
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="justify-content-end flex-grow-1 pe-3">
                  <Nav.Link href="/EditUserDoctor">Edit Profile</Nav.Link>
                  <Nav.Link href="/RegisterAdmin" style={{ color: "black" }}>
                    Register Admin
                  </Nav.Link>
                  <Nav.Link href="/RegisterDoctors" style={{ color: "black" }}>
                    Register Doctor
                  </Nav.Link>
                  <Nav.Link href="/RegisterPatient" style={{ color: "black" }}>
                    Register Patient
                  </Nav.Link>
                  <Nav.Link href="/RegisterMedication" style={{ color: "black" }}>
                    Register Medication
                  </Nav.Link>
                  <Nav.Link href="/PatientReportTable" style={{ color: "black" }}>
                    Patient Visit Report
                  </Nav.Link>
                  <Nav.Link href="#action2" onClick={logout}>
                    Log Out
                  </Nav.Link>
                </Nav>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ))}
    </>
  );
};

export default NavbarSuperAdmin;
