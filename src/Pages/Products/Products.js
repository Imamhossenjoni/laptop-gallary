import React, { useEffect, useState } from 'react';
import useProducts from '../../hooks/useProducts';
import Product from '../Product/Product';
import './Products.css'

const Products = () => {
    const [products]=useProducts()

    return (
        <div className='products-container'>
            {
                products.slice(0,6).map(product=><Product key={product._id}  product={product}></Product>)
            }
        </div>
    );
};

export default Products;