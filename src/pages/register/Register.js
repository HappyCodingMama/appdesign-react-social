import React from 'react';
import './register.scss';
import { Link } from 'react-router-dom';

const Register = () => {
  return (
    <div className='container-register'>
      <div className='register-box'>
        <div className='left-register-box'>
          <h1>Register</h1>
          <form className='register-form'>
            <input type='text' placeholder='username' />
            <input type='email' placeholder='email' />
            <input type='password' placeholder='password' />
            <input type='text' placeholder='confirmed password' />
            <button className='btn register-btn'>register</button>
          </form>
        </div>

        <div className='right-register-box'>
          <h3>Hey,</h3>
          <h1>Chat!</h1>
          <p>
            It provides direct message, group conversations, and spaces in a
            central place in addition to chatting.
          </p>
          <span>Do you have an account?</span>
          <Link to='/login'>
            <button className='btn-line register-btn'>Login</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Register;
