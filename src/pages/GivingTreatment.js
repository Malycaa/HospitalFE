import React, { useState } from 'react'
import { Button, Container, Form, Row, Col, Image } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import api from '../lib/api';
import { setToken } from '../reducers/token-store';
import register from '../register.jpg'
import NavbarDoctor from '../components/NavbarDoctors';


const GivingTreatment = () => {
  const [namapenyakit, setnamapenyakit] = useState("");
  const [dosis, setdosis] = useState("");
  const [penyakitdesc, setpenyakitdesc] = useState("");
  const [penanganan, setpenanganan] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleSubmit = async () => {
    try {
      const url = `/api/v1/user/login`;
      const response = await api.post(url, {
        namapenyakit: namapenyakit,
        dosis: dosis,
        penyakitdesc: penyakitdesc,
        penanganan: penanganan

      });
      dispatch(setToken(response.data.data))
      navigate("/");
      console.log(response);
    } catch (error) {
      alert("Ga bisa masuk");
    }

  }

  return (
    <>
      <NavbarDoctor />
      <Container>
        <Row>
          <Col md={5} style={{ height: '80vh' }}>
            <Container className="h-100 d-flex align-items-center justify-content-center w-100">
              <Form
                action=''
                method='POST'
                encType=''
                onSubmit={(event) => { event.preventDefault(); handleSubmit() }}>
                <Row>
                  <Col md={6}>
                    <Form.Group className='mt-2 text-center'>
                      <Form.Label>Nama Penyakit</Form.Label>
                      <Form.Control
                        type='text'
                        id='namapenyakit'
                        placeholder='namapenyakit'
                        required
                        onChange={event => setnamapenyakit(event.target.value)} />
                    </Form.Group>
                  </Col>
                  <Col md={6}>
                    <Form.Group className='mt-2 text-center'>
                      <Form.Label>Dosis</Form.Label>
                      <Form.Control
                        type='text'
                        id='dosis'
                        placeholder='dosis'
                        required
                        onChange={event => setdosis(event.target.value)} />
                    </Form.Group>
                  </Col>
                  <Col md={6}>
                    <Form.Group className='mt-2 text-center'>
                      <Form.Label>Penyakit Desc</Form.Label>
                      <Form.Control
                        as='textarea'
                        id='penyakitdesc'
                        placeholder='Input penyakitdesc'
                        required
                        onChange={event => setpenyakitdesc(event.target.value)} />
                    </Form.Group>
                  </Col>
                  <Col md={6}>
                    <Form.Group className='mt-2 text-center'>
                      <Form.Label>Penanganan</Form.Label>
                      <Form.Control
                        as='textarea'
                        id='penanganan'
                        placeholder='penanganan'
                        required
                        onChange={event => setpenanganan(event.target.value)} />
                    </Form.Group>
                  </Col>
                  <Col md={12}>
                    <div className='d-grid mt-2'>
                      <Button type='submit' variant="dark"> Submit </Button>
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

export default GivingTreatment