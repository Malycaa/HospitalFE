import React, { useEffect, useState } from 'react';
import NavbarHome from '../components/NavbarHome';
import { useNavigate } from 'react-router-dom';
import { Button } from 'react-bootstrap'
import api from '../lib/api';

const Home = () => {
    const [cities, setCities] = useState([]);
    const navigate = useNavigate();
    const fetchcities = async () => {
        try {
            const url = `/api/v1/city/`;
            const response = await api.get(url);
            const payload = [...response?.data?.data?.cities];
            console.log(payload);
            setCities(payload);

        } catch (error) {
            alert(error)
        }
    }

    const jual = () => {
        navigate("/create-product")
    }

    useEffect(() => {
        fetchcities();
    }, [])

    return (
        <>
            <NavbarHome />
            <div>Home</div>
            <h1>Kota</h1>
            {cities.map(item => (
                <div key={item.id}>
                    <ul>
                        <li>{item?.name}</li>
                    </ul>
                </div>
            )
            )}
            <Button
                variant="warning"
                onClick={() => { jual() }}
            >
                Jual
            </Button>
        </>
    )
}

export default Home