import React from "react";
import { useState } from "react";
import { register } from "../services/user";
import { toast } from "react-toastify";
import {Link, useNavigate} from 'react-router-dom'

function Signup() {

  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [email, setEmail] = useState('')
  const [mobile, setMobile] = useState('')
  const [password, setPassword] = useState('')
  const [birth, setBirth ] = useState('');
  //const [confirmPassword, setConfirmPassword] = useState('')

  const navigate = useNavigate()

    const onSignup = async () => {
    if (firstName.length == 0) {
      toast.warning('please enter first name')
    } else if (lastName.length == 0) {
      toast.warning('please enter last name')
    } else if (email.length == 0) {
      toast.warning('please enter email')
    } else if (mobile.length == 0) {
      toast.warning('please enter mobile number')
    } else if (password.length == 0) {
      toast.warning('please enter password')
    } else if (birth.length == 0) {
      toast.warning('please birth')
    }  else {
      const response = await register(
        firstName,
        lastName,
        email,
        password,
        mobile,
        birth
      )
      console.log(response);
      if (response['status'] === 'success') {
        toast.success('Successfully registered user')

        // go to the Login page
        navigate('/')
      } else {
        toast.error(response['error'])
      }
    }
  }


  
  return (
    <div className="container" style={{ maxWidth: "600px", marginTop: "50px" }}>
      <h2 className="page-header">Sign Up</h2>
      <div className="signup-container">
       
        <div className="col-12">
          <label htmlFor="firstName" className="form-label">
            First Name
          </label>
          <input 
          onChange={(e) => setFirstName(e.target.value)}
          type="text" className="form-control" id="firstName" />
        </div>

        <div className="col-12">
          <label htmlFor="lastName" className="form-label">
            Last Name
          </label>
          <input 
           onChange={(e) => setLastName(e.target.value)}
          type="text" className="form-control" id="lastName" />
        </div>

        <div className="col-12">
          <label htmlFor="email" className="form-label">
            Email
          </label>
          <input 
          onChange={(e) => setEmail(e.target.value)}
          type="email" className="form-control" id="email" />
        </div>

        <div className="col-12">
          <label htmlFor="password" className="form-label">
            Password
          </label>
          <input 
           onChange={(e) => setPassword(e.target.value)}
          type="password" className="form-control" id="password" />
        </div>

  
        <div className="col-md-6">
          <label htmlFor="mobile" className="form-label">
            Mobile
          </label>
          <input 
          onChange={(e) => setMobile(e.target.value)}
          type="tel" className="form-control" id="mobile" placeholder="123-456-7890" />
        </div>

        <div className="col-md-6">
          <label htmlFor="date" className="form-label">
            Date of Birth
          </label>
          <input 
          onChange={(e) => setBirth(e.target.value)}
          type="date" className="form-control" id="date" />
        </div>

       
        <div className="col-12">
          <button 
          onClick={onSignup}
          type="submit" className="btn btn-primary w-100">
            Sign Up
          </button>
        </div>
      </div>
    </div>
  );
}

export default Signup;
