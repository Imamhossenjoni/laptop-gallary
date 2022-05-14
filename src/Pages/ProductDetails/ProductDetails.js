import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import './ProductDetails.css'
import useProductDetails from '../../hooks/useProductDetails'
// import useProductDetails from '../../../hooks/useProductDetails';

const ProductDetails = () => {
    const { productId } = useParams();
    console.log(productId)
    const [product] = useProductDetails(productId);
    const handleDelivared=()=>{
    
        const quantity=(product.quantity)-1;
        const updatedQuantity={quantity};
        //send data from client to server
        const  url=`https://sheltered-thicket-84216.herokuapp.com/laptops/${productId}`
        fetch(url,{
            method:'PUT',
            headers:{
                'content-type':'application/json'
            },
            body:JSON.stringify(updatedQuantity)
        })
        .then(res=>res.json())
        .then(data=>{
            console.log(data);
            alert('Success');
        })
    }
    //handle ReStock
    const handleReStock = event => {
        event.preventDefault();
        const stockQuantity=event.target.quantity.value;
        const quantity=parseInt(stockQuantity)+parseInt(product?.quantity)
        const updatedQuantity={quantity};
        console.log(updatedQuantity);
        //send data from client to server
        const  url=`https://sheltered-thicket-84216.herokuapp.com/laptops/${productId}`
        fetch(url,{
            method:'PUT',
            headers:{
                'content-type':'application/json'
            },
            body:JSON.stringify(updatedQuantity)
        })
        .then(res=>res.json())
        .then(data=>{
            console.log(data);
            alert('Success');
        })
    }
    return (
        <div >
            <div className='product-details mt-5 mx-auto text-center mb-3 w-50'>
                <img className='img ' src={product?.img} alt=''></img>
                <div className='product-info mt-3 ms-3'>
                    <h5>Name:{product.name}</h5>
                    <p>Price:{product.price}</p>
                    <p>Quantity:{product.quantity}</p>
                    <p>Discription:{product.discription}</p>
                    <p>Supplier Name:{product.supplier_name}</p>
                    <p>Now:{product.quantity>0?'Avalable':'stock out'}</p>
                    <form onSubmit={handleReStock}>
                        <input type='text' name='name' placeholder='Stock Your Products' required></input>
                        <input type='submit' value='Stock'></input>
                    </form><br />
                    <button onClick={handleDelivared} className='btn btn-primary ms-5 mb-2'>Delevaried</button><br/>
                    <Link to={`/cheakout/${productId}`}>
                        <button className='btn btn-primary mb-2'>Procced CheakOut</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default ProductDetails;