import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useParams } from 'react-router-dom';
import auth from '../../firebase.init';
import { useEffect, useState } from "react"
import { ToastContainer, toast } from 'react-toastify';
import axios from "axios";
import useProductDetails from '../../hooks/useProductDetails';

const CheakOut = () => {
    const { productId } = useParams();
    const [product] = useProductDetails(productId);
    const [user] = useAuthState(auth);
    console.log(user);
    const handlePlaceOrder = event => {
        event.preventDefault();
        const order = {
            email: user?.email,
            product: product.name,
            price:product.price,
            productId: productId,
            address: event.target.address.value,
            phone: event.target.phone.value
        }
        axios.post('https://sheltered-thicket-84216.herokuapp.com/order', order)
            .then(response => {
                console.log(response);
                const { data } = response;
                console.log(data);
                if (data.insertedId) {
                    // alert('Your order is booked');
                    toast('Your order is Booked!!!')
                }
            })
            
    }
    return (
        <div className='w-50 mx-auto'>
            <h4 className='mx-auto text-center text-primary mt-3 mb-3'>You Selected Item is :<span className='orange'>{product?.name}</span></h4>
            {/* <img src={user.photoURL}></img> */}
            <form onSubmit={handlePlaceOrder}>
                <input className='w-100 mx-auto  mb-2 ' value={user?.displayName} type='text' name='name' placeholder='name' required readOnly></input><br />
                <input className='w-100 mx-auto mb-2' value={user?.email} type='email' name='email' placeholder='email' required disabled></input><br />
                <input className='w-100 mx-auto mb-2' type='text' value={product?.name} name='product' placeholder='product' required></input><br />
                <input className='w-100 mx-auto mb-2' type='number' value={product?.price} name='price' placeholder='price' required></input><br />
                <input className='w-100 mx-auto mb-2' value={user?.address} type='text' name='address' placeholder='address' required></input><br />
                <input className='w-100 mx-auto mb-2' value={user?.phone} type='number' name='phone' placeholder='phone' autoComplete='off' required></input><br />
                <input className='btn btn-primary' type='submit' value='place Order'></input>
            </form>
            <ToastContainer></ToastContainer>
        </div>
    );
};

export default CheakOut;