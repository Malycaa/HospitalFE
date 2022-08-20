import React, { useEffect, useState } from 'react'
import { Button, Card, Col, Container, Row } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import NavbarHome from '../components/NavbarHome';
import api from '../lib/api';

const Products = () => {
    const [products, setProducts] = useState([]);
    const navigate = useNavigate();

    const getProducts = async () => {
        try {
            const url = `/api/v1/products/?sold=false`
            const response = await api.get(url);
            const payload = [...response?.data?.data?.products];
            setProducts(payload);
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        getProducts();
    }, [])


    return (
        <>
            <NavbarHome />
            <h1>Products</h1>
            <Container>
                <Row>
                    {products.map((item, idx) => (
                        <Col key={idx} lg={3} className="mb-3">
                            <Card>
                                <Card.Body my={6}>
                                    <Card.Title>
                                        <b>{item?.name}</b>
                                    </Card.Title>
                                    <Card.Subtitle>
                                        <p>{item?.categoryId?.name || `-`}</p>
                                    </Card.Subtitle>
                                    <Card.Text>Harga: {item?.price}</Card.Text>
                                    <Button
                                        variant="warning"
                                        onClick={() => navigate(`/product/${item.id}`)}
                                    >
                                        Product Detail
                                    </Button>
                                </Card.Body>
                            </Card>
                        </Col>
                    ))}
                </Row>
            </Container>
        </>
    )
}

export default Products