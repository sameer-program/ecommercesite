import React from 'react'
import { useState } from 'react';


const MyAccount =() =>{
  
  const [userRegistration, setUserRegistration] =useState ({
    username: "",
    password: ""
  });

  const [records, setRecords] =useState ([]);
  const handleInput =(e) =>{
    const name = e.target.name;
    const value = e.target.value;
    console.log(name, value)

    setUserRegistration({...userRegistration, [name]: value })
  };

  const handleSubmit =(e) =>{
    e.preventDefault();

    const newRecord = { ...userRegistration, id:new Date().getTime().toString()}
    console.log(records);
    setRecords([...records, newRecord]);
    console.log(records);
  }
  return (
    
    <div>
      <div className='con'>
        <form action='' onSubmit={handleSubmit}>
        <div className='bl'>
          <div className='tt'>
            <h1> Login </h1>
            <h4> Username or Email address</h4>
            <input type='text' autoComplete='on'
            value={userRegistration.username}
            onChange={handleInput}
            name='username' id='username'/>
            <h4> Password</h4>
            <input type='text' autoComplete='off'
            value={userRegistration.password}
            onChange={handleInput}
            name='password' id='password'/> 
            <div className='dd'><input type='checkbox'/><p> Remember Me </p></div>
            <button type='submit'> Login </button>
            <h5>Lost your password?</h5>
            </div>
        </div>
        </form>
      </div>
    </div>
    
  )
}
export default MyAccount;
