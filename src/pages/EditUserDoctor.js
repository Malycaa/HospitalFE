import React, { useState, useEffect } from 'react'
import { Button, Container, Form, Row, Col, Image, Spinner } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import api from '../lib/api';
import { setToken } from '../reducers/token-store';
import register from '../register.jpg'
import NavbarDoctor from '../components/NavbarDoctors';


const EditUser = () => {
  const [data, setdata] = useState({})
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

      const url = `/api/account/updateDoctor`;
      const response = await api.put(url, {
        user_id: data.user_id,
        username: username === '' ? data.username : username,
        full_name: full_name === '' ? data.full_name : full_name,
        age: age === '' ? data.age : age,
        email: email === '' ? data.email : email,
        password: password === '' ? data.password : password,
        gender: gender === '' ? data.gender : gender,
        address: address === '' ? data.address : address,
      });
      const user = response.data.data
      // dispatch(setToken(response.data.data))
      alert("Success Edited")
      setLoading(false);
      navigate("/Doctors");
    } catch (error) {
      alert("failed register");
    }

  }
  useEffect(() => {
    const ls = require('localstorage-ttl')
    const storage = ls.get('user');
    setdata(storage)
  }, [])


  return (
    <>
      <NavbarDoctor />
      <Container>
        <Row>
          <Col md={5} style={{ height: '80vh' }}>
            <Container className="h-100 d-flex align-items-center justify-content-center w-100">
              <Form
                action=''
                method='PUT'
                encType=''
                onSubmit={(event) => { event.preventDefault(); handleSubmit() }}>
                <Row>
                  <Col md={6}>
                    <Form.Group className='mt-2 '>
                      <Form.Label>Username</Form.Label>
                      <Form.Control
                        type='text'
                        id='username'
                        placeholder='User Name'
                        defaultValue={data.username ?? ''}
                        required
                        onChange={event => setusername(event.target.value)}
                        disabled={loading} />
                    </Form.Group>
                  </Col>
                  <Col md={6}>
                    <Form.Group className='mt-2 '>
                      <Form.Label>Full Name</Form.Label>
                      <Form.Control
                        type='text'
                        id='full_name'
                        placeholder='Full Name'
                        defaultValue={data.full_name}
                        required
                        onChange={event => setfull_name(event.target.value)}
                        disabled={loading} />
                    </Form.Group>
                  </Col>
                  <Col md={6}>
                    <Form.Group className='mt-2 '>
                      <Form.Label>Age</Form.Label>
                      <Form.Control
                        type='text'
                        id='age'
                        placeholder='Age'
                        defaultValue={data.age}
                        required
                        onChange={event => setage(event.target.value)}
                        disabled={loading} />
                    </Form.Group>
                  </Col>
                  <Col md={6}>
                    <Form.Group className='mt-2 '>
                      <Form.Label>Email</Form.Label>
                      <Form.Control
                        type='email'
                        id='email'
                        placeholder='Email'
                        defaultValue={data.email}
                        required
                        onChange={event => setemail(event.target.value)}
                        disabled={loading} />
                    </Form.Group>
                  </Col>
                  <Col md={6}>
                    <Form.Group className='mt-2 '>
                      <Form.Label>Password</Form.Label>
                      <Form.Control
                        type='password'
                        id='password'
                        placeholder='Password'
                        onChange={event => setpassword(event.target.value)}
                        disabled={loading} />
                    </Form.Group>
                  </Col>
                  <Col md={6}>
                    <Form.Group className='mt-2 '>
                      <Form.Label>Gender</Form.Label>
                      <Form.Select type='text'
                        id='gender'
                        required
                        onChange={event => setgender(event.target.value)}
                        disabled={loading}>
                        <option selected disabled >{data.gender}</option>
                        <option value="Male">Male</option>
                        <option value="Female">Female</option>
                      </Form.Select>
                    </Form.Group>
                  </Col>
                  <Col md={12}>
                    <Form.Group className='mt-2 '>
                      <Form.Label>Address</Form.Label>
                      <Form.Control
                        as='textarea'
                        id='address'
                        placeholder='Address'
                        defaultValue={data.address}
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
  )
}

export default EditUser