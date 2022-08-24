import React, { useState } from 'react'
import { Button, Col, Container, Form, Row } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import api from '../lib/api';
import { setToken } from '../reducers/token-store';

const LoginPage = () => {
    const [username, setusername] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();
    // const dispatch = useDispatch();

    const handleSubmit = async () => {
        try {
            const url = `/api/auth/signin`;
            const response = await api.post(url, {
                username: username,
                password: password
            });
            let role = response.data.data.role
            console.log(response)
            console.log(role)
            const ls = require('localstorage-ttl')
            ls.set('user', response.data.data);

            if (role == "USER_TYPE_ADMIN") {
                navigate("/SuperAdmin");
            } else {
                navigate("/Doctors");
            }
            // dispatch(setToken(response.data.data))
            // if (roles === "USER_TYPE_ADMIN") {
            //     navigate("/superadmin");
            // } else {
            //     navigate("/doctor");
            // }
            // console.log(response);
        } catch (error) {
            alert(error);
        }

    }

    return (
        <>
            <Container style={{ height: '100vh' }}>


                <Container className="h-100 d-flex align-items-center justify-content-center w-25">
                    <Form
                        action=''
                        method='POST'
                        encType=''
                        onSubmit={(event) => { event.preventDefault(); handleSubmit() }}>
                        <Form.Group className='mt-2 text-center'>
                            <Form.Label>Username</Form.Label>
                            <Form.Control
                                type='text'
                                id='username'
                                placeholder='username'
                                required
                                onChange={event => setusername(event.target.value)} />
                        </Form.Group>
                        <Form.Group className='mt-2 text-center'>
                            <Form.Label>Password</Form.Label>
                            <Form.Control
                                type='password'
                                id='password'
                                placeholder='Input Password'
                                // required
                                onChange={event => setPassword(event.target.value)} />
                        </Form.Group>
                        <div className='d-grid mt-2'>
                            <Button type='submit' variant="dark"> Masuk </Button>
                        </div>
                    </Form>
                </Container>


            </Container>
        </>
    )
}

export default LoginPage