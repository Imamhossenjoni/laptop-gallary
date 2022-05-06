import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const ProductDetails = () => {
    const {productId}=useParams();
    const [product,setProduct]=useState({});
    useEffect(()=>{
        const url=`http://localhost:5000/laptops/${productId}`
        fetch(url)
        .then(res=>res.json())
        .then(data=>setProduct(data));
    },[])
    return (
        <div>
            <h1>Your selected product is :{product.name} </h1>
        </div>
    );
};

export default ProductDetails;