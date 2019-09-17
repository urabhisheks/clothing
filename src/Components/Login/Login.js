import React, {Component} from 'react';
import FormInput from '../FormInput/FormInput';
import Button from '../Button/Button';
import {auth, signInWithEmailAndPassword, signinWithGoogle} from '../../firebase/firebase.utils';
import './Login.scss';

class Login extends Component {

  state= {
    email: '',
    password: '',
  }

  handleSubmit= async e => {
    e.preventDefault();
    const {email, password} = this.state;
    try {
      await auth.signInWithEmailAndPassword(email, password);
    } catch(error){
      console.error(error);
    }
    this.setState({email: '', password: ''});
  }

  handleChange = (e) => {
    const {name, value} = e.target;
    this.setState({[name]: value});
  }

  render() {
    return (
      <div className='login'>
        <h2>I already have an account</h2>
        <span >Sign in with your email and password</span>
        <form onSubmit={this.handleSubmit} >
          <FormInput 
            name='email' 
            type ='email' 
            value={this.state.email} 
            required 
            handleChange={this.handleChange}
            label='Email'/>

          <FormInput 
            name='password' 
            type='password' 
            value={this.state.password} 
            required 
            handleChange={this.handleChange}
            label='Password'/>
          <div className='buttons'>
            <Button type='submit'>Sign In </Button>
            <Button onClick={signinWithGoogle} isGoogleSignIn>Sign In With Google</Button>
          </div>
        </form>
      </div>
    )
  }
}
export default Login;