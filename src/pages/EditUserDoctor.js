import React, { useState, useEffect } from "react";
import {
  Button,
  Container,
  Form,
  Row,
  Col,
  Image,
  Spinner,
} from "react-bootstrap";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import api from "../lib/api";
import { setToken } from "../reducers/token-store";
import register from "../register.jpg";
import NavbarDoctor from "../components/NavbarDoctors";
import { genderSelect } from "../lib/Utils";

const EditUser = () => {
  const [data, setdata] = useState({});
  const [username, setusername] = useState("");
  const [full_name, setfull_name] = useState("");
  const [age, setage] = useState("");
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [gender, setgender] = useState("");
  const [address, setaddress] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const ls = require("localstorage-ttl");

  // const dispatch = useDispatch();

  const handleSubmit = async () => {
    try {
      setLoading(true);
      const url = `/api/account/updateDoctor`;
      const response = await api.put(url, {
        user_id: data.user_id,
        username: username,
        full_name: full_name,
        age: age,
        email: email,
        password: password,
        gender: gender,
        address: address,
      });
      if (response.status !== 200) {
        alert("Update Failed");
        setLoading(false);
      } else {
        ls.set("user", response.data.data);
        alert("Success Edited");
        setLoading(false);
        navigate("/doctors");
      }
    } catch (error) {
      alert("Update Failed");
    }
  };
  useEffect(() => {
    const storage = ls.get("user");
    setusername(storage.username);
    setfull_name(storage.full_name);
    setage(storage.age);
    setemail(storage.email);
    setpassword(storage.password);
    setgender(storage.gender);
    setaddress(storage.address);
    setdata(storage);
  }, []);

  return (
    <>
      <NavbarDoctor />
      <Container>
        <Row>
          <Col md={5} style={{ height: "80vh" }}>
            <Container className="h-100 d-flex align-items-center justify-content-center w-100">
              <Form
                action=""
                method="PUT"
                encType=""
                onSubmit={(event) => {
                  event.preventDefault();
                  handleSubmit();
                }}
              >
                <Col md={6}>
                  <h3>Update Profile</h3>
                </Col>
                <Row>
                  <Col md={6}>
                    <Form.Group className="mt-2 ">
                      <Form.Label>Username</Form.Label>
                      <Form.Control
                        type="text"
                        id="username"
                        placeholder="User Name"
                        defaultValue={username}
                        required
                        onChange={(event) => setusername(event.target.value)}
                        disabled={loading}
                      />
                    </Form.Group>
                  </Col>
                  <Col md={6}>
                    <Form.Group className="mt-2 ">
                      <Form.Label>Full Name</Form.Label>
                      <Form.Control
                        type="text"
                        id="full_name"
                        placeholder="Full Name"
                        defaultValue={full_name}
                        required
                        onChange={(event) => setfull_name(event.target.value)}
                        disabled={loading}
                      />
                    </Form.Group>
                  </Col>
                  <Col md={6}>
                    <Form.Group className="mt-2 ">
                      <Form.Label>Age</Form.Label>
                      <Form.Control
                        type="text"
                        id="age"
                        placeholder="Age"
                        defaultValue={age}
                        required
                        onChange={(event) => setage(event.target.value)}
                        disabled={loading}
                      />
                    </Form.Group>
                  </Col>
                  <Col md={6}>
                    <Form.Group className="mt-2 ">
                      <Form.Label>Email</Form.Label>
                      <Form.Control
                        type="email"
                        id="email"
                        placeholder="Email"
                        defaultValue={email}
                        required
                        onChange={(event) => setemail(event.target.value)}
                        disabled={loading}
                      />
                    </Form.Group>
                  </Col>
                  <Col md={6}>
                    <Form.Group className="mt-2 ">
                      <Form.Label>Password</Form.Label>
                      <Form.Control
                        type="password"
                        id="password"
                        placeholder="Password"
                        required
                        onChange={(event) => setpassword(event.target.value)}
                        disabled={loading}
                      />
                    </Form.Group>
                  </Col>
                  <Col md={6}>
                    <Form.Group className="mt-2 ">
                      <Form.Label>Gender</Form.Label>
                      <Form.Select
                        type="text"
                        id="gender"
                        required
                        placeholder="Select Gender"
                        // defaultValue={response.data.data.gender}
                        onChange={(event) => setgender(event.target.value)}
                        disabled={loading}
                      >
                        <option selected disabled>
                          {gender}
                        </option>
                        <option value="Male">Male</option>
                        <option value="Female">Female</option>
                      </Form.Select>
                    </Form.Group>
                  </Col>
                  <Col md={12}>
                    <Form.Group className="mt-2 ">
                      <Form.Label>Address</Form.Label>
                      <Form.Control
                        as="textarea"
                        id="address"
                        placeholder="Address"
                        defaultValue={address}
                        required
                        onChange={(event) => setaddress(event.target.value)}
                        disabled={loading}
                      />
                    </Form.Group>
                  </Col>
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
                        {loading ? "  Loading.." : "  Update"}
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

export default EditUser;
