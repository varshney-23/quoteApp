import React, { useRef } from 'react'
import styles from './Register.module.css'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Register = () => {

  let navi = useNavigate();

  let firstRef = useRef();
  let lastRef = useRef();
  let emailRef = useRef();
  let passRef = useRef();

  const handleregister = async (e)=>{
    
    e.preventDefault();

    const firstName = firstRef.current.value ;
    const lastName = lastRef.current.value;
    const email = emailRef.current.value;
    const password = passRef.current.value;
    
    try{
      let res = await axios.post('http://localhost:8080/register', {firstName, lastName, email, password});
      console.log(res);
      navi('/allQuotes');
    } 
    catch (err) {
      alert("User Already exists");
    }



  }

  return (
    <form onSubmit={handleregister} className={styles['new-quote-form']}>
      <div>
        <label htmlFor="name">First Name : </label>
        <input ref = {firstRef} type="text" id='name' placeholder='First Name'/>
      </div>
      <div>
        <label htmlFor="lsname">Last Name : </label>
        <input ref = {lastRef} type="text" id='lsname' placeholder='Last Name'/>
      </div>
      <div>
        <label htmlFor="email">Email : </label>
        <input ref = {emailRef} type="text" id='email' placeholder='Email'/>
      </div>
      <div>
        <label htmlFor="pass">Password : </label>
        <input ref = {passRef} type="password" id='pass' placeholder='password'/>
      </div>
      <button>Submit</button>
    </form>
  )
}

export default Register