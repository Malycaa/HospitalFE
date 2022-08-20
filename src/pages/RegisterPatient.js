import React, { useState } from 'react'
import { Button, Container, Form, Row, Col, Image } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import api from '../lib/api';
import { setToken } from '../reducers/token-store';
import register from '../register.jpg'
import NavbarSuperAdmin from '../components/NavbarSuperAdmin';
import { CustomDropdown } from './DropDown';

const RegisterPatient = () => {
  const [user_id, setuser_id] = useState("");
  const [patient_name, setpatient_name] = useState("");
  const [birth_place, setbirth_place] = useState("")
  const [birth_date, setbirth_date] = useState("")
  const [address, setaddress] = useState("");
  const [gender, setgender] = useState("");
  const [complaints, setcomplaints] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleSubmit = async () => {
    try {
      const url = `/api/patient/addPatient`;
      const response = await api.post(url, {
        user_id: user_id,
        patient_name: patient_name,
        birth_place: birth_place,
        birth_date: birth_date,
        address: address,
        gender: gender,
        complaints: complaints
      });
      dispatch(setToken(response.data.data))
      navigate("/");
      console.log(response);
    } catch (error) {
      alert("failed register");
    }

  }

  return (
    <>
      <NavbarSuperAdmin />
      <Container>
        <Row>
          <Col md={5} style={{ height: '100vh' }}>
            <Container className="h-100 d-flex align-items-center justify-content-center w-100">
              <Form
                action=''
                method='POST'
                encType=''
                onSubmit={(event) => { event.preventDefault(); handleSubmit() }}>
                <Row>
                  <Col md={6}>
                    <Form.Group className='mt-2 text-center'>
                      <Form.Label>User Id</Form.Label>
                      <Form.Control
                        type='number'
                        id='user_id'
                        placeholder='User Id'
                        required
                        onChange={event => setuser_id(event.target.value)} />
                    </Form.Group>
                  </Col>
                  <Col md={6}>
                    <Form.Group className='mt-2 text-center'>
                      <Form.Label>Full Name</Form.Label>
                      <Form.Control
                        type='text'
                        id='patient_name'
                        placeholder='Full Name'
                        required
                        onChange={event => setpatient_name(event.target.value)} />
                    </Form.Group>
                  </Col>
                  <Col md={6}>
                    <Form.Group className='mt-2 text-center'>
                      <Form.Label>Birth Place</Form.Label>
                      <Form.Control
                        type='Text'
                        id='birth_place'
                        placeholder='Birth Place'
                        required
                        onChange={event => setbirth_place(event.target.value)} />
                    </Form.Group>
                  </Col>
                  <Col md={6}>
                    <Form.Group className='mt-2 text-center'>
                      <Form.Label>Birth Date</Form.Label>
                      <Form.Control
                        type='date'
                        id='birth_date'
                        placeholder='Birth Date'
                        required
                        onChange={event => setbirth_date(event.target.value)} />
                    </Form.Group>
                  </Col>
                  <Col md={6}>
                    <Form.Group className='mt-2 text-center'>
                      <Form.Label>gender</Form.Label>
                      <Form.Control
                        type='text'
                        id='gender'
                        placeholder='gender'
                        required
                        onChange={event => setgender(event.target.value)} />
                    </Form.Group>
                  </Col>
                  <Col md={6}>
                    <Form.Group className='mt-2 text-center'>
                      <Form.Label>Dokter</Form.Label>
                      <Form.Select type='text'
                        id='dokter'
                        placeholder='dokter'
                        required
                        onChange={event => setdokter(event.target.value)}>
                        <option selected disabled>Choose Doctor</option>
                        <option value="8">Budi Setiawan</option>

                      </Form.Select>
                    </Form.Group>

                  </Col>
                  <Col md={6}>
                    <Form.Group className='mt-2 text-center'>
                      <Form.Label>Keluhan</Form.Label>
                      <Form.Control
                        as='textarea'
                        id='keluhan'
                        placeholder='keluhan'
                        required
                        onChange={event => setkeluhan(event.target.value)} />
                    </Form.Group>
                  </Col>
                  <Col md={12}>
                    <Form.Group className='mt-2 text-center'>
                      <Form.Label>Address</Form.Label>
                      <Form.Control
                        as='textarea'
                        id='address'
                        placeholder='address'
                        required
                        onChange={event => setaddress(event.target.value)} />
                    </Form.Group>
                  </Col>
                  <Col md={12}>
                    <div className='d-grid mt-2'>
                      <Button type='submit' variant="dark"> Masuk </Button>
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

export default RegisterPatient