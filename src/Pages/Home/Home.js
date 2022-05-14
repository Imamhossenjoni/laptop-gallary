import React from 'react';
import Products from '../Products/Products';
import Bannner from '../Banner/Bannner'
import CommentArea from '../CommentArea/CommentArea';
import Thanks from '../Thanks/Thanks';

const Home = () => {
    return (
        <div>
            <Bannner></Bannner>
            <Products></Products>
            <CommentArea></CommentArea>
            <Thanks></Thanks>
        </div>
    );
};
export default Home;