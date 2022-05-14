import React, { useState, useEffect } from 'react';
import axios from 'axios'
import { useAuthState } from 'react-firebase-hooks/auth'
import auth from '../../firebase.init'
import { useParams } from 'react-router-dom';
import './Order.css'

const Order = () => {
    const { productId } = useParams();
    const [user] = useAuthState(auth)
    const [orders, setOrders] = useState([]);
    console.log(orders);
    const handleDelete = id => {
        const proceed = window.confirm('Are you sure .?');
        if (proceed) {
            const url = `http://localhost:4001/order/${id}`;
            fetch(url, {
                method: 'DELETE',
            })
                .then(req => req.json())
                .then(data => {
                    console.log(data);
                    const remaining = orders.filter(order => order._id !== id);
                    setOrders(remaining);
                })
        }
    }
    console.log(orders);
    useEffect(() => {
        const getOrders = async () => {
            const email = user?.email;
            const url = `http://localhost:4001/order?email=${email}`;
            const { data } = await axios.get(url);
            setOrders(data)
        }
        getOrders();
    }, [user])
    return (
        <div>
            <h1 className='text-center text-primary' >Your Orders:{orders.length}</h1>
            <div className='order-container mt-3'>
                {
                    orders.map(order => <div className='order text-center' key={order._id}>
                        <h4>Name:{order.product}</h4>
                        <p>Price:{order.price}</p>
                        <p>Phone:{order.phone}</p>
                        <p className='orange'>Address:{order.address}</p>
                        <h5><button onClick={() => handleDelete(order._id)} className='btn btn-primary'>Delete</button></h5>
                    </div>)
                }
            </div>
        </div>
    );
};
export default Order;