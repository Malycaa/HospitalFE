import React, { useState } from "react";
import { Button, Container, Form, Row, Col, Spinner } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import api from "../lib/api";
import { setToken } from "../reducers/token-store";
import register from "../register.jpg";
import NavbarSuperAdmin from "../components/NavbarSuperAdmin";

const RegisterDoctors = () => {
  const [loading, setLoading] = useState(false);
  const [username, setusername] = useState("");
  const [full_name, setfull_name] = useState("");
  const [age, setage] = useState("");
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [gender, setgender] = useState("");
  const [address, setaddress] = useState("");
  const navigate = useNavigate();
  // const dispatch = useDispatch();

  const handleSubmit = async () => {
    try {
      setLoading(true);
      const url = `/api/account/addDoctor`;
      const response = await api.post(url, {
        username: username,
        full_name: full_name,
        age: age,
        email: email,
        password: password,
        gender: gender,
        address: address,
      });
      alert("Success Registering Admin");
      setLoading(false);
      navigate("/superadmin");
    } catch (error) {
      alert("failed register");
    }
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
                  <h3>Register Doctor</h3>
                </Col>
                <Row>
                  <Col md={6}>
                    <Form.Group className="mt-2 text-starts">
                      <Form.Label>Username</Form.Label>
                      <Form.Control
                        type="text"
                        id="username"
                        placeholder="User Name"
                        required
                        disabled={loading}
                        onChange={(event) => setusername(event.target.value)}
                      />
                    </Form.Group>
                  </Col>
                  <Col md={6}>
                    <Form.Group className="mt-2 text-starts">
                      <Form.Label>Fullname</Form.Label>
                      <Form.Control
                        type="text"
                        id="full_name"
                        placeholder="Fullname"
                        required
                        disabled={loading}
                        onChange={(event) => setfull_name(event.target.value)}
                      />
                    </Form.Group>
                  </Col>
                  <Col md={6}>
                    <Form.Group className="mt-2 text-starts">
                      <Form.Label>Age</Form.Label>
                      <Form.Control
                        type="text"
                        id="age"
                        placeholder="Age"
                        required
                        disabled={loading}
                        onChange={(event) => setage(event.target.value)}
                      />
                    </Form.Group>
                  </Col>
                  <Col md={6}>
                    <Form.Group className="mt-2 text-starts">
                      <Form.Label>Email</Form.Label>
                      <Form.Control
                        type="email"
                        id="email"
                        placeholder="Email"
                        required
                        disabled={loading}
                        onChange={(event) => setemail(event.target.value)}
                      />
                    </Form.Group>
                  </Col>
                  <Col md={6}>
                    <Form.Group className="mt-2 text-starts">
                      <Form.Label>Password</Form.Label>
                      <Form.Control
                        type="password"
                        id="password"
                        placeholder="Password"
                        required
                        disabled={loading}
                        onChange={(event) => setpassword(event.target.value)}
                      />
                    </Form.Group>
                  </Col>
                  <Col md={6}>
                    <Form.Group className="mt-2 text-starts">
                      <Form.Label>Gender</Form.Label>
                      <Form.Select
                        type="text"
                        id="gender"
                        required
                        disabled={loading}
                        onChange={(event) => setgender(event.target.value)}
                      >
                        <option selected disabled>
                          Choose your gender
                        </option>
                        <option value="Male">Male</option>
                        <option value="Female">Female</option>
                      </Form.Select>
                    </Form.Group>
                  </Col>
                  <Col md={12}>
                    <Form.Group className="mt-2 text-starts">
                      <Form.Label>Address</Form.Label>
                      <Form.Control
                        as="textarea"
                        id="address"
                        placeholder="Address"
                        required
                        disabled={loading}
                        onChange={(event) => setaddress(event.target.value)}
                      />
                    </Form.Group>
                  </Col>
                  <Form.Label> </Form.Label>
                  <Col md={12}>
                    <div className="d-grid mt-2">
                      <Button type="submit" variant="dark">
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

export default RegisterDoctors;
