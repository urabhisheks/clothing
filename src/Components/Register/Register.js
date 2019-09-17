import React, {Component} from 'react';
import FormInput from '../FormInput/FormInput';
import Button from '../Button/Button';
import {auth, createUserProfileDocument} from '../../firebase/firebase.utils';

import './Register.scss';

class Register extends Component {

  state = {
    displayName: '',
    password:'',
    confirmPassword: '',
    email: '',
  }

  handleSubmit = async event => {
    event.preventDefault();
    const {displayName, email, password, confirmPassword} = this.state;
    if(password !== confirmPassword){
      alert("Password don't match");
      return;
    }

    try{
      const {user} = await auth.createUserWithEmailAndPassword(email, password);
      await createUserProfileDocument(user, {displayName});
      this.setState({
        displayName: '',
        password:'',
        confirmPassword: '',
        email: '',
      });
    } catch(error){
      console.error(error);
    }
  }

  handleChange = event => {
    const {name, value} = event.target;
    this.setState({[name]: value});
  }
  render() {
    const {displayName, email, password, confirmPassword} = this.state;
    return (
      <div className='register'>
        <h2 className='title'>I do not have a account</h2>
        <span> Sign up with your email and password</span>
        <form className='register-form' onSubmit={this.handleSubmit}>
          <FormInput 
            type='text' 
            name='displayName' 
            value={displayName} 
            onChange={this.handleChange}
            label='Display Name'
            required
          />

          <FormInput 
            type='email' 
            name='email' 
            value={email} 
            onChange={this.handleChange}
            label='Email'
            required
          />

          <FormInput 
            type='password' 
            name='password' 
            value={password} 
            onChange={this.handleChange}
            label='Password'
            required
          />

          <FormInput 
            type='password' 
            name='confirmPassword' 
            value={confirmPassword} 
            onChange={this.handleChange}
            label='Confirm Password'
            required
          />
          <Button type= 'submit'> Sign Up</Button>
        </form>
      </div>
    )
  }
};

export default Register;