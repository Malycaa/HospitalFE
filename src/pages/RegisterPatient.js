import React, { useState } from "react";
import { Button, Container, Form, Row, Col, Spinner } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import api from "../lib/api";
import { setToken } from "../reducers/token-store";
import register from "../register.jpg";
import NavbarSuperAdmin from "../components/NavbarSuperAdmin";
import CustomListDropDown from "./DropDown";
// import { CustomListDropDown } from './DropDown';

const RegisterPatient = () => {
  const [user_id, setuser_id] = useState("");
  const [patient_name, setpatient_name] = useState("");
  const [birth_place, setbirth_place] = useState("");
  const [birth_date, setbirth_date] = useState("");
  const [address, setaddress] = useState("");
  const [gender, setgender] = useState("");
  const [complaints, setcomplaints] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  // const dispatch = useDispatch();

  const handleSubmit = async () => {
    try {
      setLoading(true);
      const url = `/api/patient/addPatient`;
      const response = await api.post(url, {
        user_id: user_id,
        patient_name: patient_name,
        birth_place: birth_place,
        birth_date: birth_date,
        address: address,
        gender: gender,
        complaints: complaints,
      });
      alert("Success Registering Patient");
      setLoading(false);
      navigate("/superadmin");
    } catch (error) {
      alert("Failed Registering Patient");
    }
  };

  const doctorDropdownEvent = (item) => {
    setuser_id(item.user_id);
  };

  return (
    <>
      <NavbarSuperAdmin />
      <Container>
        <Row>
          <Col md={5} style={{ height: "80vh" }}>
            <Container className="h-100 d-flex align-items-center justify-content-center w-100">
              <Form
                action=""
                method="POST"
                encType=""
                onSubmit={(event) => {
                  event.preventDefault();
                  handleSubmit();
                }}
              >
                <Col md={6}>
                  <h3>Register Patient</h3>
                </Col>
                <Row>
                  <Col md={6}>
                    <Form.Group className="mt-2">
                      <Form.Label>Full Name</Form.Label>
                      <Form.Control
                        type="text"
                        id="patient_name"
                        placeholder="Full Name"
                        required
                        onChange={(event) =>
                          setpatient_name(event.target.value)
                        }
                        disabled={loading}
                      />
                    </Form.Group>
                  </Col>
                  <Col md={6}>
                    <Form.Group className="mt-2 text-start">
                      <Form.Label>Gender</Form.Label>
                      <select class="form-select" aria-label=""
                        onChange={(event) =>
                          setgender(event.target.value)
                        }
                        disabled={loading}
                      >
                        <option selected disabled>
                          Select Gender
                        </option>
                        <option value="Male">Male</option>
                        <option value="Female">Female</option>
                      </select>
                    </Form.Group>
                  </Col>
                  <Col md={6}>
                    <Form.Group className="mt-2 text-start">
                      <Form.Label>Birth Place</Form.Label>
                      <Form.Control
                        type="Text"
                        id="birth_place"
                        placeholder="Birth Place"
                        required
                        onChange={(event) => setbirth_place(event.target.value)}
                        disabled={loading}
                      />
                    </Form.Group>
                  </Col>
                  <Col md={6}>
                    <Form.Group className="mt-2 text-start">
                      <Form.Label>Birth Date</Form.Label>
                      <Form.Control
                        type="date"
                        id="birth_date"
                        placeholder="Birth Date"
                        required
                        onChange={(event) => setbirth_date(event.target.value)}
                        disabled={loading}
                      />
                    </Form.Group>
                  </Col>

                  <Col md={6}>
                    <CustomListDropDown
                      onChange={doctorDropdownEvent}
                      isLoading={loading}
                    />
                  </Col>
                  <Col md={6}>
                    <Form.Group className="mt-2 text-start">
                      <Form.Label>Complaints</Form.Label>
                      <Form.Control
                        as="textarea"
                        id="keluhan"
                        placeholder="Complaints"
                        required
                        onChange={(event) => setcomplaints(event.target.value)}
                        disabled={loading}
                      />
                    </Form.Group>
                  </Col>
                  <Col md={12}>
                    <Form.Group className="mt-2 text-start">
                      <Form.Label>Address</Form.Label>
                      <Form.Control
                        as="textarea"
                        id="address"
                        placeholder="Address  "
                        required
                        onChange={(event) => setaddress(event.target.value)}
                        disabled={loading}
                      />
                    </Form.Group>
                  </Col>
                  <Form.Label> </Form.Label>
                  <Col md={12}>
                    <div className="d-grid mt-2">
                      <Button type="submit" variant="dark" disabled={loading}>
                        {loading ? (
                          <Spinner
                            as="span"
                            animation="border"
                            size="sm"
                            role="status"
                            aria-hidden="true"
                          />
                        ) : (
                          " "
                        )}
                        {loading ? "  Loading.." : "  Register"}
                      </Button>
                    </div>
                  </Col>
                </Row>
              </Form>
            </Container>
          </Col>
          <Col md={7}>
            <Container className="h-100 d-flex align-items-center justify-content-center w-100">
              <img src={register} className="img-fluid" alt="logo" />
            </Container>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default RegisterPatient;
