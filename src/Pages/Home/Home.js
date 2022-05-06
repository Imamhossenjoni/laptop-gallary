import React from 'react';
import Login from '../Authentication/Login/Login';
import Header from '../Header/Header';
import Product from '../Product/Product';
import Products from '../Products/Products';

const Home = () => {
    return (
        <div>
            <Header></Header>
            <Products></Products>
        </div>
    );
};

export default Home;