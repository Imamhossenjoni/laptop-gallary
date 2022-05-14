import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import useProducts from '../../hooks/useProducts'
import './ManageServices.css'
const ManageServices = () => {
    const [products, setProducts] = useProducts();
    const handleDelete = id => {
        const proceed = window.confirm('Are you sure .?');
        if (proceed) {
            const url = `https://sheltered-thicket-84216.herokuapp.com/laptops/${id}`;
            fetch(url, {
                method: 'DELETE',
            })
                .then(req => req.json())
                .then(data => {
                    console.log(data);
                    const remaining = products.filter(product => product._id !== id);
                    setProducts(remaining);
                })
        }
    }
    return (
        <div >
            <h2 className='text-success text-center mt-3 mb-3'>Manage Your Products </h2>
            <div className='manage-products'>
                {
                    products.map(product => <div className='border mb-5 border-rounded text-center' key={product._id}>
                        <img height={'250px'} src={product.img} alt=''></img>
                        <h5>Name:{product?.name}</h5>
                        <p>Price:{ product?.price}</p>
                        <p>Quantity:{ product?.quantity}</p>
                        <p>Discription:{ product?.discription}</p>
                        <p>Suplier Name:{ product?.supplier_name}</p>
                        <h5><button onClick={() => handleDelete(product._id)} className='btn btn-primary'>Delete</button></h5>
                    </div>)
                }
            </div>
        </div>
    );
};
export default ManageServices;