import React, { useEffect, useRef, useState } from 'react'
import './SignInSignUp.css'
import Home from './Home';
function SignInSignUp() {
    const name=useRef();
    const email=useRef();
    const password=useRef();
    const phoneNumber=useRef();
    const profession=useRef();
    const localSignUp=localStorage.getItem("signUp");
    const localEmail=localStorage.getItem("email");
    const localPassword=localStorage.getItem("password");
    const localPhoneNumber=localStorage.getItem("phoneNumber");
    const localProfession=localStorage.getItem("profession");
    const [showHome,setShowHome]=useState(false);
    const [show,setShow]=useState(false);
    const localName=localStorage.getItem("name");
    useEffect(()=>{
        if(localSignUp){
            setShowHome(true);
        }
        if(localEmail){
            setShow(true)
        }
    }
    )
    const handleClick= ()=>{
        if(name.current.value && email.current.value&& password.current.value){
            localStorage.setItem("name",name.current.value);
            localStorage.setItem("email",email.current.value);
            localStorage.setItem("password",password.current.value);
            localStorage.setItem("signUp",email.current.value);
            localStorage.setItem("phoneNumber",phoneNumber.current.value);
            localStorage.setItem("phoneNumber",phoneNumber.current.value);
            localStorage.setItem("profession",profession.current.value);
            alert("Account Created Successfully");
            window.location.reload();  
        }
    }
    const handleSignIn=()=>{
        if(email.current.value===localEmail&&password.current.value===localPassword){
            localStorage.setItem("signUp",email.current.value)
            window.location.reload()
        }
        else{
            alert("Please Enter valid Credential")
        }
       }
  return (
    <div>
         {showHome?<Home/>:
            (show?
        <div className='container'> 
            <h1>Sign In Form</h1>
            <div className='input-space'>
                <input placeholder='Enter your Email' type='text' ref={email}/>
            </div>
            <div className='input-space'>
                <input placeholder='Enter your Password' type='password' ref={password}/>
            </div>
            <button onClick={handleSignIn}>Sign In</button>
        </div>
        :
        <div className='container'> 
            <div className='input-space'>
                <input placeholder='Enter your Name' type='text' ref={name}/>
            </div>
            <div className='input-space'>
                <input placeholder='Enter your Email' type='text' ref={email}/>
            </div>
            <div className='input-space'>
                <input placeholder='Enter your Password' type='password' ref={password}/>
            </div>
            <div className='input-space'>
                <input placeholder='Enter your Phone Number' type='number' ref={phoneNumber}/>
            </div>
            <div className='input-space'>
                <label>Choose Profession</label>
                <select ref={profession}>
                    <option value="student">student</option>
                    <option value="developer">developer</option>
                </select>
            </div>
            
            <button onClick={handleClick}>Sign Up</button>
        </div>)
}
    </div>
  );
}

export default SignInSignUp