import React, { useState } from 'react'
import { Button, Container, Form, Row, Col, Image, Spinner } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import api from '../lib/api';
import { setToken } from '../reducers/token-store';
import register from '../register.jpg'


const EditUser = () => {
  const [username, setusername] = useState("");
  const [full_name, setfull_name] = useState("");
  const [age, setage] = useState("");
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [gender, setgender] = useState("");
  const [address, setaddress] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  // const dispatch = useDispatch();

  const handleSubmit = async () => {
    try {
      const url = `/api/account/updateUser`;
      const response = await api.put(url, {
        username: username,
        full_name: full_name,
        age: age,
        email: email,
        password: password,
        gender: gender,
        address: address
      });
      // dispatch(setToken(response.data.data))
      alert("Success Edited")
      setLoading(false);
      let role = response.data.data.role
      console.log(response)
      console.log(role)
      const ls = require('localstorage-ttl')
      ls.set('user', response.data.data);

      if (role === "USER_TYPE_ADMIN") {
        navigate("/SuperAdmin");
      } else {
        navigate("/Doctors");
      }
    } catch (error) {
      alert("failed register");
    }

  }

  return (
    <>
      <Container>
        <Row>
          <Col md={5} style={{ height: '100vh' }}>
            <Container className="h-100 d-flex align-items-center justify-content-center w-100">
              <Form
                action=''
                method='PUT'
                encType=''
                onSubmit={(event) => { event.preventDefault(); handleSubmit() }}>
                <Row>
                  <Col md={6}>
                    <Form.Group className='mt-2 text-center'>
                      <Form.Label>username</Form.Label>
                      <Form.Control
                        type='text'
                        id='username'
                        placeholder='User Name'
                        required
                        onChange={event => setusername(event.target.value)}
                        disabled={loading} />
                    </Form.Group>
                  </Col>
                  <Col md={6}>
                    <Form.Group className='mt-2 text-center'>
                      <Form.Label>Full Name</Form.Label>
                      <Form.Control
                        type='text'
                        id='full_name'
                        placeholder='Full Name'
                        required
                        onChange={event => setfull_name(event.target.value)}
                        disabled={loading} />
                    </Form.Group>
                  </Col>
                  <Col md={6}>
                    <Form.Group className='mt-2 text-center'>
                      <Form.Label>Age</Form.Label>
                      <Form.Control
                        type='text'
                        id='age'
                        placeholder='Age'
                        required
                        onChange={event => setage(event.target.value)}
                        disabled={loading} />
                    </Form.Group>
                  </Col>
                  <Col md={6}>
                    <Form.Group className='mt-2 text-center'>
                      <Form.Label>Email</Form.Label>
                      <Form.Control
                        type='email'
                        id='email'
                        placeholder='Email'
                        required
                        onChange={event => setemail(event.target.value)}
                        disabled={loading} />
                    </Form.Group>
                  </Col>
                  <Col md={6}>
                    <Form.Group className='mt-2 text-center'>
                      <Form.Label>Password</Form.Label>
                      <Form.Control
                        type='password'
                        id='password'
                        placeholder='Password'
                        required
                        onChange={event => setpassword(event.target.value)}
                        disabled={loading} />
                    </Form.Group>
                  </Col>
                  <Col md={6}>
                    <Form.Group className='mt-2 text-center'>
                      <Form.Label>Gender</Form.Label>
                      <Form.Select type='text'
                        id='gender'
                        required
                        onChange={event => setgender(event.target.value)}
                        disabled={loading}>
                        <option selected disabled>Choose your gender</option>
                        <option value="Male">Male</option>
                        <option value="Female">Female</option>
                      </Form.Select>
                    </Form.Group>
                  </Col>
                  <Col md={12}>
                    <Form.Group className='mt-2 text-center'>
                      <Form.Label>Address</Form.Label>
                      <Form.Control
                        as='textarea'
                        id='address'
                        placeholder='Address'
                        required
                        onChange={event => setaddress(event.target.value)}
                        disabled={loading} />
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
  )
}

export default EditUser