import React from 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { media } from '../asset'
import "../styles/Signup.css"
import { signup } from '../types';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';

export default function Signup() {

  // react-router navigator
  const navigate = useNavigate()

  //Backend URL 
  const url = "http://localhost:5000/"


  //Initial values of the form
  const initialValues:signup = {
    username: "",
    password: "",
    confirmpassword: ""
  }



  // Form validation
  const validate = async(values:signup)=>{
   
    let error:any = {};
    
    // Check password matches
    if(values.password !== values.confirmpassword){
      error.confirmpassword= 'Password does not match'
      error.password = "Password does not match"
    }


    // Check username
    const usernameExists = await axios.post(url+"auth/checkUsername", {username: values.username})
  
  
    if(usernameExists.data){
      error.username = "Username is taken";
    }


    return error;
  }



  // Password visiblity 
  const switchPasswordVisiblity = (e:any) =>{

    let iconElement = e.target;
    let passElement = iconElement.previousElementSibling;

    if(passElement.type === "password"){
      passElement.type = "text"
      iconElement.src = media.passwordVisible
    }else{
      passElement.type = "password"
      iconElement.src = media.passwordInvisible
    }
  }


  // On Submit action
  const onSubmit = async(values:signup)=>{

    await axios.post(url+"auth/signup", values);
    navigate("/login")
  }


  return (
    // signup age container
    <div className="signup-page">

      {/* Background Image */}
      <img className='background' src={media.signupbg}/>
      

      <Formik initialValues={initialValues} validate={(values:signup)=> validate(values)} onSubmit={(values:signup)=>onSubmit(values)} >
          <Form className='form'>
            <h1>Create Account</h1>
            <div className="field-containers-wrap">
              <div className="field-containers">
                <div className="icon-field">
                  <img className='icon' src={media.usernameIcon} alt="" />
                  <Field required className="field" name="username" placeholder="Username"/>
                </div>
                <ErrorMessage name="username">{msg => <div className='errors'>{msg}</div>}</ErrorMessage>
              </div>
              <div className="field-containers">
                <div className="icon-field">
                  <img className='icon' src={media.passwordIcon} alt="" />
                  <Field required type="password" className="field" name="password" placeholder="Password" />
                  <img className='icon' src={media.passwordInvisible} id='password-visibility' onClick={(e)=>switchPasswordVisiblity(e)} alt="" />
                </div>
                <ErrorMessage name="password" >{msg => <div className='errors'>{msg}</div>}</ErrorMessage>
              </div>
              <div className="field-containers">
                <div className="icon-field">
                  <img className='icon' src={media.passwordIcon} alt="" />
                  <Field required type="password" className="field" name="confirmpassword" id="" placeholder="Confirm Password" />
                  <img className='icon' src={media.passwordInvisible} id='confirm-password-visibility' onClick={(e)=>switchPasswordVisiblity(e)} alt="" />
                </div>
                <ErrorMessage name="confirmpassword" >{msg => <div className='errors'>{msg}</div>}</ErrorMessage>
              </div>
            </div>
            <button type='submit' className='submit-btn'>Sign Up</button>
          </Form>
      </Formik>  
      <div className="login-link-container">Already have an account? <Link className="login-link" to="/login">Log In</Link></div>
    </div>
  )
}
