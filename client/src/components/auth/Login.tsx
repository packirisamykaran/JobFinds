import React from 'react'
import { login } from '../types'
import {  Formik, Form, Field, ErrorMessage, FormikHelpers, useFormik } from 'formik';
import { media } from '../asset'
import "../styles/Login.css"
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';



export default function Login() {

  // backend URL
  const url = "http://localhost:5000/"

  // react-router navigation
  const navigate = useNavigate();

  //Initial values of the form
  const initialValues: login = {
    username: "",
    password: ""
  }


  // Password visiblity 
  const switchPasswordVisiblity = (e:any) =>{

    let iconElement = e.target;
    let passElement = iconElement.previousElementSibling;

    // swtich input type and icon
    if(passElement.type === "password"){
      passElement.type = "text"
      iconElement.src = media.passwordVisible
    }else{
      passElement.type = "password"
      iconElement.src = media.passwordInvisible
    }
  }



  // On submit action
  const onSubmit = (values: login) => {
    
    // Navigate to home page
    navigate('/signup')

  }
  
  // Validation
  const validate = async(values:login ) =>{

    let error:any = {}
    
    // Check if username exist and password is valid
    const userExists = await axios.post(url+"auth/checkLoginCredentials", {username: values.username, password:values.password});
    if(!userExists.data.username){
      error.username = "Invalid Username"
    }
    else{
      if(!userExists.data.password){
        error.password= "Incorrect Password"  
      }
    }



    return error;
  }

  return (
    <div className="login-page">
      <Formik  initialValues={initialValues} validateOnChange={false} validateOnBlur={false} validate={(values:login) => validate(values)}  onSubmit={(values: login) => onSubmit(values)}>
        <Form className='form'>
          <div className="field-containers-wrap">
            <div className="field-containers">
              <div className="icon-field">
                <img className='icon' src={media.usernameIcon} alt="" />
                <Field required className="field" name="username" placeholder="Username" />
              </div>
              <ErrorMessage name="username">{msg => <div className='errors'>{msg}</div>}</ErrorMessage>
            </div>
            <div className="field-containers">
              <div className="icon-field">
                <img className='icon' src={media.passwordIcon} alt="" />
                <Field required type="password" className="field" name="password" placeholder="Password" />
                <img className='icon' src={media.passwordInvisible} id='password-visibility' onClick={(e) => switchPasswordVisiblity(e)} alt="" />
              </div>
              <ErrorMessage name="password" >{msg => <div className='errors'>{msg}</div>}</ErrorMessage>
            </div>
          </div>
          <button onClick={()=>console.log("clicked")} type='submit' className='submit-btn'>Log In</button>
          <div className="signup-link-container">Don't have account? <Link to="/signup" className='signup-link'>Sign Up</Link></div>
        </Form>
      </Formik>
    </div>
  )
}
