import React, { useState } from 'react';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button';
import { useNavigate } from 'react-router-dom';

const Register = () => {
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
      ] = useCreateUserWithEmailAndPassword(auth);
    const [name,setName]=useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [error,setError]=useState('');
    const [agree, setAgree] = useState(false);
    const navigate=useNavigate();
    if(user){
        navigate('/home');
    }
    //handleNameBlur
    const handleBlurName=event=>{
        setName(event.target.value);
    }
    //handleEmailBlur
    const handleBlurEmail = event => {
        setEmail(event.target.value);
    }
    //handlePasswordBlur
    const handleBlurPass = event => {
        setPassword(event.target.value);
    }
    //handle ConfirmPassBlur
    const handleBlurConfirmPass = event => {
        setConfirmPassword(event.target.value);
    }
    //handle Agree condition
    const handleAgree = () => {
        setAgree(!agree);
    }
    //handle Submit
    const handleSubmit = event => {
        event.preventDefault();
        if(password !== confirmPassword){
            setError("Password did't match");
            return;
        }
        createUserWithEmailAndPassword(email,password);
    }
    if(loading){
        return <p>loading...</p>
    }
   

    return (
        <div>
            <div className='w-50 mx-auto'>
                <h2 className='text-primary'>Please Registration </h2>
                <Form onSubmit={handleSubmit}>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Enter  Your Name</Form.Label>
                        <Form.Control onBlur={handleBlurName} type="text" placeholder="Enter Your Name" />
                        <Form.Text className="text-muted">
                        </Form.Text>
                    </Form.Group>
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
                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Confirm Password</Form.Label>
                        <Form.Control onBlur={handleBlurConfirmPass} type="password" placeholder="Confirm Password" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicCheckbox">
                        <Form.Check onClick={handleAgree} type="checkbox" id='' label="Are You wanna Registration?" />
                    </Form.Group>
                    <Button disabled={!agree} variant="primary" type="submit">
                        Registration
                    </Button>
                </Form>
            </div>
        </div>
    );
};

export default Register;