import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useCreateUserWithEmailAndPassword, useUpdateProfile } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import './Register.css'
import SocialLogin from '../SocialLogin/SocialLogin';
import Loading from '../Shared/Loading/Loading';

const Register = () => {
    const [updateProfile, updating, error] = useUpdateProfile(auth);
    const navigate = useNavigate()
    const [agree, setAgree] = useState(false)
    const [
        createUserWithEmailAndPassword,
        user,
        loading
    ] = useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });
    const registerNavigate = () => {
        navigate('/login')
    }
    if (loading || updating) {
        return <Loading></Loading>
    }
    if (user) {
        console.log(user);
    }
    const handleCreateUser = async (e) => {
        e.preventDefault();
        const name = e.target.name.value;
        const email = e.target.email.value;
        const password = e.target.password.value;

        await createUserWithEmailAndPassword(email, password)
        await updateProfile({ displayName: name });
        console.log('Updated profile');
        navigate('/home')
    }
    return (
        <div className='register-form'>
            <h1 className='text-center mt-5 text-primary'>REGISTER HERE</h1>
            <form onSubmit={handleCreateUser}>
                <label htmlFor="name">Your Name</label>
                <input type="text" name="name" id="" placeholder='your name' />
                <label htmlFor="email">Email</label>
                <input type="email" name="email" id="" required placeholder='email' />
                <label htmlFor="password">Password</label>
                <input type="password" name="password" id="" required placeholder='password' />
                <input onClick={() => setAgree(!agree)} type="checkbox" name="terms" id="terms" />
                <label className={`ps-2 ${agree ? '' : 'text-danger'}`} htmlFor="terms">Accept Genius-car terms and conditions</label>
                <input disabled={!agree} className='mt-2 btn btn-primary w-50 d-block mx-auto' type="submit" value="REGISTER HERE" />
            </form>
            <p className='mt-3 '><small>already have an account? <Link to='/login' onClick={registerNavigate} className='text-primary'>Log in </Link></small></p>
            <SocialLogin></SocialLogin>
        </div>
    );
};

export default Register;