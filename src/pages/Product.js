import React, { useEffect, useState } from 'react'
import api from '../lib/api'
import { useParams } from 'react-router-dom';
import NavbarHome from '../components/NavbarHome';

const Product = () => {
    const [product, setProduct] = useState({});
    const params = useParams();

    const fetchProduct = async (id) => {
        try {
            const url = `/api/v1/products/${id}`;
            const response = await api.get(url);
            const payload = { ...response?.data?.data?.product};
            setProduct(payload);
        } catch (error) {
            console.log(error);
        }

    }

    useEffect(() => {
        if (params.id) {
            fetchProduct(params.id)
        }
    }, [params.id])

    return (
        <>
            <NavbarHome />
            <div>Product</div>
            <p>Name: {product.name}</p>
            <p>Price: {product.price}</p>
            <p>Yang punya barang: {product?.ownerId?.name}</p>

        </>
    )
}

export default Product