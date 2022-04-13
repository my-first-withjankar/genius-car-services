import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Register.css'

const Register = () => {
    const navigate = useNavigate()
    const registerNavigate = () => {
        navigate('/login')
    }
    const handleCreateUser = e => {
        e.preventDefault();
        const name = e.target.name.value;
        const email = e.target.email.value;
        const password = e.target.password.value;
        console.log(name, email, password);

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
                <input type="submit" value="REGISTER HERE" />
            </form>
            <p className='mt-2 '><small>already have an account? <Link to='/login' onClick={registerNavigate} className='text-primary'>Log in </Link></small></p>
        </div>
    );
};

export default Register;