import React from 'react';
import Login from '../Login/Login';
import Register from '../Register/Register';
import './Authentication.scss';

const Authentication =()=> {

  return (
    <div className='login-register'>
      <Login/>
      <Register/>
    </div>
  )
}

export default Authentication;