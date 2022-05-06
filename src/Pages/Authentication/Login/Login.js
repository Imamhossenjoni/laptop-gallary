import React, { useState } from 'react';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button';
import auth from '../../../firebase.init';
import { useLocation, useNavigate } from 'react-router-dom';
const Login = () => {
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [agree, setAgree] = useState(false);

    const location = useLocation();
    const navigate = useNavigate();
    const from = location?.state?.from.pathname || '/home'
    if(user){
        navigate(from,{replace:true});
    }
    const handleBlurEmail = event => {
        setEmail(event.target.value);
    }
    const handleBlurPass = event => {
        setPassword(event.target.value);
    }
    const handleAgree = () => {
        setAgree(!agree);
    }
    const handleSubmit = event => {
        event.preventDefault();
        signInWithEmailAndPassword(email, password);

    }
    return (
        <div>

            <div className='w-50 mx-auto'>
                <h2 className='text-primary'>Please Login </h2>
                <Form onSubmit={handleSubmit}>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Enter  Your Email</Form.Label>
                        <Form.Control onBlur={handleBlurEmail} type="email" placeholder="Enter email" />
                        <Form.Text className="text-muted">
                        </Form.Text>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Enter Your Password</Form.Label>
                        <Form.Control onBlur={handleBlurPass} type="password" placeholder="Password" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicCheckbox">
                        <Form.Check onClick={handleAgree} type="checkbox" id='' label="Are You wanna Login?" />
                    </Form.Group>
                    <Button disabled={!agree} variant="primary" type="submit">
                        Login
                    </Button>
                </Form>
            </div>
        </div>
    );
};

export default Login;