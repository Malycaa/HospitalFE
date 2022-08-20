import React, { useEffect, useState } from 'react';
import { Button, Container, Form } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import NavbarHome from '../components/NavbarHome';
import api from '../lib/api';

const CreateProduct = () => {
    const [name, setName] = useState('');
    const [price, setPrice] = useState(0);
    const [categories, setCategories] = useState([]);
    const [kategori, setKategori] = useState('');
    const navigate = useNavigate();

    const makeProduct = async () => {
        const form = new FormData();
        form.append('name', name);
        form.append('price', price);
        form.append('category', kategori);
        try {
            const url = `/api/v1/products/`
            const response = await api.post(url, form, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            });
            console.log(response);
            navigate('/')
        } catch (error) {
            console.log(error);
        }
    }

    const fetchcategories = async () => {
        const res = await api.get('/api/v1/category')
        setCategories([...res.data.data.categories])
      }
      useEffect(() => {
        fetchcategories()
      }, []);
      
    return (
        <>
            <NavbarHome />
            <Container>
                <Form
                    className='mt-md-6' style={{ paddingBottom: '22%' }}
                    action=""
                    method="POST"
                    encType=""
                    onSubmit={e => { e.preventDefault(); makeProduct() }}>
                    <Form.Group className="mb-3 mt-4">
                        <Form.Label>Nama Produk</Form.Label>
                        <Form.Control type="text" id="namaProduk" onChange={e => setName(e.target.value)} value={name} placeholder="Nama Produk" required />
                    </Form.Group>

                    <Form.Group className="mb-3">
                        <Form.Label>Harga Produk</Form.Label>
                        <Form.Control type="text" id="hargaProduk" onChange={e => setPrice(e.target.value)} value={price} placeholder="Rp 0,00" required />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicCategory">
                        <Form.Label>Kategori</Form.Label>
                        <Form.Select type="text" id="kategoriProduk" onChange={e => setKategori(e.target.value)} value={kategori} placeholder="Pilih Kategori" className="formRounded" required>
                            <option value="" selected>Pilih Kategori</option>
                            {categories.map((category, index) => {
                                return (
                                    <option key={index} value={category.id}>{category.name}</option>
                                )
                            })}
                        </Form.Select>
                    </Form.Group>

                    <Button variant='warning' type='submit'> Terbitkan </Button>
                </Form>
            </Container>
        </>
    )
}

export default CreateProduct