import React from 'react';
import { Link } from 'react-router-dom';

const ManageService = ({ mProduct,handleDelete}) => {
    const {_id,name,price,quantity,discription,img,supplier_name}=mProduct;
    
    return (

        <div className='product-container mt-5 mx-auto w-100'>
            <img className='img' src={img} alt=''></img>
            <div className='product-info mt-3 ms-3'>
                <h5>Name:{name}</h5>
                <p>Price:{price}</p>
                <p>Quantity:{quantity}</p>
                <p>Discription:{discription}</p>
                <p>Suplier Name:{supplier_name}</p>
            </div>
        </div>
    );
};

export default ManageService;