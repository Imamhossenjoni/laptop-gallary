import React from 'react';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import { useLocation, useNavigate } from 'react-router-dom';
import googlepic from '../../../images/google.png'

const SocialLogin = () => {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth)

    const navigate = useNavigate();
    const location=useLocation();
    let from =location?.state?.from?.pathname || '/'
    let errorElement;
    if (error) {
        errorElement =
            <>
                <p className='text-danger'>{error?.message}</p>
            </>
    }
    if (user) {
        navigate(from,{replace:true})
    }
    return (
        <div >
            <div className='d-flex align-items-center'>
                <h1 className='mt-2 px-2 mx-auto fs-2'>Or</h1>
            </div>
            <p className='text-center'>{errorElement}</p>
            <div>
                <button
                    onClick={() => signInWithGoogle()}
                    className='btn btn-info d-block w-50 mx-auto my-2'>
                    <img src={googlepic} alt=''></img>
                    <span className='px-3 fs-2 btn btn primary'>Google SignIn</span>
                </button>
            </div>

        </div>
    );
};

export default SocialLogin;