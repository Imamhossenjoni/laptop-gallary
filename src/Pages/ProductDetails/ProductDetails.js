import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const ProductDetails = () => {
    const {productId}=useParams();
    const [product,setProduct]=useState();
    useEffect(()=>{
        const url=`lap`
        fetch(url)
        .then(res=>res.json())
        .then(data=>setProduct(data));
    },[])
    return (
        <div>
            <h1>WelCome to my Product:{productId}</h1>
        </div>
    );
};

export default ProductDetails;