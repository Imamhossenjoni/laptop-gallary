import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Product.css'

const Product = ({ product }) => {
    const { _id, name, img, price, discription, quantity,supplier_name } = product;
    const navigate = useNavigate();
    const handleManage = id => {
        navigate(`/product/${id}`)
    }
    return (
        <div className='product-container mt-5 mx-auto w-100'>
            <img className='img' src={img} alt=''></img>
            <div className='product-info mt-3 ms-3'>
                <h5>Name:{name}</h5>
                <p>Price:{price}</p>
                <p>Quantity:{quantity}</p>
                <p>Discription:{discription}</p>
                <p>Supplier Name:{supplier_name}</p>
                <button className='btn btn-primary' onClick={() => handleManage(_id)}>Manage</button>
            </div>
        </div>
    );
};

export default Product;