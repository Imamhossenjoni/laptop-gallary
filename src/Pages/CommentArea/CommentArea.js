import React from 'react';
import './CommentArea.css'
import commentImg from '../../images/quote.jpg'

const CommentArea = () => {
    return (
        <div className='comment-container mt-5'>
            <div>
            <img src={commentImg} alt=''></img>
            </div>
            <div>
            <input style={{width:'300px'}} type='text' name='name' placeholder='Enter Your Name'></input><br/>  <br/>
            <input style={{width:'300px'}} type='email' name='email' placeholder='Enter Your Email'></input><br/> <br/>
            <input style={{width:'300px'}} type='number' name='phone' placeholder='Enter Your Phone'></input><br/> <br/>
            <textarea style={{height:'150px', width:'300px'}} type='text' name='name' placeholder='Please Write Something about our shop:'></textarea><br/>
            <button className='btn btn-primary mx-auto'>submit</button>
            </div>
        </div>
    );
};

export default CommentArea;