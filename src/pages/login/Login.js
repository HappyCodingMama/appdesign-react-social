import React, { useContext } from 'react';
import './login.scss';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../context/authContext';

const Login = () => {
  const { login } = useContext(AuthContext);

  const handleLogin = () => {
    login();
  };

  return (
    <div className='container-login'>
      <div className='login-box'>
        <div className='left-login-box'>
          <h3>Hey,</h3>
          <h1>Chat!</h1>
          <p>
            It provides direct message, group conversations, and spaces in a
            central place in addition to chatting.
          </p>
          <span>Don't you have an account?</span>
          <Link to='/register'>
            <button className='btn-line register-btn'>Register</button>
          </Link>
        </div>
        <div className='right-login-box'>
          <h1>Login</h1>
          <form className='login-form'>
            <input type='text' placeholder='username' />
            <input type='text' placeholder='password' />

            <button className='btn login-btn' onClick={handleLogin}>
              Login
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
