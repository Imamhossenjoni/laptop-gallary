import React, { useState } from 'react';
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button';
import auth from '../../../firebase.init';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import SocialLogin from '../SocialLogin/SocialLogin';
import { Spinner } from 'react-bootstrap';
import { toast,ToastContainer } from 'react-toastify';
const Login = () => {
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);
    const [sendPasswordResetEmail, sending] = useSendPasswordResetEmail(auth);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [agree, setAgree] = useState(false);

    const location = useLocation();
    const navigate = useNavigate();
    const from = location?.state?.from?.pathname || '/home'
    if (user) {
        navigate(from, { replace: true });
        // navigate(from)
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
    const resetPassword = async () => {
        await sendPasswordResetEmail(email);
        toast('Sent email');
    }
    if (loading) {
        // return <Spinner animation="border" role="status"> </Spinner>
        return <div className='container mt-3 text-center'>
            <div className='spinner-border text-primary'></div>
        </div>
    }
    // if (user) {
    //     navigate(from, { replace: true });
    // }
    //handle navigate register
    const navigateRegister = (event) => {
        navigate('/register')
    }
    //error handle
    let errorElement;
    if (error) {
        console.log(error);
        errorElement =
            <>
                <p className='text-danger'>{error?.message}</p>
            </>
    }
    return (

        <div className='w-50 mx-auto'>
            <h2 className='text-primary mt-5'>Please Login </h2>
            <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label className='mt-2'> Enter  Your Email</Form.Label>
                    <Form.Control onBlur={handleBlurEmail} type="email" placeholder="Enter email" />
                    <Form.Text className="text-muted">
                    </Form.Text>
                    <ToastContainer></ToastContainer>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Enter Your Password</Form.Label>
                    <Form.Control onBlur={handleBlurPass} type="password" placeholder="Password" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check onClick={handleAgree} type="checkbox" id='' className='text-primary' label="Are You wanna Login?" />
                </Form.Group>
                {/* <p className='text-danger'>{error && 'auth/wrong-password'}</p> */}
                {errorElement}
                <Button disabled={!agree} variant="primary" type="submit">
                    Login
                </Button>
            </Form>
            {/* {errorElement} */}
            <p>New to Laptop Gallary? <Link to='/register' className='text-primary pe-auto text-decoration-none' onClick={navigateRegister}>Please Register</Link></p>
            <p>Forget Password? <button className='btn btn-link text-primary pe-auto text-decoration-none' onClick={resetPassword}>Reset Password</button></p>
            <SocialLogin></SocialLogin>
        </div>

    );
};

export default Login;