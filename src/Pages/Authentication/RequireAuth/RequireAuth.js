import React from 'react';
import { ToastContainer, toast } from 'react-toastify';
import { useAuthState, useSendEmailVerification } from 'react-firebase-hooks/auth';
import { Navigate, useLocation } from 'react-router-dom';
import auth from '../../../firebase.init';

const RequireAuth = ({ children }) => {
    const [user, loading, error] = useAuthState(auth);
    const location = useLocation();
    const [sendEmailVerification, sending, error2] = useSendEmailVerification(auth);
    if (loading) {
        return <p>loading</p>
    }
    if (!user.emailVerified) {
        return <div className='text-center'>
            <h3 className='text-danger'>Your email is not varified</h3>
            <p className='text-warning'>Please Varified Your Email</p>
            <button className='btn btn-primary'
                onClick={async () => {
                    await sendEmailVerification();
                    toast('Sent email.Cheak Your Email.');
                }}
            >
                Verify email
            </button>
            <ToastContainer></ToastContainer>
        </div>
    }
    if (user) {
        return children;
    } else {
        return <Navigate to='/login' state={{ from: location }} replace></Navigate>
    }

};

export default RequireAuth;