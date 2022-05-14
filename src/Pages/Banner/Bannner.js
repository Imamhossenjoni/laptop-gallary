import React from 'react';
import img1 from '../../images/a-3-500x500.webp'
import './Banner.css'

const Bannner = () => {
    return (
        <div className='banner-section'>
            <div className='orange'>
                <h1>WelCome to Our Laptop Gallary.</h1>
                <p className='text-primary fs-2'>You can buy any latest computer from here.</p>
                <small className='text-success'>Click this button for see all products</small><br></br>
                <button className='btn btn-primary mt-3'> See All..</button>
            </div>
            <div>
                <img height={'300px'} src={img1} alt=''></img>
            </div>
        </div>
    );
};

export default Bannner;